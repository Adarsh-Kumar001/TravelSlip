# ✈️ Travel Itinerary & Ticket PDF Generator

A **MERN stack** web application that allows users to create and manage **travel itineraries**. It generates **travel itinerary as PDFs**, sends them via **email** automatically.

---

## Demo 

[![TravelSLip Demo](https://img.youtube.com/vi/EotuqWqNbHg/0.jpg)](https://www.youtube.com/watch?v=EotuqWqNbHg)

## 🚀 Features

- Add travel details (From, To, Date, Travel Type)
- Add multiple passengers with details (Name, Email, Age, Seat Number)
- Generate **travel itineraries in PDF format**
- Send **individual ticket PDFs** to each passenger’s email
- **Preview tickets** directly in the browser
- Import passenger details from CSV

---

## Tech Stack

### Frontend
- **React.js** 
- **Tailwind CSS** 

### Backend
- **Node.js + Express.js** – Server and API handling  
- **MongoDB Atlas** – Cloud database for storing travel details  

### PDF & Email
- **pdf-lib** – PDF generation and formatting  
- **Nodemailer** – Sending emails with ticket attachments  
- **multer + csv-parser** – CSV upload & parsing for passengers  

---

## Workflow

1. **User Inputs Travel Details**  
   - From, To, Date, Travel Type  
   - Passenger details: Name, Email, Age, Seat Number  

2. **Data Sent to Backend**  
   - Backend validates and saves details to **MongoDB**  

3. **PDF Generation**  
   - Using **pdf-lib** a ticket is generated for each passenger  
   - Ticket contains **passenger’s name, email, age, seat number**  

4. **Email Distribution**  
   - Using **Nodemailer** each passenger receives their own **pdf**  

5. **Preview**  
   - Users can **view their ticket directly in browser** (same tab)  

---



