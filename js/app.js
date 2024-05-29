function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = document.getElementById(`img-${id}`);
    let botao = document.getElementById(`btn-${id}`);

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
    }
}