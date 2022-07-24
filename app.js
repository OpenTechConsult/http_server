const fs = require('fs/promises');

const example = async () => {
    try {
        const stats = await fs.stat('app.js');
        console.log(stats.isFile());
        console.log(stats.isDirectory());
        console.log(stats.isSymbolicLink());
        console.log(stats.size);
    } catch (err) {
        console.log(err);
    }
}

example();

