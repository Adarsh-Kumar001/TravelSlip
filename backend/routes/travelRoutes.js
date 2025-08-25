import express from 'express';
import Travel from '../models/Travel.js';
import Passengers from '../models/Passengers.js';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import nodemailer from 'nodemailer';

const router = express.Router();

// Generate PDF for a single passenger
async function generatePDF(travelinfo, passenger) {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([600, 400]);
  const { height } = page.getSize();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

  let y = height - 50;
  page.drawText('Travel Itinerary', { x: 200, y, size: 20, font, color: rgb(0, 0, 0.8) });

  y -= 40;
  page.drawText(`From: ${travelinfo.From}`, { x: 50, y, size: 14, font });
  y -= 20;
  page.drawText(`To: ${travelinfo.To}`, { x: 50, y, size: 14, font });
  y -= 20;
  page.drawText(`Date: ${travelinfo.Date}`, { x: 50, y, size: 14, font });
  y -= 20;
  page.drawText(`Type: ${travelinfo.Type}`, { x: 50, y, size: 14, font });

  y -= 40;
  page.drawText('Passenger Details:', { x: 50, y, size: 16, font });
  y -= 20;
  page.drawText(`Name: ${passenger.Name}`, { x: 70, y, size: 12, font });
  y -= 20;
  page.drawText(`Age: ${passenger.Age}`, { x: 70, y, size: 12, font });
  y -= 20;
  page.drawText(`Seat: ${passenger.Seat}`, { x: 70, y, size: 12, font });
  y -= 20;
  page.drawText(`Email: ${passenger.Email}`, { x: 70, y, size: 12, font });

  const pdfBytes = await pdfDoc.save();
  return pdfBytes;
}

// Send email with PDF
async function sendEmailWithPDF(email, pdfBytes, passengerName) {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Your Travel Ticket',
    text: `Hello ${passengerName},\n\nAttached is your travel ticket PDF.`,
    attachments: [
      {
        filename: 'itinerary.pdf',
        content: Buffer.from(pdfBytes),
        contentType: 'application/pdf'
      }
    ]
  });
}

// Save and generate PDF  and send email
router.post('/create', async (req, res) => {
  try {
    console.log("Incoming request body:", req.body);
    const { travelinfo, passengers } = req.body;

    // Save travel
    const travel = new Travel({
      from: travelinfo.From,
      to: travelinfo.To,
      date: new Date(travelinfo.Date),
      transportType: travelinfo.Type
    });
    await travel.save();

    // Save passengers linked to travel
    const passengerDocs = passengers.map(passenger => ({
      Name: passenger.Name,
      Age: passenger.Age,
      Email: passenger.Email,
      Phone: passenger.Phone,
      Seat: passenger.Seat,
    }));
    await Passengers.insertMany(passengerDocs);

    let samplePdfBase64 = null;

    // Generate & send PDF email individually
    for (let i = 0; i < passengers.length; i++) {
      const p = passengers[i];
      console.log("Passenger data:", p);

      const pdfBytes = await generatePDF(travelinfo, p);

      // Send email
      if (p.Email) {
        await sendEmailWithPDF(p.Email, pdfBytes, p.Name);
      }

      // Save first passenger's PDF for frontend preview
      if (i === 0) {
        samplePdfBase64 = Buffer.from(pdfBytes).toString('base64');
      }
    }

    res.status(201).json({
      message: 'Travel & passengers saved, PDFs generated & emailed',
      samplePdf: samplePdfBase64 // for frontend preview
    });

  } catch (error) {
    console.error("Error in /api/travel/create:", error);
    res.status(500).json({ error: error.message });
  }
});

export default router;
