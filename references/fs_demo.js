const fs = require('fs');
const path = require('path');

// // Create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//   if(err) throw err;
//     console.log('Folder created');
//   }
// );

// // Create and write to file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello world!', err => {
//   if(err) throw err;
//     console.log('File written');

//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' I love node!', err => {
//       if(err) throw err;
//         console.log('File written');
//       }
//     );
//   }
// );

// Read file
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
  if(err) throw err;
    console.log(data);
});
