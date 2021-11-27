const myPackage = require('./dist');

let p = myPackage.getMonetPalette('#ff00ff');
console.log(p);
myPackage.applyMonetPalette(p, 'el', 'myou');
