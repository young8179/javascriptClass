//caesar cipher






function ceasarCipher (string, offset){
    
    const alpha = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let ceasar = "";
    let ceasarUpper = "";
    
    ceasar = alpha.slice(offset, alpha.length) + alpha.slice(0, offset);
    ceasarUpper = upper.slice(offset, upper.length) + upper.slice(0, offset);
    let answer = "";
    for(let x = 0; x < string.length; x++){
        let char = string[x]
        if(string[x] === string[x].toUpperCase()){
            if(string[x] !== upper[upper.indexOf(string[x])]){
                answer += char;
            }else{
                answer += ceasarUpper[upper.indexOf(string[x])];
            }
        }else{
            if(string[x] === alpha.indexOf(string[x])){
                answer += char;
            }else{
                answer += ceasar[alpha.indexOf(string[x])];
            } 
        }    
        
        
            
    }
    return answer; 
}

console.log(ceasarCipher("Genius without education is like silver in the mine!", 13))
    
       
        


        
    