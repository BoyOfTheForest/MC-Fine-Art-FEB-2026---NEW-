const https = require('https');
https.get('https://matthewcicanese.com/about/', (res) => {
    let data = '';
    res.on('data', (c) => data += c);
    res.on('end', () => {
        const regex = /<img[^>]+src="([^">]+)"/g;
        let match;
        const urls = new Set();
        while ((match = regex.exec(data)) !== null) {
            urls.add(match[1]);
        }
        const fs = require('fs');
        fs.writeFileSync('image_urls.txt', [...urls].join('\n'));
    });
});
