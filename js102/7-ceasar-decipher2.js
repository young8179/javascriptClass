//caesar cipher






function decipher (string, offset){
    
    const alpha = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let ceasar = "";
    let ceasarUpper = "";
    let answer = "";
    ceasar = alpha.slice(offset, alpha.length) + alpha.slice(0, offset);
    ceasarUpper = upper.slice(offset, upper.length) + upper.slice(0, offset);
    
    for(let x = 0; x < string.length; x++){
        let char = string[x]
        if(string[x] === string[x].toUpperCase()){
            if(string[x] !== upper[upper.indexOf(string[x])]){
                answer += char;
            }else{
                answer += upper[ceasarUpper.indexOf(string[x])];
            }
        }else{
            if(string[x] === alpha.indexOf(string[x])){
                answer += char;
            }else{
                answer += alpha[ceasar.indexOf(string[x])];
            } 
        }    
        
        
            
    }
    return answer; 
}

console.log(decipher("Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar", 13))
    
       
        


        
    