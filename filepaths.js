const path = require('path');

// getting information out of a path
const app = '/Users/eagboka/Documents/GitHub/http_server/app.js';

console.log(path.dirname(app));
console.log(path.basename(app));
console.log(path.extname(app));

// get the filename without the extension
console.log(path.basename(app, path.extname(app)));

// join two or more part of a path using path.join()
const name = 'eagboka';
console.log(path.join('/', 'users', name, 'notes.txt'));

// get the absolute path of a file
console.log(path.resolve('app.js'))

