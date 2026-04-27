import nodemailer from 'nodemailer';
import { ContactFormData } from './contact-form';

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
}

export const sendEmail = async (options: EmailOptions): Promise<boolean> => {
  try {
    await transporter.sendMail({
      from: `"Klearvoy Website" <${process.env.EMAIL_USER}>`,
      to: options.to,
      subject: options.subject,
      html: options.html,
    });
    return true;
  } catch (error) {
    console.error('Email sending error:', error);
    return false;
  }
};

export const sendContactNotification = async (data: ContactFormData): Promise<boolean> => {
  const adminEmail = process.env.ADMIN_EMAIL || 'info@klearvoy.com';

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background-color: #171717; padding: 20px; text-align: center;">
        <h1 style="color: #ffffff; margin: 0;">KLEARVOY</h1>
        <p style="color: #C4A484; margin: 5px 0 0 0;">New Inquiry Received</p>
      </div>

      <div style="padding: 30px; background-color: #f9f9f9;">
        <h2 style="color: #171717; border-bottom: 2px solid #C4A484; padding-bottom: 10px;">
          Customer Information
        </h2>

        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; width: 120px;">
              Name:
            </td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">
              ${data.name}
            </td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">
              Email:
            </td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">
              <a href="mailto:${data.email}" style="color: #C4A484;">
                ${data.email}
              </a>
            </td>
          </tr>
          ${data.phone ? `
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">
              Phone:
            </td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">
              ${data.phone}
            </td>
          </tr>
          ` : ''}
          ${data.company ? `
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">
              Company:
            </td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">
              ${data.company}
            </td>
          </tr>
          ` : ''}
          ${data.subject ? `
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">
              Subject:
            </td>
            <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">
              ${data.subject}
            </td>
          </tr>
          ` : ''}
        </table>

        <h2 style="color: #171717; border-bottom: 2px solid #C4A484; padding-bottom: 10px; margin-top: 30px;">
          Message
        </h2>
        <div style="background-color: #ffffff; padding: 20px; border-radius: 5px; margin-top: 20px; line-height: 1.6;">
          ${data.message.replace(/\n/g, '<br>')}
        </div>

        <div style="margin-top: 30px; padding: 20px; background-color: #ffffff; border-left: 4px solid #C4A484;">
          <p style="margin: 0; color: #6b7280; font-size: 14px;">
            <strong>Received at:</strong> ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Shanghai' })}
          </p>
          <p style="margin: 10px 0 0 0; color: #6b7280; font-size: 14px;">
            <strong>IP Address:</strong> Automated collection not implemented
          </p>
        </div>
      </div>

      <div style="background-color: #171717; padding: 20px; text-align: center;">
        <p style="color: #9ca3af; margin: 0; font-size: 12px;">
          © 2026 Klearvoy. All rights reserved.
        </p>
        <p style="color: #9ca3af; margin: 10px 0 0 0; font-size: 12px;">
          Block B, No.168, Yihe Industrial Zone, Lishui Town, Nanhai District, Foshan
        </p>
      </div>
    </div>
  `;

  return sendEmail({
    to: adminEmail,
    subject: `New Inquiry from ${data.name}${data.subject ? ` - ${data.subject}` : ''}`,
    html: htmlContent,
  });
};

export const sendAutoReply = async (data: ContactFormData): Promise<boolean> => {
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background-color: #171717; padding: 20px; text-align: center;">
        <h1 style="color: #ffffff; margin: 0;">KLEARVOY</h1>
        <p style="color: #C4A484; margin: 5px 0 0 0;">Thank You for Your Inquiry</p>
      </div>

      <div style="padding: 30px; background-color: #f9f9f9;">
        <p style="color: #171717; font-size: 16px;">
          Dear ${data.name},
        </p>

        <p style="color: #6b7280; line-height: 1.6;">
          Thank you for contacting Klearvoy. We have received your inquiry and will get back to you within <strong>24 hours</strong>.
        </p>

        <div style="background-color: #ffffff; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <h3 style="color: #171717; margin-top: 0;">Your Submitted Information:</h3>
          <p style="color: #6b7280; margin: 5px 0;">
            <strong>Email:</strong> ${data.email}
          </p>
          ${data.subject ? `<p style="color: #6b7280; margin: 5px 0;"><strong>Subject:</strong> ${data.subject}</p>` : ''}
          <p style="color: #6b7280; margin: 5px 0 0 0;">
            <strong>Message:</strong><br>
            ${data.message.replace(/\n/g, '<br>')}
          </p>
        </div>

        <p style="color: #6b7280; line-height: 1.6;">
          If you have any urgent matters, please feel free to contact us directly via:
        </p>

        <p style="color: #6b7280;">
          <strong>Phone / WhatsApp:</strong> +86 156 9241 5580<br>
          <strong>Email:</strong> info@klearvoy.com
        </p>

        <p style="color: #6b7280; line-height: 1.6;">
          We look forward to serving you.
        </p>

        <p style="color: #171717; font-weight: bold;">
          Best regards,<br>
          Klearvoy Team
        </p>
      </div>

      <div style="background-color: #171717; padding: 20px; text-align: center;">
        <p style="color: #9ca3af; margin: 0; font-size: 12px;">
          © 2026 Klearvoy. All rights reserved.
        </p>
        <p style="color: #9ca3af; margin: 10px 0 0 0; font-size: 12px;">
          Block B, No.168, Yihe Industrial Zone, Lishui Town, Nanhai District, Foshan
        </p>
      </div>
    </div>
  `;

  return sendEmail({
    to: data.email,
    subject: 'Thank you for contacting Klearvoy',
    html: htmlContent,
  });
};
