
var prompt = require('prompt-sync')();
var bill = prompt('bill: ');
bill = parseInt(bill);
let service = prompt("service: ");
let numPpl = prompt("number of people: ");
numPpl = parseInt(numPpl);
function splitAmount(){
    if (service == "good"){
        return (bill + (bill * 0.2)) / numPpl;
        
    }else if (service == "fair"){
        return (bill + (bill * 0.15)) / numPpl;
        
    }else if (service == "bad"){
        return (bill + (bill * 0.15)) / numPpl;
        
    }else{
        return "servie: good fair bad";
    }
}



let result2 = splitAmount();
console.log(result2);
