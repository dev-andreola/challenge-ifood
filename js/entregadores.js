import { nombre, placas, modelos } from "./intermediario.js";

function atualizar() {
  dados;
  var tabela = document.getElementById("tabela");

  for (let i = 0; i < n; i++) {
    var n = i + 1;
    let newI = document.createElement("tr");
    tabela.appendChild(newI);
    let newL = document.createElement("tr");
    tabela.appendChild(newL);
    newI.innerHTML = `<td id="nome">${nombre.value}<summary>entregas realizadas:297</summary></td>`;
    newL.innerHTML = `<td id="placa">${placas.value}<summary>${modelos.value}</summary></td>`;
  }
}
