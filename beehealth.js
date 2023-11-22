function calcular() {
    const {idade, peso, altura} = valores();
    const imc = calcularImc(peso, altura);
    const calculoOperadoraA = calcularOperadoraA(idade, imc);
    setResult(calculoOperadoraA);
}

function calcularImc(peso,altura){
    return peso / (altura * altura);
}
function valores(){
    const idade = document.getElementById('idade').value;
    const peso  = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    return(idade, peso, altura);
}
function calcularOperadoraA(idade, imc){
    const planoBasio = 100 +(idade * 10*(imc/10));
    const planoStandard = (150+(idade*15))*(imc/10);
    const planoPremium = (200 - (imc*10)+(idade*20))*(imc/10);
    return (planoBasio, planoStandard, planoPremium);
}
function setResult(calculoOperadoraA){
    document.getElementById('resultado').innerHTML = calculoOperadoraA;
}
