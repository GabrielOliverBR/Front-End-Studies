//Aqui estou criando uma variavel constante buscando o elemento 'turnOn e turnOff' no documento através do 'id'
const  turnOn = document.getElementById ( 'turnOn' );
const  turnOff = document.getElementById ( 'turnOff' );

//Aqui estou criando uma variável constante para a imagem e buscando no documento através do 'id'
const lamp = document.getElementById ( 'lamp' );

function isLampBroken () {                     //Esta função está retornando o elemento 'lamp' pelo src
    return lamp.src.indexOf ('quebrada') > -1 //adicionando a imagem quando o resultado for maior que -1
}

function lampOn () {                  //A função lampOn está atribuindo a imagem 'ligada.png'
    if ( !isLampBroken () ) {        //Se a lampada não estiver quebrada = 
    lamp.src = './img/ligada.jpg';  // ao documento através do elemento 'lamp' 
    }
}
function lampOff () {                   //A função lampOff está atribuindo a imagem 'desligada.png'
    if ( !isLampBroken () ) {          //Se a lampada não estiver quebrada =    
    lamp.src = './img/desligada.jpg'; // ao documento através do elemento 'lamp' 
    }
}

function lampbroken () {              //A função lampbroken está atribuindo a imagem 'quebrada.png'
    lamp.src = './img/quebrada.jpg';  // ao documento através do elemento 'lamp'
}

turnOn.addEventListener ( 'click', lampOn ); //Aqui estou adicionando um evento, caso o 'turnOn' seja acionado, execute o 'lampOn'
turnOff.addEventListener( 'click', lampOff);//Aqui estou adicionando um evento, caso o 'turnOff' seja acionado, execute o 'lampOff'
lamp.addEventListener ( 'mouseover', lampOn);//Aqui estou adicionando o evento caso o mouse passe por cima, 'lampOn'
lamp.addEventListener( 'mouseleave', lampOff);//Aqui estou adicionando o evento caso o mouse saia de cima, 'lampOff'
lamp.addEventListener( 'dblclick', lampbroken);//Aqui estou adicionando o evento caso doubleclick, 'lampbroken'