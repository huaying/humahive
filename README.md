# HumAhive Official Website

> Empowering Lives, Building Futures

**HumAhive** is a non-governmental organization dedicated to empowering vulnerable communities in Kakuma refugee camp through education, livelihood training, and social support. This repository contains the source code for our official website at [humahive.org](https://humahive.org).

## 🌟 About HumAhive

HumAhive works directly with refugees and host communities in Kakuma Refugee Camp, Turkana County, Kenya, providing:

- **Education Programs**: English classes for children ages 3-5 and 8-11
- **Livelihood Training**: Business skills development and entrepreneurship programs
- **Women's Empowerment**: Training workshops and support programs
- **Community Health**: Vision support in partnership with Dot Glasses
- **Social Advocacy**: Early marriage prevention and community awareness

## 🚀 Website Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Interactive Gallery**: Photo lightbox showcasing our programs and impact
- **Modern UI/UX**: Clean, accessible design with smooth animations
- **SEO Optimized**: Comprehensive metadata and Open Graph support
- **Multi-device Favicons**: Professional branding across all platforms
- **Contact Integration**: Direct WhatsApp and email communication

## 🛠 Tech Stack

- **Framework**: Next.js 15.5.0 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.0
- **Fonts**: Source Sans 3 & Merriweather (Google Fonts)
- **Icons**: Lucide React
- **Image Optimization**: Next.js Image component
- **Package Manager**: pnpm
- **Deployment**: Vercel (recommended)

## 📦 Getting Started

### Prerequisites

- Node.js 18.0 or later
- pnpm (recommended) or npm/yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/humahive/website.git
   cd humahive
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Run the development server**

   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
pnpm build
pnpm start
```

## 📁 Project Structure

```
humahive/
├── src/
│   ├── app/                 # App Router pages
│   │   ├── gallery/         # Gallery page
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Homepage
│   └── components/          # Reusable components
│       ├── Footer.tsx       # Site footer
│       └── Navigation.tsx   # Navigation bar
├── public/                  # Static assets
│   ├── images/              # Gallery images
│   ├── logo.png            # Organization logo
│   └── favicon files       # Various favicon sizes
└── README.md               # This file
```

## 🖼 Gallery Management

To add new photos to the gallery:

1. Add image files to `/public/images/`
2. Update the `galleryConfig` array in `/src/app/gallery/page.tsx`
3. Include appropriate descriptions for accessibility

## 🌐 Deployment

The website is deployed on Vercel at [humahive.org](https://humahive.org)

For deployment:

1. Connect your repository to Vercel
2. Configure custom domain (humahive.org)
3. Enable automatic deployments from main branch

## 📧 Contact & Support

**Get in Touch:**

- **Email**: [humanafricanhive@gmail.com](mailto:humanafricanhive@gmail.com)
- **Phone/WhatsApp**: +254 708 566 780
- **LinkedIn**: [HumAhive](https://www.linkedin.com/company/humahive)
- **Location**: Kakuma Refugee Camp, Turkana County, Kenya

**Technical Issues:**
Please open an issue on this repository for website-related problems.

## 🤝 Contributing

We welcome contributions to improve our website. Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Our dedicated volunteers and community members
- Partners like Dot Glasses for their ongoing support
- The Kakuma refugee camp community
- All donors and supporters worldwide

---

**HumAhive** • Making a difference, one life at a time • [humahive.org](https://humahive.org)
