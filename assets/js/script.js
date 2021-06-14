//Prevenir formulário de ser enviado
const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    e.preventDefault(); //Evita que o formulário seja enviado
    const inputPeso = e.target.querySelector('#peso'); //recuperando o campo 'peso'
    const inputAltura = e.target.querySelector('#altura'); //recuperando o campo 'altura'
    
    const peso = Number(inputPeso.value); //recuperando dado do campo 'peso'
    const altura = Number(inputAltura.value); //recuperando dado do campo 'altura'
    
    //Verificando se o campo está preenchido com Numbers
    if(!peso) {
        setResultado('Peso Inválido', false);
        return;
    }
    if(!altura) {
        setResultado('Altura Inválida', false);
        return;
    }
    //Atrubuindio o calculo do imc em uma variável
    const imc = getImc(peso, altura);
    //Atribuindo o nivel do imc em uma variável
    const nivelImc = getNivelImc(imc);
    //Atribuindo a msgm de exibição em uma variável
    const msg = `Seu IMC é ${imc} (${nivelImc}).`;

    setResultado(msg, true);
});
//Lógica para pegar o nivel do imc
function getNivelImc(imc) {
    const nivel = 
    ['Abaixo do peso', 'Peso normal', 
    'Sobrepeso', 'Obesidade grau 1', 
    'Obesidade grau 2', 'Obesidade grau 3'];

    if(imc >= 39.9) return nivel[5];
    
    if(imc >= 34.9) return nivel[4];
    
    if(imc >= 29.9) return nivel[3];
    
    if(imc >= 24.9) return nivel[2];
    
    if(imc >= 18.5) return nivel[1];
    
    if(imc < 18.5)  return nivel[0];
    
}

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2)
}

//Criar paragráfo HTML
function criaP() {
    const p = document.createElement('p');
    return p;
}
//Mostrar o resultado na div 'result'
function setResultado(msg, isValid) {
    const result = document.getElementById('result');
    result.innerHTML = '';

    const p = criaP();

    if(isValid) {
        p.classList.add('paragrafo-resultado');
    }else {
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    result.appendChild(p);
};