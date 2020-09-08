
function splitAmount(bill, service, numPpl){
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



splitAmount(100, "bad", 2)

