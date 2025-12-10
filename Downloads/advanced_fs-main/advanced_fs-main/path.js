const path = require('path');
const basename=path.basename('/day2/path.js');
console.log(basename); // Output: path.js

//to check extension name
const extname=path.extname('/day2/path.js');
console.log(extname); // Output: .js

const joinnedPath=path.join('/day2','path.js');
console.log(joinnedPath); // Output: /day2/path.js