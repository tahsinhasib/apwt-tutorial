import * as os from 'os';

console.log('Platform:', os.platform());
console.log('CPU cores:', os.cpus().length);
console.log('Total Memory:', os.totalmem() / 1024 / 1024, 'MB');
console.log('Free Memory:', os.freemem() / 1024 / 1024, 'MB');
