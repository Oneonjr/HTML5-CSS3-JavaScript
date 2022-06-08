function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >=0 && hora < 12){
        img.src = 'img/foto-manha.png'
        document.body.style.background = '#F2AF5C'
    }else if (hora >= 12 && hora <= 18){
        img.src = 'img/foto-tarde.png'
        document.body.style.background = '#A7D5F2'
    }else{
        img.src = 'img/foto-noite.png'
        document.body.style.background = '#8C72A6'
    }
}
