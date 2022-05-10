function calc(num1, num2){
    input = prompt("Digite a operação que deseja realizar: ");
    if(input == "+"){
        return console.log(num1 + num2);
    }
    else if(input == "-"){
        return console.log(num1 - num2);
    }
    else if(input == "*"){
        return console.log(num1 * num2);
    }
    else if(input == "/"){
        return console.log(num1 / num2);
    }
    else{
        console.log("A operação que você digitou não está nos parâmetros aceitos");
    }
}

num1 = Number(prompt("Digite um número: "))
num2 = Number(prompt("Digite outro número: "))

calc(num1, num2)