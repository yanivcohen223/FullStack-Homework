const os = require('os');

console.log(`free memory: ${os.freemem}`);

console.log(`free memory: ${os.totalmem}`);

const fs = require('fs');
const files = fs.readdirSync('./');

console.log(`[sync] ${files}`);