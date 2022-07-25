const fs = require('fs');
const fsPromise =  require('fs/promises');

const readFile = () => {
    fs.readFile('README.md', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(data)
    })
}

const readFileSync = () => {
    try {
        const data = fs.readFileSync('README.md', 'utf8');
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}

// promise-base method to read files
const readFilePromise = async () => {
    try {
        const data = await fsPromise.readFile('README.md', { encoding: 'utf8' });
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}
exports.readFile = readFile;
exports.readFileSync = readFileSync;
exports.readFilePromise = readFilePromise;