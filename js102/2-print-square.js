// print a square

function printSquare(num){
    let print = "*";
    print = print.repeat(num);
    
    for(let i = 0; i < num; i++ ){
        console.log(print);
    
    }
}

printSquare(5);
