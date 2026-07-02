# Internationalization (i18n) Setup - Complete Guide

This guide explains the i18n implementation that has been set up for your Pousada Liberty website to support Portuguese, English, and Spanish.

## What Was Done

### 1. **Translation Files Created**
Three JSON translation files have been created in `src/i18n/locales/`:
- **pt.json** - Portuguese translations (default language)
- **en.json** - English translations
- **es.json** - Spanish translations

All content from your website has been extracted and organized by sections:
- `header` - Navigation menu
- `hero` - Hero section descriptions
- `booking` - Booking form labels and messages
- `rooms` - Room names, descriptions, and details
- `amenities` - Amenities names and descriptions
- `testimonials` - Testimonial section headers
- `faq` - FAQ questions and answers
- `footer` - Footer content and links
- `pousadaInfo` - General pousada information

### 2. **i18n Configuration**
- **src/i18n/i18n.ts** - Main configuration file
  - Initializes i18next with react-i18next
  - Auto-detects browser language
  - Saves language preference to localStorage
  - Defaults to Portuguese

### 3. **Updated Entry Point**
- **src/main.tsx** - Now imports the i18n configuration

### 4. **Language Switcher Component**
- **src/components/LanguageSwitcher.tsx** - New component
  - Desktop: Flag buttons (🇧🇷 🇺🇸 🇪🇸)
  - Mobile: Dropdown select
  - Persists language choice in localStorage

### 5. **Updated Components**
All components have been updated to use `useTranslation()` hook:
- **Header.tsx** - Navigation labels + Language Switcher
- **FAQ.tsx** - All Q&A content
- **Amenities.tsx** - All amenities names and descriptions
- **Testimonials.tsx** - Section headers
- **Footer.tsx** - All footer content and links
- **BookingBar.tsx** - Form labels and messages
- **RoomGallery.tsx** - Section headers

## Installation & Setup

### Step 1: Install Dependencies
Run the following command in your project directory:

```bash
npm install i18next react-i18next
```

### Step 2: Start Development Server
After installation, start your dev server:

```bash
npm run dev
```

### Step 3: Test Language Switching
1. Open your website in a browser
2. Look for the language switcher in the header (top right)
3. Click on 🇧🇷 (PT), 🇺🇸 (EN), or 🇪🇸 (ES) buttons
4. Verify all content switches to the selected language
5. Refresh the page - your language choice should be remembered

## How to Use in Components

### Adding Translation to a Component

```tsx
import { useTranslation } from 'react-i18next';

export default function MyComponent() {
  const { t } = useTranslation();

  return (
    <h1>{t('header.home')}</h1>
  );
}
```

### Key Points
- Always call `const { t } = useTranslation();` at the start of component
- Use `t('path.to.key')` to reference translated strings
- For arrays of objects, use: `t('faq.items', { returnObjects: true })`

## Adding New Translations

### To add a new translatable string:

1. Add the key-value pair to all three JSON files:
   - `src/i18n/locales/pt.json`
   - `src/i18n/locales/en.json`
   - `src/i18n/locales/es.json`

Example:
```json
{
  "mySection": {
    "myLabel": "My English Text"
  }
}
```

2. Use in your component:
```tsx
{t('mySection.myLabel')}
```

## Adding a New Language

To add support for a new language (e.g., French):

1. Create `src/i18n/locales/fr.json` with all translations

2. Update `src/i18n/i18n.ts`:
```tsx
import frJSON from './locales/fr.json';

const resources = {
  en: { translation: enJSON },
  es: { translation: esJSON },
  pt: { translation: ptJSON },
  fr: { translation: frJSON },  // Add this
};
```

3. Update `src/components/LanguageSwitcher.tsx`:
```tsx
const languages = [
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },  // Add this
];
```

## Browser Detection

The i18n system automatically detects the user's browser language:
- If the browser is set to Portuguese, English, or Spanish → Uses that language
- Otherwise → Defaults to Portuguese
- User can always override with the language switcher
- Choice is saved to browser's localStorage

## Troubleshooting

### Translations not showing up?
1. Check the console for errors
2. Verify the translation key exists in all three JSON files
3. Make sure component imports `useTranslation` from 'react-i18next'
4. Restart the dev server

### Language not persisting?
1. Check if localStorage is enabled in browser
2. Clear browser cookies and localStorage, then reload
3. Check browser DevTools > Application > Local Storage

### Content still showing in Portuguese?
1. Verify the `t()` calls have the correct key paths
2. Check that all components are wrapped with the i18n provider (already done in main.tsx)
3. Hard refresh the browser (Ctrl+Shift+R)

## File Structure

```
src/
├── i18n/
│   ├── i18n.ts                 # Main configuration
│   └── locales/
│       ├── pt.json             # Portuguese translations
│       ├── en.json             # English translations
│       └── es.json             # Spanish translations
├── components/
│   ├── Header.tsx              # Updated with i18n
│   ├── LanguageSwitcher.tsx    # New component
│   ├── FAQ.tsx                 # Updated with i18n
│   ├── Amenities.tsx           # Updated with i18n
│   ├── Testimonials.tsx        # Updated with i18n
│   ├── Footer.tsx              # Updated with i18n
│   ├── BookingBar.tsx          # Updated with i18n
│   ├── RoomGallery.tsx         # Updated with i18n
│   └── ... (other components)
├── main.tsx                    # Updated - imports i18n
└── ... (other files)
```

## Build for Production

```bash
npm run build
```

The i18n system will work exactly the same in production. Language preferences are stored in localStorage and will persist across sessions.

## Notes

- All static text in your website can now be easily translated
- Data like room names in `data.ts` still come from the data file but are mapped to translations in the display
- Amenity icons remain the same across all languages
- Contact info (phone, email, address) is not translated as it's location-specific

## Support

If you encounter any issues:
1. Check the browser console for error messages
2. Verify all translation keys exist in the JSON files
3. Ensure npm packages were installed correctly
4. Clear browser cache and reload

Enjoy your multilingual website! 🌍
