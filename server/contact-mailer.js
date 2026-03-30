import nodemailer from "nodemailer";

/**
 * Crée un transporteur SMTP Brevo à partir des variables d'environnement.
 */
function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

/**
 * Envoie l'email de notification interne et l'accusé de réception à l'expéditeur.
 * @param {Object} data - Les données du formulaire validées
 */
export async function sendContactEmail(data) {
  const transporter = createTransporter();

  const { prenom, nom, email, pays, tel, fonction, secteur, motif, message } = data;

  // Email de notification reçu par l'équipe Data Conforme
  const notificationHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #0A192F;">
      <div style="background: linear-gradient(135deg, #0047BA 0%, #00A9C1 100%); padding: 32px; border-radius: 12px 12px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 22px;">Nouveau message de contact</h1>
        <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0; font-size: 14px;">Site web DataConforme.com</p>
      </div>
      <div style="background: #F8FAFB; padding: 32px; border-radius: 0 0 12px 12px; border: 1px solid #E5E9F0; border-top: none;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #E5E9F0; color: #5A6C7D; font-size: 13px; width: 40%;">Prénom / Nom</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #E5E9F0; font-weight: bold;">${prenom} ${nom}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #E5E9F0; color: #5A6C7D; font-size: 13px;">E-mail</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #E5E9F0;"><a href="mailto:${email}" style="color: #00A9C1;">${email}</a></td>
          </tr>
          ${tel ? `<tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #E5E9F0; color: #5A6C7D; font-size: 13px;">Téléphone</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #E5E9F0;">${pays} — ${tel}</td>
          </tr>` : ""}
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #E5E9F0; color: #5A6C7D; font-size: 13px;">Fonction</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #E5E9F0;">${fonction}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #E5E9F0; color: #5A6C7D; font-size: 13px;">Secteur</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #E5E9F0;">${secteur}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #E5E9F0; color: #5A6C7D; font-size: 13px;">Motif</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #E5E9F0;">${motif}</td>
          </tr>
        </table>
        <div style="margin-top: 24px; padding: 20px; background: white; border-radius: 8px; border: 1px solid #E5E9F0;">
          <p style="color: #5A6C7D; font-size: 13px; margin: 0 0 8px;">Message</p>
          <p style="white-space: pre-wrap; margin: 0; line-height: 1.6;">${message}</p>
        </div>
        <div style="margin-top: 24px; padding: 16px; background: #EAF9FB; border-radius: 8px; border-left: 4px solid #00A9C1;">
          <p style="margin: 0; color: #0A192F; font-size: 13px;">
            Pour répondre directement, appuyez sur Répondre ou écrivez à <a href="mailto:${email}" style="color: #00A9C1;">${email}</a>.
          </p>
        </div>
      </div>
    </div>
  `;

  // Accusé de réception envoyé à l'expéditeur
  const ackHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #0A192F;">
      <div style="background: linear-gradient(135deg, #0047BA 0%, #00A9C1 100%); padding: 32px; border-radius: 12px 12px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 22px;">Nous avons bien reçu votre message</h1>
        <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0; font-size: 14px;">Data Conforme — Protection des données & IA responsable</p>
      </div>
      <div style="background: #F8FAFB; padding: 32px; border-radius: 0 0 12px 12px; border: 1px solid #E5E9F0; border-top: none;">
        <p>Bonjour ${prenom},</p>
        <p>Merci pour votre message. Notre équipe a bien reçu votre demande concernant <strong>${motif}</strong> et vous contactera dans les plus brefs délais.</p>
        <p>En attendant, vous pouvez retrouver nos dernières actualités sur notre site.</p>
        <div style="margin: 24px 0;">
          <a href="https://www.dataconforme.com" style="display:inline-block; background: linear-gradient(135deg, #0047BA 0%, #00A9C1 100%); color: white; padding: 12px 28px; border-radius: 8px; text-decoration: none; font-weight: bold;">Visiter le site</a>
        </div>
        <p style="color: #5A6C7D; font-size: 13px;">L'équipe Data Conforme</p>
      </div>
    </div>
  `;

  // Envoi en parallèle des deux emails
  await Promise.all([
    transporter.sendMail({
      from: `"Data Conforme" <${process.env.CONTACT_FROM_EMAIL}>`,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `[Contact] ${motif} — ${prenom} ${nom}`,
      html: notificationHtml,
    }),
    transporter.sendMail({
      from: `"Data Conforme" <${process.env.CONTACT_FROM_EMAIL}>`,
      to: email,
      subject: "Nous avons bien reçu votre message — Data Conforme",
      html: ackHtml,
    }),
  ]);
}
