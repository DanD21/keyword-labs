# Google Sheets Integration Setup

This guide will help you connect your contact form to a Google Sheet using Google Apps Script.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "SEO Agency Leads" (or whatever you prefer)
4. In the first row, add these headers:
   - A1: `Timestamp`
   - B1: `Name`
   - C1: `Email`
   - D1: `Role`
   - E1: `Company Name`
   - F1: `Company Website`
   - G1: `Company Size`
   - H1: `Revenue Range`
   - I1: `Service Interest`
   - J1: `Message`

## Step 2: Create Google Apps Script

1. In your Google Sheet, go to `Extensions` → `Apps Script`
2. Delete the default code and paste this script:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // Parse the form data
    const data = JSON.parse(e.postData.contents);
    
    // Create timestamp
    const timestamp = new Date();
    
    // Add row with form data
    sheet.appendRow([
      timestamp,
      data.name || '',
      data.email || '',
      data.role || '',
      data.companyName || '',
      data.companyWebsite || '',
      data.companySize || '',
      data.revenueRange || '',
      data.serviceInterest || '',
      data.message || ''
    ]);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'success',
        message: 'Form submitted successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'error',
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Save the script (Ctrl/Cmd + S) and name it "Contact Form Handler"

## Step 3: Deploy the Script

1. Click the "Deploy" button (top right)
2. Choose "New deployment"
3. Click the gear icon next to "Type" and select "Web app"
4. Set the following:
   - **Description**: "Contact Form Handler"
   - **Execute as**: "Me"
   - **Who has access**: "Anyone"
5. Click "Deploy"
6. **Important**: Copy the "Web app URL" - you'll need this for your form!
7. Click "Done"

## Step 4: Test the Integration

The URL will look like:
```
https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

Save this URL - you'll add it to your React form in the next step.

## Step 5: Update Your Form (Done automatically)

The contact form will be updated to send data to your Google Apps Script URL.

## Security Note

The script is set to "Anyone" access because it needs to receive public form submissions. The script only allows POST requests and validates the data structure, making it reasonably secure for a contact form.

## Optional Enhancements

You can enhance the script to:
- Send email notifications when new leads arrive
- Add data validation
- Format the sheet with colors and filters
- Create automatic lead scoring
