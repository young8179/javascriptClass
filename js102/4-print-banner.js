// print a banner
let asterisks ="*"
function printBanner(string){
    console.log(asterisks.repeat(string.length+4));
    console.log(`* ${string} *`);
    console.log(asterisks.repeat(string.length+4));
}

printBanner("Welcome to DigitalCraft")