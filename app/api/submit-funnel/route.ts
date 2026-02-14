import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { contactInfo, answers } = body;

    // Configuration du transporteur Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    // Formatage des réponses pour l'email
    const answersHTML = answers
      .map(
        (answer: { questionId: number; question: string; answer: string }) => `
        <div style="margin-bottom: 20px; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #c5a028;">
          <p style="margin: 0 0 8px 0; font-weight: bold; color: #333;">
            Question ${answer.questionId}: ${answer.question}
          </p>
          <p style="margin: 0; color: #666; font-size: 16px;">
            <strong>Réponse:</strong> ${answer.answer}
          </p>
        </div>
      `,
      )
      .join("");

    // Options de l'email
    const mailOptions = {
      from: `"Freedom Digital" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECIPIENT,
      subject: "🎯 Nouveau prospect Freedom Digital",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: 'Poppins', Arial, sans-serif;
                background-color: #fffdf9;
                padding: 20px;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                background-color: white;
                border-radius: 12px;
                overflow: hidden;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              }
              .header {
                background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 60%, #3d3311 100%);
                padding: 30px;
                text-align: center;
              }
              .header h1 {
                color: #c5a028;
                margin: 0;
                font-size: 28px;
                font-family: 'Playfair Display', serif;
              }
              .content {
                padding: 30px;
              }
              .intro {
                font-size: 16px;
                color: #333;
                margin-bottom: 30px;
                line-height: 1.6;
              }
              .footer {
                background-color: #f5f5f5;
                padding: 20px;
                text-align: center;
                font-size: 14px;
                color: #666;
              }
              .contact-box {
                background-color: #fffdf9;
                border: 2px solid #c5a028;
                border-radius: 8px;
                padding: 20px;
                margin-bottom: 30px;
              }
              .contact-box h2 {
                color: #c5a028;
                margin: 0 0 15px 0;
                font-size: 20px;
              }
              .contact-box p {
                margin: 8px 0;
                font-size: 16px;
                color: #333;
              }
              .contact-box a {
                color: #c5a028;
                text-decoration: none;
              }
              .timestamp {
                color: #999;
                font-size: 12px;
                margin-top: 10px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>✨ Freedom Digital</h1>
              </div>
              <div class="content">
                <p class="intro">
                  <strong>Bonjour Diane,</strong><br><br>
                  Vous avez reçu un nouveau prospect qui a complété le questionnaire Freedom Digital.
                </p>
                
                <div class="contact-box">
                  <h2>📞 Coordonnées du prospect</h2>
                  <p>
                    <strong>📧 Email:</strong> <a href="mailto:${contactInfo.email}">${contactInfo.email}</a>
                  </p>
                  <p>
                    <strong>📱 Téléphone:</strong> <a href="tel:${contactInfo.phone}">${contactInfo.phone}</a>
                  </p>
                </div>

                <h3 style="color: #333; margin-bottom: 20px; font-size: 18px;">Réponses au questionnaire:</h3>
                ${answersHTML}
                <p class="timestamp">
                  Reçu le ${new Date().toLocaleDateString("fr-FR", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
              <div class="footer">
                <p>Cet email a été envoyé automatiquement depuis votre funnel Freedom Digital.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    };

    // Envoi de l'email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email envoyé avec succès" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi de l'email" },
      { status: 500 },
    );
  }
}
