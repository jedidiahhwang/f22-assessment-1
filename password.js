const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

reader.question("Type in a password!", function(password) {
    // console.log(typeof password);
    // console.log(password.length);
    console.log(password[0]);

    let hasUpperCase = false;

    for(let i = 0; i < password.length; i++) {
        let upperChar = password[i].toUpperCase();
        if(upperChar === password[i]) {
            hasUpperCase = true;
            break;
        }
    }

    if(password.length >= 10 && password.length <= 20 && password.includes("!", "h") && hasUpperCase) {
        console.log(`
        ╱╱┏╮
        ╱╱┃┃
        ▉━╯┗━╮
        ▉┈┈┈┈┃
        ▉╮┈┈┈┃
        ╱╰━━━
        `);
    } else {
        console.log("Your password is not long enough :(.");
    }

    reader.close();
})

