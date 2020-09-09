//caesar cipher






function ceasarCipher (string, offset){
    string = string.toLowerCase()
    const alpha = "abcdefghijklmnopqrstuvwxyz";
    let ceasar = "";
    ceasar = alpha.slice(offset, alpha.length) + alpha.slice(0, offset);
    let answer = "";
    for(let x = 0; x < string.length; x++){
        if(string[x]===" "){
            answer += " ";
        }else{
            answer += ceasar[alpha.indexOf(string[x])];
        } 
    }
    return answer; 
}

console.log(ceasarCipher("Genius without education is like silver in the mine", 13))
    
       
        


        
    