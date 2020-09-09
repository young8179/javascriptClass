// Leetspeak
// Write a function leetspeak which is given a string, and returns the leetspeak equivalent of the string. To convert text to its leetspeak version, make the following substitutions:
// A => 4   E => 3    G => 6    I => 1    O => 0   S => 5   T => 7

// function leetSpeak(word){
     
//     for(let x = 0; x < word.length; x++)    
       
//         if(word[x] === "A"){
//             word.replace("A", "4");
//         }else if(word[x] === "E"){
//             word.replace("E", "3");
//         }else if(word[x] === "G"){
//             word.replace("G", "6");
//         }else if(word[x] === "I"){
//             word.replace("I", "1");
//         }else if(word[x] === "O"){
//             word.replace("O", "0");
//         }else if(word[x] === "S"){
//             word.replace("S", "5");
//         }else if(word[x] === "T"){
//             word.replace("T", "7");
//         }
//         return word;
// }
// result = leetSpeak("AAple");
// console.log(result);

function leetSpeak(word){
    
    let newWord = "";
    for(let x = 0; x < word.length; x++)
        if(word[x] === "a" || word[x] === "A"){
            newWord += "4";
        }else if(word[x] === "e" || word[x] === "E"){
            newWord += "3";
        }else if(word[x] === "g" || word[x] === "G"){
            newWord += "6";
        }else if(word[x] === "i" || word[x] === "I"){
            newWord += "1";
        }else if(word[x] === "o" || word[x] === "O"){
            newWord += "0";
        }else if(word[x] === "s" || word[x] === "T"){
            newWord += "5";
        }else if(word[x] === "t" || word[x] === "T"){
            newWord += "7";
        }else{
            newWord += word[x];
        }
        return newWord;
}

result = leetSpeak("APPLE Apple");
console.log(result);