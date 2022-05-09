function getDadosAluno() {
  let nome = document.getElementById('nome');
  let ra = document.getElementById('ra');
  let num1 = document.getElementById('num1');
  let num2 = document.getElementById('num2');
  let res = document.getElementById('res');
  let igualdade = (num1==num2);
  let identico = (num1===num2);
  let diferente = (num1!=num2);
  let menor = (num1<num2);
  let maior = (num1>num2);
  let menorIgual = (num1<=num2);
  let maiorIgual = (num1>=num2);

  if (nome.value.length == 0 ||
    ra.value.length == 0 ||
    num1.value.length == 0 ||
    num2.value.length == 0) {
    res.innerHTML = 'ERRO! Faltam dados.'
  } else {
    res.innerHTML = 
    `
      ${nome.value}, RA: <b>${ra.value}</b></br>
      Números digitados:</br>
      Num1: <b>${num1.value}</b></br>
      Num2: <b>${num2.value}</b></br>
      <hr>
      Igualdade: <b>${igualdade}</b></br>
      Idêntico: <b>${identico}</b></br>
      Diferente: <b>${diferente}</b></br>
      Menor: <b>${menor}</b></br>
      Maior: <b>${maior}</b></br>
      Menor ou Igual: <b>${menorIgual}</b></br>
      Maior ou Igual: <b>${maiorIgual}</b>
    `
  }
}
