const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Remove all rounded corners
content = content.replace(/rounded-(sm|md|lg|xl|2xl|3xl|full|none)/g, 'rounded-none');

// 2. Fix Header Structure & Logo text
const headerRegex = /<div class="max-w-7xl mx-auto px-6 lg:px-8">\s*<a href="#" class="flex items-center gap-2">/;
const fixedHeader = `<div class="max-w-7xl mx-auto px-6 lg:px-8">\n      <div class="flex items-center justify-between h-20">\n        <a href="#" class="flex items-center gap-2 text-xl font-extrabold text-rtt-white tracking-tight">`;
content = content.replace(headerRegex, fixedHeader);

// Ensure RTT text is next to logo in header
const logoImgRegex = /<img src="images\/logo\.png" alt="Rio Todo Terreno" class="h-10">\s*<\/a>/;
const fixedLogoImg = `<img src="images/logo.png" alt="Rio Todo Terreno" class="h-10">\n          <span>RTT</span>\n        </a>`;
content = content.replace(logoImgRegex, fixedLogoImg);

// 3. Fix Footer Logo Text
const footerLogoRegex = /<div class="flex items-center gap-2 text-rtt-white font-bold text-lg">\s*<img src="images\/logo\.png" alt="Rio Todo Terreno" class="h-8">\s*<\/div>/;
const fixedFooterLogo = `<div class="flex items-center gap-2 text-xl font-extrabold text-rtt-white tracking-tight">\n        <img src="images/logo.png" alt="Rio Todo Terreno" class="h-8">\n        <span>RTT</span>\n      </div>`;
content = content.replace(footerLogoRegex, fixedFooterLogo);

// 4. Fix Footer Links
const footerLinksRegex = /<div class="flex items-center gap-6 text-rtt-steel-500 text-sm">\s*<span>Capacitação<\/span>\s*<span>Operações<\/span>\s*<span>Performance<\/span>\s*<\/div>/;
const fixedFooterLinks = `<div class="flex items-center gap-6 text-rtt-steel-500 text-sm">\n        <a href="#servicos" class="hover:text-rtt-orange-500 transition-colors">Capacitação</a>\n        <a href="#para-quem" class="hover:text-rtt-orange-500 transition-colors">Operações</a>\n        <a href="#diferenciais" class="hover:text-rtt-orange-500 transition-colors">Performance</a>\n      </div>`;
content = content.replace(footerLinksRegex, fixedFooterLinks);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Fix script complete.');
