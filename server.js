const { execSync } = require('child_process');
const fs = require('fs');
const https = require('https');

// Descargar flujos desde GitHub al iniciar
const url = 'https://raw.githubusercontent.com/usuario/repositorio/rama/flows.json';
const file = fs.createWriteStream('flows.json');

https.get(url, response => {
  response.pipe(file);
  file.on('finish', () => {
    file.close(() => {
      execSync('node-red -v', { stdio: 'inherit' });
    });
  });
});
