let black = document.querySelector('.black');
let blue = document.querySelector('.blue');
let green = document.querySelector('.green');
let yellow = document.querySelector('.yellow');


const elementoPai = document.querySelector('.pixel-board');
const cores = ['black','blue','yellow','green']
/*
Tive ajuda do Guilherme Frenandez na logica, Guilherme na sala de estudos 
Ele me ajodou explicando sobre os elementos pai e os elementos filhos  
    A orientação foi da linha 15 a 20 
*/
function criarPaleta(array){
    let paletaDeCores = document.getElementById("color-palette"); // recebendo id do HTML.

    for(let index=0;index < array.length;index += 1){

       let div = document.createElement('div');  //let 'div' recebendo as divs
        paletaDeCores.appendChild(div);// sem ""// dando filhos para o pai 
        div.className ='color'; //colocou o nome color para as class
        div.style.backgroundColor=array[index]; // foi em cada indice e colocou as cores nas divs
    }
}
/**
 * tive ajuda de Guilherme Palma para entender sobre elementos pais e elementos filhos.
 * na linha 31 
 * e sobre event na função anônima com event target
 */
criarPaleta(cores);

    let pretaPosition = document.querySelector('#color-palette').childNodes[1]
        pretaPosition.className ='color selected';

    let paletaDeCores = document.querySelector("#color-palette"); // variavel receben a id color-palette
    paletaDeCores.addEventListener('click',
        function (event) // função para agir ao click.

{ // acionando a função event com click
    let selecionar = document.querySelector('.selected');
    selecionar.classList.remove('selected') // removendo a class selecionada
   if(event.target.className === 'color'){
    event.target.className ='color selected';
   }
    
})

const tamanho = 5
// tive ajuda do tiago na mentoria,explicando a logica do exercicio e separando etapa por etapa.
function gerarBoard(tamanho){
    let variavel= document.querySelector('#pixel-board')
    for(let index=0;index < tamanho;index+=1){
        //Aqui eu crio as lindhas
        let divDePixel = document.createElement('div');
        variavel.appendChild(divDePixel);                              // colocar nomes nas variaveis
        divDePixel.className ='pixel';
        for(let contador=0;contador < 4; contador+=1){
        // Aqui eu crio um pixelva
        let divDePixel = document.createElement('div');
        variavel.appendChild(divDePixel)
        divDePixel.className = 'pixel';

        }
        // Agora eu coloco a minha linha dendro do board
    }
}
gerarBoard(tamanho);


let Position2 = document.querySelector('#pixel-board').childNodes
    Position2.className ='selected';

let pixel2 = document.querySelector('#pixel-board')
pixel2.addEventListener('click',function (eventpixels) {

    let selected =document.querySelector('.selected');
    
       let letColor =selected.style.backgroundColor;
        eventpixels.target.style.backgroundColor = letColor;

})
/**
 * A linha 82 83 e 83 tive sugestão de Leo Barbosa para colocar dentro de uma função 
 *
 */
const botaoLimpar = document.querySelector('#clear-board');

function limpar() {
    botaoLimpar.addEventListener('click', function(){
    let cor = document.querySelectorAll('.pixel');
    for(let index = 0; index < cor.length;index +=1){
        cor[index].style.backgroundColor = 'white';
    }
    
        
});
}
    limpar();
