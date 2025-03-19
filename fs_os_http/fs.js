let fs = require('fs')

fs.writeFileSync('C:/Users/Tahsin/Desktop/apwt-tutorial/fs_os_http/testfile.doc', 'this is test doc');


let rd = fs.readFileSync('C:/Users/Tahsin/Desktop/apwt-tutorial/fs_os_http/testfile.doc', 'utf-8')
console.log(rd);

