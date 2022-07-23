const mymodule = require('./6-my-module');

const directory = process.argv[2]  
const ext = process.argv[3];

mymodule(directory, ext, function(err, files) {
    if (err) {
        return console.error('error:', err);
    }
    files.forEach(function(file) {
        console.log(file);
    });
});