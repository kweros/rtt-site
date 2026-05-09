const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Update Head (Fonts and Tailwind config)
const headOld = `<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">`;
const headNew = `<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@500;600&display=swap" rel="stylesheet">
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            rtt: {
              orange: { 500: '#FF6A00', 400: '#FF7E1F', 300: '#FFA04D' },
              coal: { 950: '#070707', 900: '#0E0E0E', 850: '#141414', 800: '#1B1B1B' },
              steel: { 700: '#2E2E2E', 600: '#454545', 500: '#6A6A6A' },
              sand: { 100: '#F5F1EB', 200: '#E8DED0' },
              white: '#FFFFFF'
            }
          },
          fontFamily: {
            headline: ['Barlow Condensed', 'sans-serif'],
            body: ['Inter', 'sans-serif'],
            mono: ['IBM Plex Mono', 'monospace']
          }
        }
      }
    }
  </script>`;
content = content.replace(headOld, headNew);

// 2. Global class replacements
const mappings = {
  'slate-950': 'rtt-coal-950',
  'slate-900': 'rtt-coal-900',
  'slate-800': 'rtt-coal-800',
  'slate-700': 'rtt-steel-700',
  'slate-600': 'rtt-steel-600',
  'slate-500': 'rtt-steel-500',
  'slate-400': 'rtt-sand-200',
  'slate-300': 'rtt-sand-100',
  'blue-950': 'rtt-orange-500',
  'blue-900': 'rtt-orange-500',
  'blue-800': 'rtt-orange-500',
  'blue-700': 'rtt-orange-500',
  'blue-600': 'rtt-orange-500',
  'blue-500': 'rtt-orange-400',
  'text-white': 'text-rtt-white',
  'font-sans': 'font-body',
  'rounded-sm': 'rounded-xl'
};

for (const [oldClass, newClass] of Object.entries(mappings)) {
  const regex = new RegExp(`\\b${oldClass}\\b`, 'g');
  content = content.replace(regex, newClass);
}

// 3. Headings
content = content.replace(/<h1 class="/g, '<h1 class="font-headline ');
content = content.replace(/<h2 class="/g, '<h2 class="font-headline ');
content = content.replace(/<h3 class="/g, '<h3 class="font-headline ');

// Eyebrow and stats tweaking
content = content.replace(/font-semibold tracking-\[0\.15em\]/g, 'font-mono tracking-widest');
content = content.replace(/text-4xl lg:text-5xl font-extrabold/g, 'font-headline text-5xl lg:text-6xl font-extrabold');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Update complete.');
