# 🚀 Quick Start Guide - Google-Free Portfolio

## ✅ Installation Complete

Your portfolio is ready to use! Follow these steps to get started.

---

## 📥 What's Installed

Dependencies are already installed. You have:
- React 19.2.0
- Vite 6.4.1  
- Tailwind CSS 3.4.1 (local)
- Framer Motion 12.23.24
- Lucide React 0.554.0
- TypeScript 5.8.2

---

## 🎯 Start Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

The dev server has hot module replacement - changes save automatically! ⚡

---

## 🏗️ Build for Production

```bash
npm run build
```

Creates optimized files in the `dist/` folder ready for deployment.

---

## 👀 Preview Build

```bash
npm run preview
```

Test the production build locally.

---

## 📝 Customize Your Portfolio

### **Update Personal Information**

Edit `constants.ts`:

```typescript
// Update navigation items
export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  // ... add your items
];

// Update services
export const SERVICES: ServiceItem[] = [
  {
    id: '1',
    number: '01',
    title: 'YOUR SERVICE',
    description: 'Your description here',
    subServices: ['Sub 1', 'Sub 2', 'Sub 3'],
  },
  // ...
];

// Update projects
export const PROJECTS: ProjectItem[] = [
  {
    id: 'p1',
    title: 'YOUR PROJECT',
    category: 'Category',
    imageUrl: 'https://your-image-url.jpg',
    year: '2024'
  },
  // ...
];

// Update certificates
export const CERTIFICATES: CertificateItem[] = [
  {
    id: 'c1',
    title: 'CERTIFICATION',
    category: 'CATEGORY',
    issuer: 'Issuer',
    date: '2024',
    imageUrl: 'https://your-image-url.jpg'
  },
  // ...
];
```

### **Update Contact Information**

Edit `components/Footer.tsx`:

```tsx
<a href="mailto:your-email@example.com">
  your-email@example.com
</a>
```

### **Update Social Links**

Edit `components/Footer.tsx` - update the social media links section.

### **Change Colors**

Edit `tailwind.config.ts`:

```typescript
colors: {
  brand: {
    dark: '#0a0a0a',      // Main background
    gray: '#1a1a1a',      // Secondary
    accent: '#ff4d00',    // Highlight color
    light: '#f5f5f5'      // Text color
  }
}
```

### **Update About Section**

Edit `components/About.tsx` - update the text and image URL.

### **Update Hero Section**

Edit `components/Hero.tsx` - customize title and description.

---

## 📦 Project Structure

```
├── components/           # All React components
├── public/              # Images and static files
├── App.tsx              # Main component
├── constants.ts         # All your data
├── types.ts             # TypeScript types
├── index.css            # Global styles
├── tailwind.config.ts   # Tailwind config
├── vite.config.ts       # Build config
└── package.json         # Dependencies
```

---

## 🎨 Styling

The portfolio uses **Tailwind CSS** for styling. All styles are in:
- `index.css` - Global styles
- Components use Tailwind classes directly
- `tailwind.config.ts` - Brand colors and custom theme

---

## 📱 Responsive Design

The app is fully responsive:
- **Desktop (1024px+)**: Horizontal scroll with custom cursor
- **Tablet (768px - 1023px)**: Vertical stack
- **Mobile (< 768px)**: Vertical stack with optimized layout

---

## 🔧 Development Tips

### **Add New Section**

1. Create component: `components/MySection.tsx`
2. Add to `App.tsx` in the layout
3. Update navigation in `constants.ts`
4. Add styles using Tailwind classes

### **Update Fonts**

All fonts are system fonts. To use custom fonts:

1. Add font files to `public/fonts/`
2. Update `index.css` with `@font-face`
3. Update `tailwind.config.ts` fontFamily

### **Environment Variables**

Create `.env.local` file:

```env
# No Google APIs needed!
# Add your own vars if needed
VITE_MY_VAR=value
```

Access in code:
```tsx
console.log(import.meta.env.VITE_MY_VAR);
```

---

## 🚀 Deployment

### **Netlify**

```bash
# Connect your Git repo to Netlify
# Build command: npm run build
# Publish directory: dist
```

### **Vercel**

```bash
# Connect your Git repo to Vercel
# Framework: Vite (auto-detected)
# Deploy automatically on push
```

### **GitHub Pages**

Update `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/your-repo-name/',
  // ...
});
```

Then push to GitHub!

---

## 📚 Useful Resources

- **Tailwind CSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion/
- **Lucide Icons**: https://lucide.dev/
- **React**: https://react.dev/
- **Vite**: https://vitejs.dev/

---

## ✨ Key Features

✅ No external dependencies  
✅ Fast development with HMR  
✅ Production-optimized builds  
✅ Mobile responsive  
✅ Custom animations  
✅ Type-safe with TypeScript  
✅ Easy to customize  

---

## 🐛 Troubleshooting

### **Build fails**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### **Styles not applied**
- Check `tailwind.config.ts` content paths
- Verify component files are in correct directory
- Restart dev server

### **Images not loading**
- Use absolute URLs from `public/` or external sources
- Check browser console for 404 errors

### **Dev server not starting**
```bash
# Try different port
npm run dev -- --port 5173
```

---

## 📞 Need Help?

Check the documentation files:
- `MIGRATION_SUMMARY.md` - What changed
- `VERIFICATION_REPORT.md` - Build verification
- Component files have inline comments

---

**Ready to launch? Run `npm run dev` and start building! 🚀**

*Last Updated: November 22, 2025*
