function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var txtano = document.getElementById('txtano')
    

    if (txtano.value.length == 0 || Number(txtano.value) > ano) { //Se o valor do input for vazio ou maior que ano atual:
        alert('Verique os dados e tente novamente!')
    }
    else {
        var radsex = document.getElementsByName('radsex')
        var idade = ano - Number(txtano.value)  //ano atual menos o valor digitado no input
        var genero = ''
        var img = document.createElement('img')
        

        if (radsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', './imagens/bebehomem.jpg') //criança
            }
            else if (idade < 20) {
                img.setAttribute('src', './imagens/jovemhomem.jpg') //jovem
            }
            else if (idade < 50) {
                img.setAttribute('src', './imagens/homemadulto.jpg') //adulto
            }
            else {
                img.setAttribute('src', './imagens/idoso.jpg') //idoso
            }
            centro(`Detectamos um ${genero} com ${idade} anos.`, img)
        }

        else if (radsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', './imagens/bebemulher.jpg') //criança
            }
            else if (idade < 20) {
                img.setAttribute('src', './imagens/jovemmulher.jpg') //jovem
            }
            else if (idade < 50) {
                img.setAttribute('src', './imagens/mulheradulta.jpg') //adulto
            }
            else {
                img.setAttribute('src', './imagens/idosa.jpg') //idoso
            }

            centro(`Detectamos uma ${genero} com ${idade} anos.`, img)
        }
        
        else {
            alert('Você precisa escolher um sexo!')
        }
    }
}

function centro(msg, img) {
    resultado.innerHTML = `${msg}`
    resultado.appendChild(img)
}