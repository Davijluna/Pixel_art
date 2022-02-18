let black = document.querySelector('.black');
let blue = document.querySelector('.blue');
let green = document.querySelector('.green');
let yellow = document.querySelector('.yellow');

const cores = ['black','blue','yellow','green']
/*
Tive ajuda do Guilherme Frenandez na logica do Guilherme na sala de estudos 
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
criarPaleta(cores);

    let pretaPosition = document.querySelector('#color-palette').childNodes[3]
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

let tamanho = 5
// tive ajuda do tiago na mentor,explicando a logica do exercicio e separando etapa por etapa.
function gerarBoard(tamanho){
    let variavel= document.querySelector('#pixel-board')
    for(let index=0;index < tamanho;index+=1){
        //Aqui eu crio as lindhas
        let q = document.createElement('div');
        variavel.appendChild(q);                              // colocar nomes nas variaveis
        q.className ='pixel';
        for(let contador=0;contador < 4; contador+=1){
        // Aqui eu crio um pixelva
        let q = document.createElement('div');
        variavel.appendChild(q)
        q.className = 'pixel';

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
    
       let color=selected.style.backgroundColor;
        eventpixels.target.style.backgroundColor=color;

})
