// Leetspeak
// Write a function leetspeak which is given a string, and returns the leetspeak equivalent of the string. To convert text to its leetspeak version, make the following substitutions:
// A => 4   E => 3    G => 6    I => 1    O => 0   S => 5   T => 7

function leetSpeak(word){
    if(word.includes("A")){
        word.replace("A", "4");
    }else if(word.includes("E")){
        word.replace("E", "3");
    }else if(word.includes("G")){
        word.replace("G", "6");
    }else if(word.includes("I")){
        word.replace("I", "1");
    }else if(word.includes("O")){
        word.replace("O", "0");
    }else if(word.includes("S")){
        word.replace("S", "5");
    }else if(word.includes("T")){
        word.replace("T", "7");
    }return word;
}
result = leetSpeak("LEET");
console.log(result);