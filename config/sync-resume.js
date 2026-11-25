const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, '..', 'assets', 'Sarshij-Karn-Resume.pdf');
const dest = path.join(__dirname, '..', 'public', 'assets', 'Sarshij-Karn-Resume.pdf');

if (!fs.existsSync(src)) {
  console.warn(`⚠️ Resume source not found at ${src}, skipping sync.`);
  process.exit(0);
}

fs.mkdirSync(path.dirname(dest), { recursive: true });
fs.copyFileSync(src, dest);
console.log('✅ Synced assets/Sarshij-Karn-Resume.pdf -> public/assets/Sarshij-Karn-Resume.pdf');
