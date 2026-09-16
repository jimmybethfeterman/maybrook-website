// Full-page screenshot of index.html using the local Chrome install (macOS).
// Usage: node shot.js   ->   preview_full.png
const { execFileSync } = require('child_process');
const path = require('path');

const chrome = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const file = 'file://' + path.join(__dirname, 'index.html');

execFileSync(chrome, [
  '--headless', '--disable-gpu', '--hide-scrollbars',
  '--window-size=1280,4700',
  '--default-background-color=FFFFFFFF',
  '--screenshot=' + path.join(__dirname, 'preview_full.png'),
  file,
], { stdio: 'inherit' });

console.log('wrote preview_full.png');
