import { NextResponse } from "next/server";
import nodemailer from "nodemailer";


// Define the GET request handler
export async function POST(request) {
    const jsonBody = await request.json();
    const email = jsonBody['email'];
    const token = jsonBody['token'];

    // make the email
    const { emailSubject, emailBody } = emailMaker(email, token);

    // Create a transporter for sending emails
    let transporter = nodemailer.createTransport({
        host: 'mail.teamrabbil.com',
        port: 25,
        secure: false,
        auth: {
            user: 'info@teamrabbil.com',
            pass: "~sR4[bhaC[Qs"
        },
        tls: { rejectUnauthorized: false }
    });

    // Define the email options
    let mailOptions = {
        from: "Test email <info@teamrabbil.com>",
        to: email,
        subject: emailSubject,
        text: emailBody
    }

    try {
        // Send the email
        const result = await transporter.sendMail(mailOptions);

        // Return a JSON response indicating success
        return NextResponse.json({ status: 'success', message: result });
    }
    catch (error) {
        // Handle email sending error and return an error response
        console.error("Email sending error:", error);
        return NextResponse.json({ message: "Failed to send email" });
    }
}


function emailMaker(email, token) {
    const userEmail = email;
    const userToken = token;

    // Initialize userName as null
    let userName = null;
    const parts = email.split('@');

    // Check if the email has the "@" character
    if (parts.length === 2) {
        // The first part (parts[0]) is the username
        userName = parts[0];
    }

    const emailSubject = "Your Login Information"; // Replace with your email subject
    const emailBody = `
Dear ${userName || 'User'},

Thank you for using our service. Here is your account information:

Email: ${userEmail}
Token: ${userToken}

Please keep this information secure and do not share it with anyone.

If you have any questions or need assistance, feel free to reach out to our support team at rasel.learn22@gmail.com


Best regards,

Rasel Rana
`;

    return { emailSubject, emailBody };
}
