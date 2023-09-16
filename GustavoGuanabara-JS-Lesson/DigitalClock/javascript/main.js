function carregar() {
    var img = document.getElementById('imagem');
    var rodape = document.getElementById('rodape');
    var msg = document.getElementById('msg')
    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes();
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`


    if (hora >= 0 && hora <= 12) {
        img.src = "./imagens/manhã.jpg"
        rodape.innerHTML = `Bom dia!`
        document.body.style.background = '#e2cd9f'
    }

    else if (hora >= 12 && hora <= 18) {
        img.src = "./imagens/tarde.jpg"
        rodape.innerHTML = `Boa tarde!`
        document.body.style.background = '#b8946f'
    }

    else {
        img.src = "./imagens/noite.jpg"
        rodape.innerHTML = `Boa noite!`
        document.body.style.background = '#515154'
    }
}