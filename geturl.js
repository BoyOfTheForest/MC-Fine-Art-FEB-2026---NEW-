const https = require('https');

https.get('https://en.wikipedia.org/wiki/File:Smithsonian_Magazine_logo.svg', { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        const match = data.match(/https:\/\/upload\.wikimedia\.org\/wikipedia\/en\/[a-f0-9]\/[a-f0-9a-f]+\/Smithsonian_Magazine_logo\.svg/);
        if (match) console.log(match[0]);
        else console.log('not found on en');

        const match2 = data.match(/https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/[a-f0-9]\/[a-f0-9a-f]+\/Smithsonian_Magazine_logo\.svg/);
        if (match2) console.log(match2[0]);
        else console.log('not found on commons');
    });
}).on('error', console.error);
