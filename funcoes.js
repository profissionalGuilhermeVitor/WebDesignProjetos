function nomedaFuncao(){ //Cria um bloco com linhas já definidas
    window.alert("Mensagem 1")
    window.alert("Mensagem 2")
}

nomedaFuncao() // Chama as linhas

function nomedaFuncao2(palavra){ //Cria um bloco com parâmetro palavra
    window.alert(palavra)
    window.alert("Mensagem 2")
}

nomedaFuncao2("Oi") // Chama as linhas com argumento "Oi"

function nomedaFuncao3(variavel){ //Cria um bloco com linhas já definidas
    return variavel
}

let num = nomedaFuncao3(2) // Retorna valor e coloca em num