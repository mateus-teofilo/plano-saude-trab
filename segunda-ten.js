function calcular(){
    const {idade, peso, altura} = valores();
    const resultadoIMC = imc(peso, altura);
    const resultadoPlanoBasico = 100 +(idade * 10*(resultadoIMC/10));
    const resultadoPlanoStandard = (150+(idade*15))*(resultadoIMC/10);
    const resultadoPlanoPremium = (200 - (resultadoIMC*10)+(idade*20))*(resultadoIMC/10) ;
    planoBasicoResult(resultadoPlanoBasico.toFixed(2))
    planoPremiumResult(resultadoPlanoStandard.toFixed(2))
    planoStandardResult(resultadoPlanoPremium.toFixed(2))

}
function valores(){
    const idade = document.getElementById('idade').value;
    const peso  = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    return{idade, peso, altura};
}
function imc(peso, altura){
    const imc = peso / (altura * altura)
    return imc
}
// function planoBasico(idade, imc){
//     const planoBasico = 100 +(idade * 10*(imc/10));
//     return (planoBasico);
// }
// function planoStandard(idade, imc){
//     const planoStandard = (150+(idade*15))*(imc/10);
//     return (planoStandard);
// }
// function planoPremium(idade, imc){
//     const planoPremium = (200 - (imc*10)+(idade*20))*(imc/10);
//     return (planoPremium);
// }
function planoBasicoResult(resultadoPlanoBasico){
    document.getElementById('result-planos').innerHTML = resultadoPlanoBasico;
}
function planoStandardResult(resultadoPlanoStandard){
    document.getElementById("plano-premium").innerHTML = resultadoPlanoStandard;
}
function planoPremiumResult(resultadoPlanoPremium){
    document.getElementById("plano-standard").innerHTML = resultadoPlanoPremium;
}   