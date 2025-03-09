# AlpineJS Summit 2026 Conference Website

This is the official website for AlpineJS Summit 2026, Switzerland's premier JavaScript conference happening in Zurich.

## 🚀 Overview

AlpineJS Summit is a one-day, single-track JavaScript conference featuring workshops, keynotes, technical sessions, and amazing networking opportunities. This repository contains the Next.js-based website for the conference.

## 🛠️ Technology Stack

- **Next.js** (Pages Router): For fast, SEO-friendly rendering
- **React**: UI components and interactivity
- **Tailwind CSS**: For styling and responsive design
- **Node.js**: Server environment

## 📂 Project Structure

The project follows a component-based architecture with these main directories:

- **`pages/`**: Next.js pages (following the Pages Router pattern)
- **`components/`**: Reusable React components
- **`public/`**: Static assets (images, favicon, etc.)
- **`styles/`**: Global styles
- **`utils/`**: Utility functions and constants

## 🧩 Key Components

The website is built with a modular approach, with several reusable components:

- `Layout`: Main wrapper component
- `Header`: Navigation component
- `Footer`: Site footer
- `SEO`: SEO metadata management
- Various UI components: `Button`, `Card`, `Newsletter`, etc.
- Page sections: `Hero`, `AboutSection`, `TracksSection`, etc.

## 🔧 Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-org/alpinejs-summit.git
   cd alpinejs-summit
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 Features

- Responsive design for all devices
- Waitlist signup form connected to mailing list
- Conference schedule and speaker information
- Venue details and logistics
- SEO optimized content
- Google Analytics integration

## 🌐 Deployment

The site is ready to be deployed on Vercel, Netlify, or any other platform that supports Next.js.

```bash
npm run build
# or
yarn build
```

## 📊 Analytics

The website uses Google Analytics for tracking user interactions. Update the tracking ID in `utils/constants.js` to your own.

## 📝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

For any questions about the conference, please contact info@alpinejs-summit.ch.