// function calcular() {
//     const {idade, peso, altura} = valores();
//     const imc = calcularImc(peso, altura);
//     resultadoPlanoBasico(calculoPlanoBasico());
//     resultadoPlanoStandard(calucloPlanoStandard());
//     resultadoPlanoPremium(calculoPlanoPremium());
// }
// function calcularImc(peso,altura){
//     console.log(peso)
//     console.log(altura)
//     return peso / (altura * altura);
// }
// function valores(){
//     const idade = document.getElementById('idade').value;
//     const peso  = document.getElementById('peso').value;
//     const altura = document.getElementById('altura').value;
//     return{idade, peso, altura};
// }
// //   function calcularOperadoraA(idade, imc){
// //       const planoBasio = 100 +(idade * 10*(imc/10));
// //       const planoStandard = (150+(idade*15))*(imc/10);
// //       const planoPremium = (200 - (imc*10)+(idade*20))*(imc/10);
// //      return (planoBasio, planoStandard, planoPremium);
// //  }
// function calculoPlanoBasico(idade, imc){
//     const planoBasio = 100 +(idade * 10*(imc/10));
//     return planoBasio;
// }
// function calucloPlanoStandard(idade, imc){
//     const planoStandard = (150+(idade*15))*(imc/10);
//     return planoStandard;
// }
// function calculoPlanoPremium(idade, imc){
//     const planoPremium = (200 - (imc*10)+(idade*20))*(imc/10);
//     return planoPremium;
// }

// function resultadoPlanoBasico(calculoPlanoBasico){
//     document.getElementById('plano-basico').innerHTML = calculoPlanoBasico;
// }
// function resultadoPlanoStandard(calucloPlanoStandard){
//     document.getElementById('plano-standard').innerHTML = calucloPlanoStandard;
// }
// function resultadoPlanoPremium(calculoPlanoPremium){
//     document.getElementById('plano-premium').innerHTML = calculoPlanoPremium;
// }
