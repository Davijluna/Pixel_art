let black = document.querySelector('.black');
let blue = document.querySelector('.blue');
let green = document.querySelector('.green');
let yellow = document.querySelector('.yellow');

// function selector(event){
//     const itemselector = document.querySelector(".selected");
//     itemselector.classList.remove('selected');
//     event.target.classList.add('selected');
// }
let cores = ['black','blue','yellow','green']

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





// function trocaCor(event){
//     let corAntiga =document.querySelector('.selected')
//     corAntiga.classList.remove('')
// }

// cores.addEventListener("click",trocaCor)
let tamanho = 5

function gerarBoard(tamanho){
    let variavel= document.querySelector('#pixel-board')
    for(let index=0;index < tamanho;index+=1){
        //Aqui eu crio as lindhas
        let q = document.createElement('div');
        variavel.appendChild(q);
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

function evento(event){
    // const selectInt = document.querySelector(".selected");
    // selectInt.classList.remove('selected');
    // event.target.classList.add('selected');

}
let Position2 = document.querySelector('#pixel-board').childNodes
    Position2.className ='selected';

let pixel2 = document.querySelector('#pixel-board')
pixel2.addEventListener('click',function (eventpixels) {

    let selected =document.querySelector('.selected');
    
       let color=selected.style.backgroundColor;
        eventpixels.target.style.backgroundColor=color;

})
