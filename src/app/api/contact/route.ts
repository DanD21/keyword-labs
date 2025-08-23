import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 'dummy-key-for-build');

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    
    // Validate required fields
    if (!formData.name || !formData.email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Prepare email content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #333; border-bottom: 2px solid #00f0ff; padding-bottom: 10px;">
          🚀 New SEO Inquiry from Website
        </h1>
        
        <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h2 style="color: #555; margin-top: 0;">Contact Information</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
          ${formData.role ? `<p><strong>Role:</strong> ${formData.role}</p>` : ''}
        </div>

        ${formData.companyName || formData.companyWebsite ? `
        <div style="background: #f0f8ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h2 style="color: #555; margin-top: 0;">Company Details</h2>
          ${formData.companyName ? `<p><strong>Company:</strong> ${formData.companyName}</p>` : ''}
          ${formData.companyWebsite ? `<p><strong>Website:</strong> <a href="${formData.companyWebsite}" target="_blank">${formData.companyWebsite}</a></p>` : ''}
          ${formData.companySize ? `<p><strong>Company Size:</strong> ${formData.companySize}</p>` : ''}
          ${formData.revenueRange ? `<p><strong>Revenue Range:</strong> ${formData.revenueRange}</p>` : ''}
        </div>
        ` : ''}

        ${formData.serviceInterest ? `
        <div style="background: #f0fff0; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h2 style="color: #555; margin-top: 0;">Service Interest</h2>
          <p><strong>Interested in:</strong> ${formData.serviceInterest}</p>
        </div>
        ` : ''}

        ${formData.message ? `
        <div style="background: #fff8f0; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h2 style="color: #555; margin-top: 0;">Message</h2>
          <p style="white-space: pre-wrap;">${formData.message}</p>
        </div>
        ` : ''}

        <div style="margin-top: 30px; padding: 15px; background: #e8f4fd; border-radius: 8px;">
          <p style="margin: 0; color: #666; font-size: 14px;">
            <strong>📧 Reply directly to this email to respond to the inquiry.</strong><br>
            Submitted at: ${new Date().toLocaleString()}
          </p>
        </div>
      </div>
    `;

    // Send email using Resend
    const emailResponse = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'contact@yourdomain.com',
      to: process.env.TO_EMAIL || 'your-email@gmail.com',
      replyTo: formData.email,
      subject: `🚀 New SEO Inquiry from ${formData.name} ${formData.companyName ? `(${formData.companyName})` : ''}`,
      html: emailHtml,
    });

    console.log('Email sent successfully:', emailResponse);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you! Your inquiry has been submitted successfully. We\'ll get back to you soon.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    
    return NextResponse.json(
      { 
        error: 'There was an error sending your message. Please try again or contact us directly.',
        details: process.env.NODE_ENV === 'development' ? error : undefined
      },
      { status: 500 }
    );
  }
}

// Handle non-POST requests
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed. Use POST to submit contact form.' },
    { status: 405 }
  );
}
