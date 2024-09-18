

function atualizar() {
  let nome = ["Vitor Andreola","Lucas Bezzera","Pedro Souza","Lucas Simionato","Vitor Criminal"]
  let placa = ["HBD-1124","FGK-0099","QWE-5566","ZXC-8866","DFG-1349","UIO-7766"]
  let modelo = ["CG 150 Fan Flex","HONDA ADV","PCX","FORZA 350","CG 160 START"]
  let tabela = document.getElementById("tabela");
  const n = nome.keys()
for (let i of n) {
  let newI = document.createElement("tr");
  tabela.appendChild(newI);
  let newL = document.createElement("tr");
  tabela.appendChild(newL);
  
  newI.innerHTML += `<td ><img src="img/capacete.png" alt="moto" /></td>
                    <td id="nome">${nome[i]}<summary>entregas realizadas:297</summary></td>
                    <td id="placa">${placa[i]}<summary>${modelo[i]}</summary></td>`;
}

}