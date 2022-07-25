const {readFile, readFileSync, readFilePromise} = require('./readFile');
const { writingFiles, writingFilesSync, writingFilesPromise, appendToFile, appendToFilePromise } = require('./writing_files');

readFile();
readFileSync();
readFilePromise();

// writing files
writingFiles('Some content');
writingFilesSync('Yet another text');
writingFilesPromise('Content written using fs/promises').then(() => {
    console.log('File read successfully')
});
appendToFile('File to be appended to test1');
appendToFilePromise(' Content to be appended to test2.txt')
    .then(() => { console.log('Content appended successfully') });

