'use server'

import nodemailer from 'nodemailer'

export async function sendEmail(formData) {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'hamizasghar@gmail.com', 
                pass: 'hfra fdvu qpgp veom' 
            }
        })

        const mailOptions = {
            from: formData.get('email'),
            to: 'hamizasghar@gmail.com',
            subject: `New Contact Form Message from ${formData.get('name')}`,
            text: `
        Name: ${formData.get('name')}
        Email: ${formData.get('email')}
        Message: ${formData.get('message')}
      `,
            html: `
        <h3>New Contact Form Message</h3>
        <p><strong>Name:</strong> ${formData.get('name')}</p>
        <p><strong>Email:</strong> ${formData.get('email')}</p>
        <p><strong>Message:</strong> ${formData.get('message')}</p>
      `
        }

        await transporter.sendMail(mailOptions)
        return { success: true }
    } catch (error) {
        console.error('Email error:', error)
        return { success: false, error: 'Failed to send email' }
    }
}

