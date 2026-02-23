const fs = require('fs');
const https = require('https');

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  await download("https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Canon_wordmark.svg/1280px-Canon_wordmark.svg.png", "./public/logos/canon.png");
  await download("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/National_Geographic_Logo.svg/1280px-National_Geographic_Logo.svg.png", "./public/logos/national-geographic.png");
  await download("https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Tampa_International_Airport_Logo.svg/1280px-Tampa_International_Airport_Logo.svg.png", "./public/logos/tampa-airport.png");
  console.log("Downloads complete.");
}

run();
