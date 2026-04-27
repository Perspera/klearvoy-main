import { NextRequest, NextResponse } from 'next/server';
import { ContactFormData, validateForm } from '@/lib/contact-form';
import { sendContactNotification, sendAutoReply } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    const errors = validateForm(body);
    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { success: false, errors },
        { status: 400 }
      );
    }

    console.log('Contact form submission:', {
      name: body.name,
      email: body.email,
      phone: body.phone || 'Not provided',
      company: body.company || 'Not provided',
      subject: body.subject || 'Not provided',
      message: body.message,
      timestamp: new Date().toISOString(),
    });

    if (!process.env.EMAIL_HOST || !process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.log('Email configuration not found, skipping email send');
      return NextResponse.json(
        {
          success: true,
          message: 'Thank you for your message. We will get back to you within 24 hours.'
        },
        { status: 200 }
      );
    }

    const [adminNotificationSent, autoReplySent] = await Promise.all([
      sendContactNotification(body),
      sendAutoReply(body),
    ]);

    if (!adminNotificationSent) {
      console.warn('Failed to send admin notification email');
    }

    if (!autoReplySent) {
      console.warn('Failed to send auto-reply email to customer');
    }

    console.log('Email sending results:', {
      adminNotification: adminNotificationSent ? 'sent' : 'failed',
      autoReply: autoReplySent ? 'sent' : 'failed',
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your message. We will get back to you within 24 hours.'
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'An error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
