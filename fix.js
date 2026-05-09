const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Revert fonts
content = content.replace(/<link href="https:\/\/fonts\.googleapis\.com\/css2\?family=Barlow\+Condensed[^>]+>/, '<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">');
content = content.replace(/font-headline /g, '');
content = content.replace(/font-body/g, 'font-sans');
content = content.replace(/font-mono tracking-widest/g, 'font-semibold tracking-[0.15em]');

// 2. Fix the tailwind config order (move it BEFORE the cdn script)
// We will extract the tailwind.config script and put it before the cdn script.
const configRegex = /<script>\s*tailwind\.config = [\s\S]*?<\/script>/;
const configMatch = content.match(configRegex);
if (configMatch) {
  content = content.replace(configMatch[0], ''); // remove it from current location
  const cdnScript = '<script src="https://cdn.tailwindcss.com"></script>';
  content = content.replace(cdnScript, configMatch[0] + '\n  ' + cdnScript);
}

// 3. Fix the Logo in Header
const logoRegex = /<a href="#" class="text-xl font-extrabold text-rtt-white tracking-tight flex items-center gap-2">[\s\S]*?<\/a>/;
const newLogo = `<a href="#" class="flex items-center gap-2">
          <img src="logo.png" alt="Rio Todo Terreno" class="h-10">
        </a>`;
content = content.replace(logoRegex, newLogo);

// 4. Fix footer logo if there's one
const footerLogoRegex = /<div class="flex items-center gap-2 text-rtt-white font-bold text-lg">[\s\S]*?<\/div>/;
const newFooterLogo = `<div class="flex items-center gap-2 text-rtt-white font-bold text-lg">
        <img src="logo.png" alt="Rio Todo Terreno" class="h-8">
      </div>`;
content = content.replace(footerLogoRegex, newFooterLogo);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Fix complete.');
