const fs = require('fs')
const shell = require('shelljs');

const sleep = function(sec) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res();
        }, sec * 1000)
    })
};

(async () => {

    for (;;) {
        fs.appendFile('aa', 'addText', (err) => {
            if (err) {
                throw err;
            }
            console.log("File is updated.");
        });
    
        fs.appendFileSync('./aa', 'addText')
        
        shell.exec(`git add ./`);
        // git commit --date="10 day ago" -m "Your commit message" 
        shell.exec(`git commit --date="1000 day ago" -m "update some text"`);
        sleep(1);
    }
})();