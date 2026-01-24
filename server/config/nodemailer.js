import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";


// Load .env safely inside this module (ESM-safe)

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
    path: path.resolve(__dirname, "../.env"),
});

// Validate required environment variables

const { SMTP_USER, SMTP_PASS, SENDER_EMAIL } = process.env;

if (!SMTP_USER || !SMTP_PASS || !SENDER_EMAIL) {
    throw new Error(
        "SMTP credentials are missing. Please check SMTP_USER, SMTP_PASS, and SENDER_EMAIL in your .env file"
    );
}

//Create Nodemailer transporter (Brevo SMTP)

const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    secure: false,
    auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
    },
});


// Optional: Verify SMTP connection (safe for prod)

transporter.verify()
    .then(() => {
        console.log("SMTP server is ready to send emails");
    })
    .catch((err) => {
        console.error("SMTP configuration error:", err.message);
    });

export default transporter;

