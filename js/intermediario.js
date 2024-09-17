
export default function cadastroParceiro(){
let nombre = document.querySelector(`[name="nome"]`)
let sobrenonme = document.querySelector(`[name="sobrenome"]`)
let placas = document.querySelector(`[name="placa"]`)
let modelos = document.querySelector(`[name="modelo"]`)


let dados = JSON.parse(localStorage.getItem("infos"));
if(dados == null){
    localStorage.setItem("infos", "[]");
    dados = [];
}

let auxilarReg = {
    nome: nombre.value,
    sobrenome: sobrenonme.value,
    placa: placas.value,
    modelo: modelos.value
}

dados.push(auxilarReg);
console.log(nome.value)
localStorage.setItem("infos",JSON.stringify(dados));


}

