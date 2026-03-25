# Mailto Connect Method – Contact Form

## How It Works

The contact form in `src/app/components/Contact.tsx` uses the **`mailto:` protocol** to send emails. When a user fills out the form and clicks **"Send Message"**, it opens their default email client (e.g., Outlook, Gmail app, Thunderbird) with the form data pre-filled.

---

## Code Implementation

```tsx
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  // Encode subject line with sender's name and company
  const subject = encodeURIComponent(
    `New Inquiry from ${formData.name}${formData.company ? ` - ${formData.company}` : ''}`
  );

  // Encode body with all form fields
  const body = encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || 'N/A'}\n\nMessage:\n${formData.message}`
  );

  // Open the user's email client with pre-filled data
  window.location.href = `mailto:www.pirinthaban@gmail.com?subject=${subject}&body=${body}`;

  // Reset the form
  setFormData({ name: '', email: '', company: '', message: '' });
};
```

---

## Mailto URL Format

```
mailto:<recipient>?subject=<subject>&body=<body>
```

| Parameter   | Description                              |
|-------------|------------------------------------------|
| `mailto:`   | The recipient email address              |
| `subject=`  | Pre-filled subject line                  |
| `body=`     | Pre-filled email body text               |

All values are encoded with `encodeURIComponent()` to handle special characters and newlines.

---

## Example Generated URL

When a user submits:
- **Name:** John Doe
- **Email:** john@example.com
- **Company:** Acme Inc
- **Message:** I need a website redesign.

The generated mailto link will be:

```
mailto:www.pirinthaban@gmail.com?subject=New%20Inquiry%20from%20John%20Doe%20-%20Acme%20Inc&body=Name%3A%20John%20Doe%0AEmail%3A%20john%40example.com%0ACompany%3A%20Acme%20Inc%0A%0AMessage%3A%0AI%20need%20a%20website%20redesign.
```

This opens the user's email client and looks like:

```
To:      www.pirinthaban@gmail.com
Subject: New Inquiry from John Doe - Acme Inc
Body:
  Name: John Doe
  Email: john@example.com
  Company: Acme Inc

  Message:
  I need a website redesign.
```

---

## Flow Diagram

```
User fills form → Clicks "Send Message"
       ↓
  e.preventDefault() stops page reload
       ↓
  Form data encoded into mailto URL
       ↓
  window.location.href = mailto:...
       ↓
  User's default email client opens
       ↓
  Email is pre-filled with form data
       ↓
  User clicks Send in their email client
       ↓
  Email arrives at www.pirinthaban@gmail.com
```

---

## Key Points

- **No backend server needed** — works entirely client-side.
- **Relies on the user's email client** — they must have one configured (Outlook, Gmail, etc.).
- **User must manually click Send** in their email client to actually send the email.
- **`encodeURIComponent()`** ensures special characters (`@`, spaces, newlines) are properly encoded in the URL.

---

## Limitations

| Limitation | Detail |
|---|---|
| Requires email client | Won't work if no email app is configured on the device |
| User must click Send | The email isn't sent automatically — only pre-filled |
| Body length limit | Some email clients have URL length limits (~2000 chars) |
| No file attachments | `mailto:` doesn't support attachments |

---

## Alternative: Backend Email (for future)

For automatic email sending without user interaction, you would need a backend service (e.g., Node.js with Nodemailer, or a service like EmailJS, SendGrid, or Resend). The current `mailto:` method requires no server and works for basic contact forms.
