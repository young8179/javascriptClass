//factor number

let factor = [];
function factorNumber(number){
    for(let x = 1; x <= number; x++){
        if(number % x === 0){
            factor.push(x) ;
        }
    
    }
    return factor;    
}

console.log(factorNumber(8));