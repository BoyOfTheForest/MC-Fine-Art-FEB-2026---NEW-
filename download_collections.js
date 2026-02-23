const fs = require('fs');
const https = require('https');
const path = require('path');

const images = [
    { name: 'Earth Up Close', url: 'https://cicanese.my.canva.site/art/_assets/media/084e8cdec801c84371f6ba94d5df4000.jpg' },
    { name: 'Ghosts', url: 'https://cicanese.my.canva.site/art/_assets/media/aad892e5eba653ffd6386c355ea82d63.jpg' },
    { name: 'Dilmah Conservation', url: 'https://cicanese.my.canva.site/art/_assets/media/a5970cb72dcdd52a108f0e1e413b9087.jpg' },
    { name: 'The Digital Dialogs', url: 'https://cicanese.my.canva.site/art/_assets/media/9c5d799ec66e2bebb58b211494dfb632.jpg' },
    { name: 'Momento Mori', url: 'https://cicanese.my.canva.site/art/_assets/media/5b197909a005c10a51b538d2a7a70009.jpg' }
];

const downloadDir = path.join(__dirname, 'public', 'Images', 'Collections');

if (!fs.existsSync(downloadDir)) {
    fs.mkdirSync(downloadDir, { recursive: true });
}

const downloadImage = (url, filename) => {
    return new Promise((resolve, reject) => {
        https.get(url, (response) => {
            if (response.statusCode !== 200) {
                reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
                return;
            }
            const file = fs.createWriteStream(filename);
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log(`Downloaded ${filename}`);
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(filename, () => { });
            reject(err);
        });
    });
};

async function run() {
    for (const item of images) {
        const safeName = item.name.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9\-]/g, '');
        const filename = path.join(downloadDir, `${safeName}.jpg`);
        try {
            await downloadImage(item.url, filename);
        } catch (e) {
            console.error(e.message);
        }
    }
}

run();
