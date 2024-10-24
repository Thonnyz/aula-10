function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'

    cartao.innerHTML = `
    <div class="cartao__conteudo">
    <h3>${categoria}</h3>
    <div class="cartao__conteudo__pergunta">
        <p>${pergunta}</p>
    </div>
    <div class="cartao__conteudo__resposta">
        <p>${resposta}</p>
    </div>
    </div>
    `

    let respostaEstaVisivel = false

    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel
        cartao.classList.toggle('active', respostaEstaVisivel)
    }
    cartao.addEventListener('click', viraCartao)


    container.appendChild(cartao)

}
criaCartao(
    'Português',
    'Quantas letras tem o alfabeto?',
    '26'
)

criaCartao(
    'Geografia',
    'Quantos Países exitem no mundo?',
    '193'
)

criaCartao(
    'Curiosidades',
    'Quando a internet foi criada?',
    'A internet surgiu, na década de 1960, como uma rede (chamada Arpanet)'
)

criaCartao(
    'Leitura',
    'Qual o livro mais vendido do mundo?',
    'A Bíblia'
)