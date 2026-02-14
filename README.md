# Umang Kumar - Portfolio Website

A modern, responsive portfolio website showcasing skills, projects, academic achievements, and certifications. Built with **React**, **Vite**, and **Tailwind CSS**.

## Live Demo
[https://umangkumar0106.github.io/portfolio/](https://umangkumar0106.github.io/portfolio/)

## Features
- Responsive Design - Works on all devices
- Fast Performance - Optimized bundle splitting and lazy loading
- Custom Cursor - Interactive animated cursor
- Smooth Animations - Engaging scroll animations
- Contact Form - Integrated EmailJS
- Certifications Gallery - Modal view for certificates
- Dark Theme - Modern dark interface with gradients

## Quick Start

```
bash
# Clone and install
git clone https://github.com/umangkumar0106/portfolio.git
cd portfolio
npm install

# Create .env file
cp .env.example .env
# Edit .env with your EmailJS credentials

# Start development
npm run dev

# Build for production
npm run build
```

## Project Structure
```
src/
├── components/     # React components (Hero, About, Projects, etc.)
├── hooks/          # Custom hooks (useForm, useScroll, etc.)
├── constants/      # data.js - Content and configuration
├── App.jsx         # Main app with lazy loading
└── main.jsx        # Entry point
```

## Dependencies
- **React** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **EmailJS** - Contact form

## Customization
Edit `src/constants/data.js` to update:
- Skills, Projects, Certifications, Contact info

## Deployment
```
bash
npm run build
# Upload dist/ folder to GitHub Pages
```

## Author
**Umang Kumar**
- Email: umangkr0106@gmail.com
- GitHub: [@umangkumar0106](https://github.com/umangkumar0106)
- LinkedIn: [Umang Kumar](https://www.linkedin.com/in/umangkumar0106/)

---

Made with ❤️ by Umang Kumar
