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
        console.log("service: good fair bad");
    }
}

var result = tipAmount(100, "bad");
console.log(result);
console.log("------------------------------");

// Print Number

function printNumber(start, end){
    for (var i = start; i <= end; i++){
        console.log(i);
    }
}

var resultPrintNumber = printNumber(1, 4);
console.log(resultPrintNumber);



function printNumber2(start, end){
    var j = start;
    while(j <= end){
        
        console.log(j);
        j++;
        
    }
}
var resultPrintNumber2 = printNumber2(1, 10);
console.log(resultPrintNumber2);
        