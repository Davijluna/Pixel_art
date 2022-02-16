// let black = document.querySelector('.black');
// let blue = document.querySelector('.blue');
// let green = document.querySelector('.green');
// let yellow = document.querySelector('.yellow');

// function selector(event){
//     const itemselector = document.querySelector(".selected");
//     itemselector.classList.remove('selected');
//     event.target.classList.add('selected');
// }
let cores = ['black','blue','yellow','green']
function criarPaleta(array){
    let paletaDeCores = document.getElementById("color-palette"); // recebendo id do HTML.
    for(let index=0;index < array.length;index += 1){
       let div = document.createElement('div');  //let 'div' rebendo as divs
        paletaDeCores.appendChild(div);// sem ""// dando filhos para o pai 
        div.className ='color'; //colocou o nome color para as class
        div.style.backgroundColor=array[index]; // foi em cada indice e colocou as cores nas divs
    }
}
criarPaleta(cores);

let pretaPosition = document.querySelector('#color-palette').childNodes[3]
pretaPosition.className ='color selected';

let paletaDeCores = document.querySelector("#color-palette"); // variavel receben a id color-palette
paletaDeCores.addEventListener('click',function (event) {
    let selecionar = document.querySelector('.selected');
    selecionar.classList.remove('selected')
   if(event.target.className === 'color'){
    event.target.className ='color selected';
   }
    
})

