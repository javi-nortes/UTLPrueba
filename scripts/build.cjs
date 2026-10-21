const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const output = path.join(root, 'dist');
fs.mkdirSync(output, { recursive: true });
for (const file of ['index.html', 'resultados.html', 'app.js', 'audios.js']) {
  fs.copyFileSync(path.join(root, file), path.join(output, file));
}
if (fs.existsSync(path.join(root, 'audio'))) {
  fs.cpSync(path.join(root, 'audio'), path.join(output, 'audio'), { recursive: true });
}
console.log('Cuestionario, resultados y recursos preparados en dist/');
