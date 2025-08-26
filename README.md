# ✈️ Travel Itinerary & Ticket PDF Generator

A **MERN stack** web application that allows users to create and manage **travel itineraries**. It generates **travel itinerary as PDFs**, sends them via **email** automatically.

---

## Demo 

[![TravelSLip Demo](https://img.youtube.com/vi/EotuqWqNbHg/0.jpg)](https://www.youtube.com/watch?v=EotuqWqNbHg)

## 🚀 Features

- ✅ Add travel details (From, To, Date, Travel Type)
- ✅ Add multiple passengers with details (Name, Email, Age, Seat Number)
- ✅ Generate **personalized travel tickets in PDF format**
- ✅ Send **individual ticket PDFs** to each passenger’s email
- ✅ **Preview tickets** directly in the browser
- ✅ Upload generated tickets automatically to **Google Drive**
- ✅ Import passenger details from CSV
- ✅ Responsive frontend with modern UI (React + Tailwind)

---

## 🏗️ Tech Stack

### 🌐 Frontend
- **React.js** – Component-based frontend framework  
- **Tailwind CSS** – Modern styling & responsive UI  
- **Axios** – For API requests  

### ⚙️ Backend
- **Node.js + Express.js** – Server and API handling  
- **MongoDB Atlas** – Cloud database for storing travel details  
- **Mongoose** – ODM for MongoDB  

### 📄 PDF & Email
- **pdf-lib** – PDF generation and formatting  
- **Nodemailer** – Sending emails with ticket attachments  
- **Google APIs (`googleapis` package)** – Uploading generated PDFs to Google Drive  
- **multer + csv-parser** – CSV upload & parsing for passengers  

---

## 🔄 Workflow

1. **User Inputs Travel Details**  
   - From, To, Date, Travel Type  
   - Passenger details: Name, Email, Age, Seat Number  

2. **Data Sent to Backend**  
   - Backend validates and saves details to **MongoDB**  

3. **PDF Generation**  
   - Using **pdf-lib**, a ticket is generated for each passenger  
   - Ticket contains **passenger’s name, email, age, seat number**  

4. **Email Distribution**  
   - Using **Nodemailer**, each passenger receives their own **personalized ticket**  

5. **Google Drive Upload (Optional)**  
   - Tickets are uploaded to a configured Google Drive folder  

6. **Preview**  
   - Users can **view their ticket directly in browser** (same tab)  

---

## 📂 Project Structure

