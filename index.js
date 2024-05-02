const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('quanto de xp você tem? ', xpPlayer => { 

    if (xpPlayer>0 && xpPlayer<=1000){
        console.log("Seu nivel é ferro")
    }
    else if( xpPlayer>0 && xpPlayer>=1001 && xpPlayer<=2000){
        console.log("Seu nivel é Bronze")
    }
    else if(xpPlayer>0 && xpPlayer>=2001 && xpPlayer<=5000){
        console.log("Seu nivel é Prata")
    }
    else if(xpPlayer>0 && xpPlayer>=5001 && xpPlayer<=7000){
        console.log("Seu nivel é Ouro")
    }
    else if(xpPlayer>0 && xpPlayer>0 && xpPlayer>=7001 && xpPlayer<=8000){
        console.log("Seu nivel é Platina")
    }
    else if(xpPlayer>0 && xpPlayer>=8001 && xpPlayer<=9000){
        console.log("Seu nivel é Ascendente")
    }
    else if(xpPlayer>0 && xpPlayer>=9001 && xpPlayer<=10000){
        console.log("Seu nivel é Imortal")
    }
    else if (xpPlayer>=10001 ) 
    {
        console.log("Seu nivel é platina")
    }
    else if (xpPlayer<=0)
    {
        console.log("valor invalido")
    }

console.log("Aperte Ctrl+C para para o progama")
  });
  


/*let xpPlayer = 5100

if (xpPlayer>0 && xpPlayer<=1000){
    console.log("Seu nivel é ferro")
}
else if( xpPlayer>=1001 && xpPlayer<=2000){
    console.log("Seu nivel é Bronze")
}
else if(xpPlayer>=2001 && xpPlayer<=5000){
    console.log("Seu nivel é Prata")
}
else if(xpPlayer>=5001 && xpPlayer<=7000){
    console.log("Seu nivel é Ouro")
}
else if(xpPlayer>=7001 && xpPlayer<=8000){
    console.log("Seu nivel é Platina")
}
else if(xpPlayer>=8001 && xpPlayer<=9000){
    console.log("Seu nivel é Ascendente")
}
else if(xpPlayer>=9001 && xpPlayer<=10000){
    console.log("Seu nivel é Imortal")
}
else if (xpPlayer>=10001 ) 
{
    console.log("Seu nivel é platina")
}
else if (xpPlayer<=0)
{
    console.log("valor invalido")
}
*/