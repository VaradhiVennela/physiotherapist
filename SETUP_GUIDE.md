# PhysioTherapy Pro - Professional Physiotherapist Portfolio Website

A modern, responsive, and professional portfolio website for physiotherapy services with WhatsApp integration.

## 🌟 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Professional Layout**: Clean and modern interface designed for healthcare services
- **Navigation Menu**: Easy navigation with Home, Services, and Contact sections
- **Services Portfolio**: Showcase 6 different physiotherapy services with icons
- **About Section**: Display your qualifications and benefits
- **Contact Section**: Multiple contact options including WhatsApp integration
- **WhatsApp Integration**: 
  - Floating WhatsApp button for quick messaging
  - WhatsApp icon in navigation bar
  - Contact form that sends messages via WhatsApp
- **Smooth Animations**: Elegant scroll animations and hover effects
- **Mobile Friendly**: Hamburger menu for mobile devices
- **Social Media Links**: Footer with social media connections

## 📁 File Structure

```
physiotherapist/
├── index.html       # Main HTML file
├── styles.css       # Professional styling and responsive design
├── script.js        # JavaScript for interactivity and WhatsApp integration
└── README.md        # This file
```

## 🚀 Getting Started

1. **Download/Extract** the files to your desired location
2. **Open** `index.html` in your web browser
3. **Customize** the content (see below)

## 🔧 Customization Guide

### Update WhatsApp Number
Edit the `script.js` file and replace the phone number on line 2:
```javascript
const WHATSAPP_NUMBER = '+15551234567'; // Replace with your actual WhatsApp number
```
Format: Include country code (e.g., +1 for USA, +44 for UK)

### Update Business Information
Edit `index.html` and customize:

**Location (Around line 139)**
```html
<p>123 Health Street<br>Medical Center Plaza<br>Your City, State 12345</p>
```

**Phone Number (Around line 149)**
```html
<p>+1 (555) 123-4567<br>Mon - Fri: 8am - 6pm<br>Sat: 9am - 2pm</p>
```

### Update Social Media Links
In `index.html`, scroll to the footer section (around line 252) and update the links:
```html
<a href="https://www.facebook.com/yourpage"><i class="fab fa-facebook"></i></a>
<a href="https://www.twitter.com/yourprofile"><i class="fab fa-twitter"></i></a>
<a href="https://www.instagram.com/yourprofile"><i class="fab fa-instagram"></i></a>
```

### Add Your Logo/Images
Replace the placeholder icons with actual images:
- Update hero section image (line 72)
- Update about section image (line 122)
- Change the placeholder content with actual images

### Modify Colors
Edit `styles.css` and change the color variables (lines 8-15):
```css
:root {
    --primary-color: #2E8B57;      /* Green */
    --secondary-color: #20B2AA;    /* Teal */
    --accent-color: #25D366;       /* WhatsApp Green */
    --light-bg: #F0F8F5;
    --dark-text: #1a1a1a;
    --gray-text: #666;
    --white: #ffffff;
}
```

### Edit Services
Find the services section in `index.html` (around line 68) and update:
- Service titles
- Service descriptions
- Service icons (using Font Awesome icon classes)

## 🎨 Color Scheme

The website uses a professional healthcare color scheme:
- **Primary Green (#2E8B57)**: Trust and healthcare
- **Teal (#20B2AA)**: Professional and calm
- **WhatsApp Green (#25D366)**: For WhatsApp elements
- **Light Background**: Easy on the eyes

## 📱 WhatsApp Integration

### How It Works
- Users click the WhatsApp button or use the contact form
- A new WhatsApp chat opens with a pre-filled message
- You receive the message directly on WhatsApp

### Mobile Optimization
- WhatsApp opens in the native app (if installed)
- On desktop, opens WhatsApp Web
- Seamless experience for customers

## 🎯 SEO Tips

To improve search visibility, update in `index.html`:
1. **Title** (line 6): Change to your business name
2. **Meta Description**: Add a description tag
3. **Content**: Include relevant keywords

Example:
```html
<meta name="description" content="Professional physiotherapy services in [Your City]. Specializing in sports injuries, rehabilitation, and pain management.">
```

## 💡 Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📧 Contact Form Feature

The contact form:
1. Collects name, email, phone, and message
2. Sends everything via WhatsApp
3. Shows success notification
4. Auto-resets after submission

## 🔐 Privacy

All form data is sent securely through WhatsApp. No data is stored on servers.

## 🛠️ Troubleshooting

**WhatsApp Links Not Working**
- Check the phone number format includes country code
- Ensure the number has no spaces or special characters (except + at start)
- Test on mobile device

**Mobile Menu Not Working**
- Clear browser cache
- Check JavaScript file is loaded
- Verify script.js is in the same folder

**Images Not Showing**
- Replace placeholder icons with actual image paths
- Use relative paths: `<img src="images/photo.jpg">`
- Ensure image files are in the correct folder

## 📝 License

Free to use and modify for your business.

## 🚀 Deployment

To publish online:
1. Get web hosting (Netlify, Vercel, GoDaddy, etc.)
2. Upload all three files
3. Set `index.html` as the default/home page
4. Your site is live!

---

**Enjoy your new professional physiotherapy portfolio website! 💚**
