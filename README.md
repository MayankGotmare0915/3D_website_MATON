# MATON - Premium Matcha E-Commerce Website

A modern, high-performance e-commerce website for premium matcha products built with React, TypeScript, and cutting-edge web technologies. The site features smooth animations, interactive product showcases, and an elegant design inspired by Japanese aesthetics.

**🌐 Live Demo:** https://3-d-website-maton.vercel.app

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Configuration](#configuration)
- [Asset Management](#asset-management)
- [Development Workflow](#development-workflow)
- [Build & Deployment](#build--deployment)
- [Component Architecture](#component-architecture)
- [Styling](#styling)
- [Contributing](#contributing)

---

## Overview

**MATON** is a premium matcha e-commerce platform showcasing high-quality Japanese matcha products and accessories. The website emphasizes:

- **Visual Excellence**: Cinematic hero sections with scroll-triggered animations and image sequences
- **Performance**: Optimized build pipeline with Vite for instant development feedback
- **Responsive Design**: Mobile-first approach that works seamlessly across all devices
- **User Experience**: Smooth transitions, intuitive navigation, and engaging product displays
- **Type Safety**: Full TypeScript coverage for robust development

The site targets matcha enthusiasts and premium tea consumers with a modern, sophisticated design language.

---

## Tech Stack

### Core Framework
- **React** ^19.2.0 - UI library with latest features
- **TypeScript** ~5.9.3 - Type-safe development
- **Vite** ^7.3.1 - Next-generation build tool with HMR

### Styling & UI
- **Tailwind CSS** ^3.4.17 - Utility-first CSS framework
- **PostCSS** ^8.4.49 - CSS transformations
- **Autoprefixer** ^10.4.20 - Browser compatibility

### Animation & Interaction
- **Framer Motion** ^11.15.0 - Production-ready motion library
- **Lucide React** ^0.564.0 - Beautiful icon library

### Development Tools
- **ESLint** ^9.39.1 - Code quality and consistency
- **TypeScript ESLint** ^8.48.0 - TypeScript-specific linting
- **React Hooks ESLint Plugin** ^7.0.1 - React best practices
- **React Refresh** ^0.4.24 - Fast refresh during development

### Utilities
- **clsx** ^2.1.1 - Conditional className helper
- **tailwind-merge** ^3.4.1 - Merge Tailwind class conflicts

---

## Features

### 🎨 Visual Components
- **Header** - Sticky navigation with scroll-aware styling and shopping bag cart indicator
- **Hero Section** - Full-screen cinematic experience with scroll-driven image sequences
- **Starter Kit Section** - Product showcase with descriptive content
- **Benefits Section** - Feature highlights with icons and animations
- **Product Collection** - Multi-layout product display with featured items and accessories
- **Essentials Section** - Product essentials information
- **Footer** - Brand information and links

### ⚡ Interactive Features
- Scroll-triggered animations powered by Framer Motion
- Smooth parallax effects and reveal animations
- Image sequence animation on hero section
- Hover states and interactive product cards
- Dynamic header background with glassmorphism effect
- Responsive navigation with mobile support

### 🎯 Product Showcase
- **Featured Products**: Ceremonial Grade, Culinary Grade, Master Blend
- **Accessories**: Bamboo Whisk, Chawan Bowl, Tea Scoop
- **Dynamic Product Display**: Grid and stack layouts for different screen sizes
- **Price and Details**: Complete product information with add-to-cart functionality

### 🌈 Design System
- Custom color palette (Dark theme, Cream background, Lime accent)
- Typography system with Playfair Display (serif) and Inter (sans-serif)
- Responsive breakpoints for mobile, tablet, and desktop
- Smooth transitions and animations throughout

---

## Project Structure

```
3D_website_MATON/
├── public/
│   ├── assets/                    # Product and section images
│   │   ├── starter-kit-flatlay.png
│   │   ├── benefit-antioxidant.png
│   │   ├── benefit-relax.png
│   │   ├── product-*.png
│   │   └── accessory-*.png
│   ├── matcha_img_seq/            # Hero section image sequence
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx         # Navigation and header
│   │   │   └── Footer.tsx         # Footer section
│   │   └── sections/
│   │       ├── Hero.tsx           # Hero with image sequence
│   │       ├── MatchaSequence.tsx # Scroll-driven image sequence
│   │       ├── StarterKit.tsx     # Starter kit section
│   │       ├── Benefits.tsx       # Benefits showcase
│   │       ├── Collection.tsx     # Product collection
│   │       └── Essentials.tsx     # Essentials section
│   ├── App.tsx                    # Main app component
│   ├── main.tsx                   # React DOM entry point
│   ├── index.css                  # Global styles with Tailwind
│   └── App.css                    # Component-specific styles
├── index.html                     # HTML entry point
├── package.json                   # Project dependencies
├── tsconfig.json                  # TypeScript configuration
├── vite.config.ts                 # Vite configuration
├── tailwind.config.js             # Tailwind CSS customization
├── postcss.config.js              # PostCSS configuration
├── eslint.config.js               # ESLint rules
└── README.md                      # This file
```

---

## Installation

### Prerequisites
- **Node.js** 16.x or higher
- **npm** or **yarn** package manager

### Clone & Setup

```bash
# Clone the repository
git clone https://github.com/MayankGotmare0915/3D_website_MATON.git

# Navigate to project directory
cd 3D_website_MATON

# Install dependencies
npm install
```

---

## Getting Started

### Development Server

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

Create an optimized production build:

```bash
npm run build
```

The build output will be generated in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

---

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production with TypeScript compilation |
| `npm run lint` | Run ESLint to check code quality |
| `npm run preview` | Preview production build locally |

---

## Configuration

### Tailwind CSS Customization

The `tailwind.config.js` extends the default theme with MATON-specific colors and typography:

```javascript
colors: {
  maton: {
    dark: "#0B1A12",      // Dark green (primary)
    cream: "#F4F1E8",     // Cream (background)
    lime: "#B9FF3D",      // Bright lime (accent)
    text: "#1A1A1A",      // Text color
    muted: "#888888",     // Muted gray
  },
}
```

### Font Stack
- **Serif**: Playfair Display (headings)
- **Sans**: Inter (body text)
- Fonts loaded from Google Fonts

### Custom Animation
- `fade-in-up`: Smooth fade and slide up animation (0.8s)

### PostCSS Pipeline
- Tailwind CSS processing
- Autoprefixer for browser compatibility

---

## Asset Management

### Image Assets

Place your product and section images in `public/assets/` folder:

**Starter Kit:**
- `public/assets/starter-kit-flatlay.png`

**Benefits:**
- `public/assets/benefit-antioxidant.png`
- `public/assets/benefit-relax.png`

**Products:**
- `public/assets/product-ceremonial-can.png`
- `public/assets/product-culinary.png`
- `public/assets/product-master-blend.png`
- `public/assets/product-latte-mix.png`
- `public/assets/product-cake-powder.png`

**Accessories:**
- `public/assets/accessory-whisk.png`
- `public/assets/accessory-bowl.png`
- `public/assets/accessory-scoop.png`

**Footer:**
- `public/assets/footer-decoration.png`

### Image Sequence

Hero section animation uses an image sequence stored in `public/matcha_img_seq/`. This creates smooth scroll-driven cinematic effects.

> **Note**: Image generation service is currently experiencing high load. Please provide high-quality JPEG or PNG images at the paths above.

---

## Development Workflow

### Code Quality

```bash
# Lint all files
npm run lint

# Fix linting issues automatically
npm run lint -- --fix
```

### ESLint Configuration

The project includes comprehensive ESLint rules for:
- JavaScript best practices
- TypeScript type safety
- React hooks usage
- React refresh compatibility
- React accessibility and conventions

### Type Safety

TypeScript is configured with strict type checking across the entire codebase:

```bash
# Check TypeScript compilation
npm run build  # Includes tsc -b check
```

---

## Build & Deployment

### Deployment Platforms

#### Vercel (Recommended)
```bash
# Connect your GitHub repository to Vercel
# Automatic deployments on push to main
```

#### Manual Deployment
```bash
# Build the project
npm run build

# The `dist/` directory is ready for deployment
# Deploy to any static hosting (Netlify, GitHub Pages, AWS S3, etc.)
```

### Environment Variables

Currently, no environment variables are required. For future integrations, create a `.env` file in the root directory.

---

## Component Architecture

### Layout Components

#### Header
- Sticky positioning with scroll-aware styles
- Responsive navigation menu
- Shopping bag cart indicator with badge
- Smooth transitions with Framer Motion

#### Footer
- Brand information
- Links and social media
- Copyright information

### Section Components

#### Hero
- Scroll-triggered animations
- Full-screen immersive experience
- Image sequence background
- CTA button with hover effects
- Japanese text for cultural authenticity

#### StarterKit
- Product flatlay showcase
- Benefits highlights
- Call-to-action sections

#### Benefits
- Feature cards with icons
- Multiple benefit highlights
- Responsive grid layout

#### Collection
- Product grid layout
- Featured product showcase
- Accessories display
- "Explore All Products" navigation

#### Essentials
- Core product information
- Usage instructions
- Value propositions

#### MatchaSequence
- Scroll-driven image animation
- Performance-optimized rendering
- Smooth progress tracking

---

## Styling

### Tailwind CSS

The project uses Tailwind's utility-first approach for rapid development:

- **Base Styles**: Custom body and heading styles
- **Components**: Reusable button and card styles
- **Utilities**: Responsive spacing, colors, and effects

### CSS Layers

Global styles organized with Tailwind's `@layer` directive:
- **Base**: Core HTML element styling
- **Components**: Reusable component classes
- **Utilities**: Additional utility classes

### Responsive Design

Mobile-first breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

---

## Contributing

### Getting Started with Development

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Standards

- Write TypeScript for type safety
- Follow ESLint configuration
- Use Tailwind CSS utilities for styling
- Keep components small and focused
- Document complex logic with comments

### Commit Convention

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (no logic change)
- `refactor:` Code refactoring
- `perf:` Performance improvements
- `test:` Test additions/modifications

---

## Performance Optimization

- **Code Splitting**: Vite handles automatic code splitting
- **Image Optimization**: Use compressed images for fast loading
- **CSS Purging**: Tailwind removes unused styles in production
- **Tree Shaking**: Automatic removal of unused JavaScript
- **Caching**: Vite generates hashed filenames for optimal caching

---

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Troubleshooting

### Development Issues

**Port Already in Use**
```bash
npm run dev -- --port 3000  # Use custom port
```

**Module Not Found**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**TypeScript Errors**
```bash
npm run build  # Check for type errors
```

### Build Issues

**Vite Build Fails**
- Check Node.js version (should be 16+)
- Clear `.vite` cache: `rm -rf .vite`
- Rebuild: `npm run build`

---

## License

This project is open source. Check the repository for license details.

---

## Support & Questions

For issues, questions, or suggestions:
- Open an issue on GitHub
- Check existing issues for solutions
- Review component documentation in source files

---

## Roadmap

- [ ] Product filtering and search
- [ ] Shopping cart functionality
- [ ] User authentication
- [ ] Product reviews system
- [ ] Checkout integration
- [ ] Admin dashboard
- [ ] Inventory management
- [ ] Email notifications
- [ ] Mobile app version

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**

**Repository**: https://github.com/MayankGotmare0915/3D_website_MATON

**Live Site**: https://3-d-website-maton.vercel.app
