# Shri Balaji Printers - Modern React Website

A modern, responsive website for Shri Balaji Printers, a trusted printing service provider in Sivakasi, Tamil Nadu with 25+ years of experience.

## 🚀 Features

### Design & User Experience
- **Modern & Clean Design**: Professional printing business aesthetic
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations**: Subtle animations and hover effects for better UX
- **Professional Color Scheme**: Orange/amber theme representing trust and creativity

### Key Sections
- **Hero Section**: Strong introduction with 25+ years experience highlight
- **Services Section**: Comprehensive showcase of all printing services
- **About Section**: Company history, values, and trust indicators
- **Contact Section**: Multiple contact methods and inquiry form
- **Enquiry Form**: Detailed quote request form with project specifications

### Services Highlighted
- School Books & Guides
- Notebooks
- Diaries
- Calendars (customizable)
- Sweet Boxes
- Invitation Cards
- Business Cards
- Custom Design Services

### Technical Features
- **React 18** with modern hooks and functional components
- **Tailwind CSS** for styling with custom design system
- **React Router** for navigation
- **React Icons** for consistent iconography
- **Responsive Design** with mobile-first approach
- **Form Handling** with validation and submission
- **Smooth Scrolling** navigation

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone or download the project**
   ```bash
   # If you have the files locally, navigate to the project directory
   cd shri-balaji-printers
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   - The website will open at `http://localhost:3000`
   - You can view it on any device by accessing the same URL

### Build for Production

To create a production build:

```bash
npm run build
```

This creates an optimized build in the `build` folder that you can deploy to any web hosting service.

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.js       # Navigation bar with logo and menu
│   ├── Hero.js         # Hero section with main messaging
│   ├── Services.js     # Services showcase
│   ├── About.js        # About company section
│   ├── Contact.js      # Contact information and form
│   ├── EnquiryForm.js  # Detailed enquiry form page
│   └── Footer.js       # Footer with links and info
├── App.js              # Main app component with routing
├── index.js            # React entry point
└── index.css           # Global styles and Tailwind imports
```

## 🎨 Customization

### Colors
The website uses a custom color palette defined in `tailwind.config.js`:
- **Primary**: Orange/amber tones (#ed7519)
- **Secondary**: Gray tones for text and backgrounds
- **Accent**: Green for success states and WhatsApp

### Logo
The current logo is a simple "SB" monogram. You can replace it with:
- A custom SVG logo
- An image file (PNG/JPG)
- A more elaborate design

### Content
All content is easily editable in the component files:
- Company information in `Navbar.js` and `Footer.js`
- Services in `Services.js`
- Contact details in `Contact.js` and `Footer.js`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Configuration

### Contact Information
Update contact details in multiple files:
- `src/components/Navbar.js`
- `src/components/Contact.js`
- `src/components/Footer.js`
- `src/components/EnquiryForm.js`

### Services
Modify services in `src/components/Services.js`:
- Add/remove services
- Update descriptions
- Change icons

### Business Hours
Update business hours in `src/components/Contact.js` and `src/components/Footer.js`

## 📞 Contact Integration

### WhatsApp Integration
The website includes WhatsApp integration:
- Direct link: `https://wa.me/919361259552`
- WhatsApp button in contact section
- WhatsApp icon in footer

### Email Integration
- Contact form submissions (currently shows alert)
- Direct email links: `mailto:shribalajiprinters6@gmail.com`

### Phone Integration
- Direct call links: `tel:9361259552`
- Both primary and secondary numbers included

## 🚀 Deployment

### Netlify (Recommended)
1. Push code to GitHub
2. Connect repository to Netlify
3. Deploy automatically

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`

### Traditional Hosting
1. Run: `npm run build`
2. Upload `build` folder contents to your web server

## 🗄️ Supabase Database Setup

### 1. Create Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Note down your project URL and anon key

### 2. Set Up Database Tables
1. Go to your Supabase project dashboard
2. Navigate to SQL Editor
3. Run the SQL commands from `supabase_tables.sql`

### 3. Configure Environment Variables
Create a `.env` file in your project root:
```env
REACT_APP_SUPABASE_URL=your_supabase_project_url
REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Install Dependencies
```bash
npm install
```

### 5. Database Features
- **Contact Form Submissions**: Stores all contact form data
- **Enquiry Form Submissions**: Stores quote requests with project details
- **Status Tracking**: Track submission status (new, reviewing, quoted, etc.)
- **Dashboard View**: Combined view of all submissions
- **Statistics**: Get submission counts and analytics
- **Row Level Security**: Secure access to data
- **Automatic Timestamps**: Created and updated timestamps

## 📋 TODO & Enhancements

### Potential Improvements
- [ ] Add image gallery of past work
- [ ] Integrate with email service (SendGrid, Mailgun)
- [ ] Add blog section for printing tips
- [ ] Implement online quote calculator
- [ ] Add customer testimonials carousel
- [ ] Integrate Google Analytics
- [ ] Add SEO optimization
- [ ] Implement dark mode toggle

### Backend Integration
- [ ] Connect contact forms to backend API
- [ ] Add admin panel for content management
- [ ] Implement order tracking system
- [ ] Add customer portal

## 🤝 Support

For any questions or customization needs:
- **Email**: shribalajiprinters6@gmail.com
- **Phone**: 9361259552, 9789111525
- **Location**: Sivakasi, Tamil Nadu

## 📄 License

This project is created for Shri Balaji Printers. All rights reserved.

---

**Shri Balaji Printers** - Trusted Printing Services in Sivakasi, Tamil Nadu
*25+ Years of Excellence | Affordable Pricing | Quality Guaranteed* 