# Email Setup with Resend

This guide will help you set up email notifications for your contact form using Resend, a modern email API service.

## Why Resend?

- ✅ **Developer-friendly** - Built specifically for developers
- ✅ **Free tier** - 3,000 emails/month free
- ✅ **Great deliverability** - High inbox placement rates
- ✅ **Simple setup** - No complex SMTP configuration
- ✅ **Modern API** - Clean, well-documented REST API

## Step 1: Create a Resend Account

1. Go to [resend.com](https://resend.com)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add and Verify Your Domain

1. In the Resend dashboard, go to **"Domains"**
2. Click **"Add Domain"**
3. Enter your domain (e.g., `keywordlabs.com`)
4. Add the DNS records provided by Resend to your domain's DNS settings
5. Wait for verification (usually takes a few minutes)

### Alternative: Use Resend's Sandbox Domain (For Testing)

If you don't want to verify a domain immediately, you can use Resend's sandbox domain:
- **From email**: `onboarding@resend.dev`
- **Limitation**: Only sends to the email address associated with your Resend account

## Step 3: Get Your API Key

1. In the Resend dashboard, go to **"API Keys"**
2. Click **"Create API Key"**
3. Give it a name (e.g., "Contact Form")
4. Copy the API key (starts with `re_`)

## Step 4: Configure Environment Variables

1. Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

2. Edit `.env.local` with your actual values:
   ```env
   # Your Resend API key
   RESEND_API_KEY=re_your_actual_api_key_here
   
   # Email addresses
   FROM_EMAIL=contact@yourdomain.com  # Must be from your verified domain
   TO_EMAIL=your-email@gmail.com      # Where you want to receive inquiries
   ```

### Example Configuration:
```env
RESEND_API_KEY=re_123abc456def789ghi012jkl345mno678pqr
FROM_EMAIL=contact@keywordlabs.com
TO_EMAIL=dan@yourdomain.com
```

## Step 5: Test the Integration

1. Restart your development server:
   ```bash
   npm run dev
   ```

2. Open your website and test the contact form
3. Check your email inbox for the notification
4. Check your Resend dashboard for delivery status

## Step 6: Production Deployment

When deploying to Vercel (or another platform):

1. Add the environment variables to your deployment platform:
   - `RESEND_API_KEY`
   - `FROM_EMAIL` 
   - `TO_EMAIL`

2. In Vercel:
   - Go to your project dashboard
   - Click **"Settings"** → **"Environment Variables"**
   - Add each variable

## Email Template Features

The contact form emails include:

✅ **Professional formatting** with your brand colors  
✅ **All form data** organized in sections  
✅ **Reply-to functionality** - reply directly to respond  
✅ **Clickable links** for websites and email addresses  
✅ **Timestamp** for when the inquiry was submitted  
✅ **Company context** - size, revenue, service interest  

## Troubleshooting

### Common Issues:

1. **"Domain not verified"**
   - Check DNS records are properly added
   - Wait up to 24 hours for propagation

2. **"API key invalid"**
   - Ensure you copied the full API key
   - Check for extra spaces or characters

3. **"Emails not arriving"**
   - Check spam folder
   - Verify TO_EMAIL address is correct
   - Check Resend dashboard for delivery status

4. **"FROM_EMAIL domain error"**
   - FROM_EMAIL must be from a verified domain
   - Use `onboarding@resend.dev` for testing

### Development Testing:

For local testing, you can temporarily use:
```env
FROM_EMAIL=onboarding@resend.dev
TO_EMAIL=your-verified-resend-email@gmail.com
```

## Scaling Up

As your business grows:

- **Free tier**: 3,000 emails/month
- **Pro tier**: $20/month for 50,000 emails
- **Enterprise**: Custom pricing for higher volumes

## Security Notes

- ✅ **API keys are server-side only** - not exposed to browsers
- ✅ **Form validation** prevents spam and malformed data
- ✅ **Rate limiting** built into Resend
- ✅ **Reply-to email** uses the customer's actual email

Your contact form is now powered by a professional email service! 🚀
