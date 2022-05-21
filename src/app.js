'use strict';

const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter file name: ', (fileName) => {
  rl.question('Enter file content: ', (content) => {
    fs.appendFile('./src/' + fileName + '.txt', content, (err) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.log('Error');

        return rl.close();
      }

      // eslint-disable-next-line no-console
      console.log('Success');

      return rl.close();
    });
  });
});
