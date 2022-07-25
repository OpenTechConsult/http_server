const fs = require('fs');
const fsPromise = require('fs/promises');

const writingFiles = (content) => {

    fs.writeFile('test.txt', content, err => {
        if (err) {
            console.error(err);
        }
        console.log('Content created successfully');
    });
};

// writing to file using the asynchronous version
const writingFilesSync = (content) => {

    try {
        fs.writeFileSync('test2.txt', content);
    } catch (err) {
        console.error(err);
    }
    
};

// using the promise-based method offered by the fs/promises module.
const writingFilesPromise = async (content) => {
    try {
        await fsPromise.writeFile('test3.txt', content);
    } catch (err) {
        console.log(err)
    }
}

// append to a file
const appendToFile = (content) => {
    fs.appendFile('test.txt', content, err => {
        if (err) {
            console.error(err);
        }
    });
};

// promise version of appending file
const appendToFilePromise = async (content) => {
    try {
        await fsPromise.appendFile('test2.txt', content);
    } catch (err) {
        console.log(err);
    }
}


exports.writingFiles = writingFiles;
exports.writingFilesSync = writingFilesSync;
exports.writingFilesPromise = writingFilesPromise;
exports.appendToFile = appendToFile;
exports.appendToFilePromise = appendToFilePromise;