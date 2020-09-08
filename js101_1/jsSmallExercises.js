// madlib

function madlib(name, subject){
    return name + "'s favorite subject in school is " + subject;
}

var answer = madlib("Anushka", "art");
console.log(answer);

// ---------------------------------------------------------------
console.log("----------------------------------------------");
// Tip calculator

function tipAmount(amount, levelOfService){
    if (levelOfService == "good"){
        return amount + (amount * 0.2);
    }else if (levelOfService == "fair"){
        return amount + (amount * 0.15);
    }else if (levelOfService == "bad"){
        return amount + (amount * 0.1);
    }else {
        return "service: good fair bad";
    }
}

var result = tipAmount(100, "bad");
console.log(result);
console.log("------------------------------");

// tip calculator3

function splitAmount(bill, service, numPpl){
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



let result2 = splitAmount(100, "good", 3);
console.log(result2);

console.log("---------------------------");

function splitAmount1(bill, service, numPpl){
    if (service == "good"){
        let a = (bill + (bill * 0.2)) / numPpl;
        console.log(a);
    }else if (service == "fair"){
        a = (bill + (bill * 0.15)) / numPpl;
        console.log(a);
        
    }else if (service == "bad"){
        a = (bill + (bill * 0.1)) / numPpl;
        console.log(a);
        
    }else{
        console.log("servie: good fair bad");
    }
}



splitAmount1(100, "bad", 2)

