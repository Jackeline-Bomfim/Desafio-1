const modalReceita = document.querySelector('.modal-receita')
const acessadas = document.querySelectorAll('.foto')

for (let foto of acessadas){
    foto.addEventListener("click", function(){
        const imagemID = foto.getAttribute("id")        
        modalReceita.classList.add('ativo')
        modalReceita.querySelector("img").src=`_img/${imagemID}`
    })
}

document.querySelector(".botao").addEventListener("click", function(){
    modalReceita.classList.remove('ativo')
})