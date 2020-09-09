//print a box

let print = "*"
let space = " ";

function printBox(width, height){
    for(let i = 1; i <=height; i++){
        if (i === 1 || i === height){
            console.log(print.repeat(width));
        }else{
            console.log(print + space.repeat(width-2) + print);
        }
    }
}
printBox(6, 10);