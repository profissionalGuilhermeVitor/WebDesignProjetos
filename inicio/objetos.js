//Objetos são representações de elementos fora do computador

let xo = {
    nome:"Ana",
    rua:"Armando Maciel",
    numero:15,
    idade:29,
    trabalha:false,
    nomeCompleto:function(){
        return this.numero + " "+ this.rua
    }
}

document.write(xo.nomeCompleto())