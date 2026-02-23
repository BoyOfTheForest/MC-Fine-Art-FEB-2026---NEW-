const crypto = require('crypto');
const str = 'Smithsonian_Magazine_logo.svg';
const hash = crypto.createHash('md5').update(str).digest('hex');
console.log('https://upload.wikimedia.org/wikipedia/commons/' + hash[0] + '/' + hash.substring(0, 2) + '/' + str);
console.log('https://upload.wikimedia.org/wikipedia/en/' + hash[0] + '/' + hash.substring(0, 2) + '/' + str);
