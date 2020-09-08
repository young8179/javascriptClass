function hello(name){
    return "Hello ${name}";
}

function hello(name){
    if(name == ""){
        return "Hello World";
    }else{
        return 'Hello ${name}';
    }
}

console.log(hello("heeyoung"));