 
let idade=parseInt(window.prompt("Qual a sua idade?"))
if(isNaN(idade)){
     alert("Por favor, insira um número válido.")
}else if(idade>=12 && idade <= 17){
    alert("Você precisa da autorização de seu responsavel para entrar")
}else if (idade<=0){
    alert("Valor incorreto")
}else if(idade>=18)  {
    alert("Você tem acesso liberado, pode entrar")    
}else{
    alert("Você só poderá entrar acompanhado(a) de seu responsável")
}    
