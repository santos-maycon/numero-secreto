// ---------- Exercício 1 e 2 ---------- // 

function comprimentarUser(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML= texto;
    
}

comprimentarUser('h1', 'Atividades Complementares');
comprimentarUser('p', 'Qual o seu nome?');

function receberNome() {
    let resposta = document.querySelector('input').value;
    console.log(`E aí ${resposta}.`);
}

// ---------- Exercício 3 e 4 ---------- // 

function receberNumero(a,b,c) {
    return (a+b+c)/3;
};

a = prompt('digite um número.')
b = prompt('digite um número.')
c = prompt('digite um número.')


var media = receberNumero(a, b, c);
console.log(media);

// ---------- Exercício 5 ---------- //

function comparacao(a, b) {
    if (a > b) {
        console.log(a);
    }    else {
        console.log(b);
    }
}
a = prompt('digite um número.')
b = prompt('digite um número.')

comparacao(a, b)

// ---------- Exercício 5 ---------- //
function raizQuadrada(numero) {
    return numero*numero;
}
numero = prompt('digite um número');
var resultado = raizQuadrada(numero);
console.log(resultado);


// ---------- Exercício 6 ---------- //

function calculoIMC(peso, altura){
   // altura = parseFloat(altura / 100);
    var indiceMassaCorporal = peso/(altura*altura);
    return indiceMassaCorporal;
};
var peso = prompt(`Qual o seu peso?`);
var altura = prompt(`Qual a sua altura?`);
    
var indiceMassaCorporal = calculoIMC(peso, altura);
console.log(`O seu IMC é ${indiceMassaCorporal}`)


// ---------- Exercício 7 ---------- //

var numero = prompt("Digite um número para fatorar.");
function fatorarNumero() {
    while (numero > 0 ) {
        console.log(numero);
        numero--;        
    }
}; 
console.log(fatorarNumero());


// ---------- Exercício 8 ---------- //

function conversorMoeda() {
    var real = dolar / 4.80;
    return real;
}
var dolar = prompt('Qual o valor a ser convertido?')
console.log(`Você terá R$${conversorMoeda()}, após a conversão.`);


// ---------- Exercício 9 e 10 ---------- //

function calculoSala(b, l, raio) {
    perimetroRetangulo = (2*b)+(2*l);
    areaRetangulo = b*l;   
    perimetroCirculo = 2*3.14*raio;
    areaCirculo = 3.14*(raio*raio);
};

resposta = prompt ("Vamos calcular um circulo ou um retangulo? ");
if (resposta == "circulo") {
    raio = prompt("Qual o raio do circulo?");
    calculoSala(0,0,raio);
    alert(`A Área é ${areaCirculo}m³ e o Perímetro é ${perimetroCirculo}m`);
} else {
    l = prompt("Qual a altura retangulo?");
    b = prompt("Qual a largura retangulo?");
    calculoSala(b, l);
    alert(`A Área é ${areaRetangulo}m² e o Perímetro é ${perimetroRetangulo}m`);
};


// ---------- Exercício 11 ---------- //


function tabuada(b) {
    for(i = 1; i<=10; i++){
        console.log(`${b} x ${i} = ${b * i}`);
    }
}

b = prompt("Digite um número");
tabuada(b);