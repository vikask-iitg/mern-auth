# 🔐 MERN Authentication System

A **full-featured user authentication system** built using the **MERN stack** (MongoDB, Express, React, Node.js).  
This project demonstrates how to implement **secure, modern authentication flows** including email verification and password reset using OTPs.

---

![MERN Auth Demo](https://raw.githubusercontent.com/vikask-iitg/mern-auth/main/client/src/assets/Demo_Image_Mern_Auth.jpeg)



## 🚀 Features

- ✅ User Registration with **hashed passwords**
- 🔐 User Login with **JWT-based authentication**
- 🍪 Secure authentication using **HTTP-only cookies**
- 📧 Email Verification via **6-digit OTP**
- 🔁 Password Reset using **time-limited OTP**
- 📤 Transactional Emails using **NodeMailer (SMTP)**
- 🛡️ Protected Routes with **JWT Middleware**
- ⚛️ Frontend built with **React + Vite**
- 🎨 Responsive UI using **Tailwind CSS**
- 🔔 User feedback with **React Toastify**

---

## 🧱 Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- NodeMailer
- cookie-parser
- dotenv
- cors

### Frontend
- React (Vite)
- React Router DOM
- Axios
- Tailwind CSS
- React Toastify
- Context API

---

## 📁 Project Structure

```bash
mern-auth/
│
├── server/                 # Backend (Express API)
│   ├── config/             # DB & Nodemailer config
│   ├── controllers/        # Auth & User controllers
│   ├── middleware/         # JWT auth middleware
│   ├── models/             # Mongoose schemas
│   ├── routes/             # API routes
│   ├── server.js           # Entry point
│   └── .env
│
├── client/                 # Frontend (React)
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── .env
│
└── README.md

```

# 🔐 Authentication Flow

## 📝 Register
- Password hashed with **bcryptjs**
- JWT generated and stored in **HTTP-only cookie**
- Welcome email sent

## 🔑 Login
- Credentials validated
- JWT issued and stored in cookie

## 📧 Email Verification
- 6-digit OTP generated
- OTP emailed and stored with expiry
- User verified after OTP validation

## 🔁 Password Reset
- OTP sent to registered email
- OTP valid for limited time
- New password hashed and saved

## 🚪 Logout
- JWT cookie cleared

---

# 📡 API Endpoints

## 🔐 Auth Routes (`/api/auth`)

| Endpoint              | Method | Description                     | Auth |
|-----------------------|--------|---------------------------------|------|
| `/register`           | POST   | Register new user               | ❌   |
| `/login`              | POST   | Login user                      | ❌   |
| `/logout`             | GET    | Logout user                     | ✅   |
| `/send-verify-otp`    | POST   | Send email verification OTP    | ✅   |
| `/verify-account`     | POST   | Verify email using OTP          | ✅   |
| `/send-reset-otp`     | POST   | Send password reset OTP         | ❌   |
| `/reset-password`     | POST   | Reset password via OTP          | ❌   |
| `/is-authenticated`   | GET    | Check authentication status    | ✅   |

---

## 👤 User Routes (`/api/user`)

| Endpoint | Method | Description                          | Auth |
|----------|--------|--------------------------------------|------|
| `/data`  | GET    | Get user info & verification status  | ✅   |


# 🧠 User Model (MongoDB)

```js
{
  name: String,
  email: String,
  password: String,
  isVerified: Boolean,
  verifyOTP: String,
  verifyOTPExpireAt: Date,
  resetOTP: String,
  resetOTPExpireAt: Date
}
```

# 🛡️ Security Best Practices

- 🔒 Passwords hashed using **bcrypt**
- 🍪 JWT stored in **HTTP-only cookies**
- ⏳ OTPs with **expiration time**
- 🧱 Protected routes using **authentication middleware**
- 🔐 Secrets managed using **environment variables**

---

# ⚙️ Environment Variables

## Backend (`server/.env`)

```env
PORT=4000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
SMTP_HOST=your_smtp_host
SMTP_PORT=your_smtp_port
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_password
CLIENT_URL=http://localhost:5173

```
# ⚙️ Frontend Environment Variables

## Frontend (`client/.env`)

```env
VITE_BACKEND_URL=http://localhost:4000

```
# ▶️ Getting Started

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/mern-auth.git
cd mern-auth
```
## 2️⃣ Backend Setup

```bash
cd server
npm install
npm run dev
```
## 3️⃣ Frontend Setup

```bash
cd client
npm install
npm run dev
```

# 🎨 UI & UX Highlights

- ✨ Auto-focus OTP inputs  
- 📋 Paste OTP support  
- 📱 Responsive layout  
- 🔔 Toast notifications for all actions  
- 🎨 Clean and modern design with **Tailwind CSS**

---

# 📌 Key Learnings

- 🔐 Implementing stateless authentication using **JWT**
- 🍪 Secure cookie-based authentication in **MERN applications**
- 📧 Email-based **OTP verification flows**
- 🧩 Clean separation of concerns using the **MVC pattern**
- 📈 Scalable and maintainable project structure

