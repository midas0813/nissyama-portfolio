# Nakanishi Takashi - Senior Backend Engineer Portfolio

A professional, Japanese-style developer portfolio for a senior fullstack engineer specializing in Golang backend systems.

## 🎯 Features

### Design Philosophy
- **Clean & Minimal**: Professional Japanese business style
- **Typography-Focused**: No flashy animations, emphasis on content
- **Structured Layout**: Logical, easy-to-navigate sections
- **Mobile Responsive**: Works perfectly on all devices

### Sections

1. **Navigation**
   - Fixed header with smooth scroll
   - EN/JP language toggle
   - Clean, minimal design

2. **Hero Section**
   - Clear value proposition
   - Professional introduction
   - Japanese name (中西 貴志)
   - Social links

3. **About Me**
   - Detailed background
   - Work philosophy
   - Professional statistics
   - Years of experience

4. **Skills**
   - Categorized by domain (Backend, Database, Cloud, etc.)
   - Experience level + years for each skill
   - Visual progress bars
   - Comprehensive technical stack

5. **Projects (Case Studies)**
   - 3 detailed real-world projects
   - Problem → Solution → Architecture → Challenges → Results
   - Quantifiable metrics
   - Technical depth

6. **Engineering Blog**
   - 4 technical articles
   - Categories and read times
   - Professional topics

7. **Contact**
   - Professional contact form
   - Clear availability statement
   - Social links

## 🛠 Tech Stack

- **Framework**: Next.js 16.2.4
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Fonts**: Geist Sans & Geist Mono

## 🚀 Getting Started

### Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### Build
```bash
npm run build
```

### Production
```bash
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx      # Fixed header with language toggle
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About section
│   ├── Skills.tsx         # Skills with progress bars
│   ├── Projects.tsx       # Detailed case studies
│   ├── Blog.tsx           # Engineering insights
│   └── Contact.tsx        # Contact form
└── ...
```

## 🎨 Design Principles

### Color Scheme
- **Light Mode**: White background, slate text
- **Dark Mode**: Slate-950 background, white text
- **Accent**: Minimal use of color, professional appearance

### Typography
- **Headings**: Bold, tight letter-spacing
- **Body**: Relaxed line-height (1.75)
- **Hierarchy**: Clear visual structure

### Interactions
- **Subtle**: No flashy animations
- **Professional**: Smooth transitions only
- **Accessible**: Proper focus states

## 🌐 SEO Optimization

- Semantic HTML structure
- Meta tags for social sharing
- Descriptive page titles
- Keyword optimization
- Fast loading times

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm, md, lg
- Touch-friendly interactions
- Optimized for all screen sizes

## 🔧 Customization

### Update Personal Information
1. Edit `src/components/Hero.tsx` - Name and introduction
2. Edit `src/components/About.tsx` - Background and philosophy
3. Edit `src/components/Skills.tsx` - Technical skills
4. Edit `src/components/Projects.tsx` - Project case studies
5. Edit `src/components/Blog.tsx` - Blog posts
6. Edit `src/components/Contact.tsx` - Contact information

### Change Language Content
Edit the `navItems` in `src/components/Navigation.tsx` to add Japanese translations.

### Modify Styling
Edit `src/app/globals.css` for global styles or use Tailwind classes in components.

## 📄 License

All rights reserved © 2024 Nakanishi Takashi

## 🤝 Contact

- **Email**: nakanishi.takashi@example.com
- **Location**: Tokyo, Japan
- **GitHub**: github.com/nakanishi-takashi

---

Built with ❤️ using Next.js and Tailwind CSS
