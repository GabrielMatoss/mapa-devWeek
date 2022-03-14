/*Quando clicar no pokémonn da listagem temos que esconder o cartao do pokémon aberto e mostrar o cartão correspondente ao que foi selecionado na listagem

para isso vamos precisar trabalhar com dois elementos:
1 - Listagem
2 - Cartão pokémon


//precisamos criar duas variáveis no JS para trabalhar com os elementos da tela


- Remover a classe "aberto" só do cartão que está aberto
- Ao clicar em um pokémon da listagem, pegaremos o id dele para saber qual cartao mostrar
- Depois remover a classe ativa que marca o pokémon selecionado
- Adicionar a classe ativo no item da lista selecionado
*/

// Precisamos criar duas variáveis no JS para trabalhar com os elementos da tela

const listaSelecaoPokemons = document.querySelectorAll(".pokemon")
const pokemonsCard = document.querySelectorAll(".cartao-pokemon")

//teriamos que criar um evento para cada item da lista, e podemos usar o método forEach para isso que significa "para cada" entao para cada item da listaSelecaoPokemons, podemos iterar na lista, e só funciona se for um nodeList, temos que iterar nessa lista toda e colocar um evento de clique em todos eles.
//começaremos no pikachu e vai acabar no dragonite, e ai executamos uma função para cada item dessa listagem
//cada item da lista é o pokemon 
listaSelecaoPokemons.forEach(pokemon => {
    //vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de pokémons
    pokemon.addEventListener("click", () => {
        //remover a classe aberto só do cartão que está aberto
        const cartaoPokemonAberto = document.querySelector(".aberto")
        cartaoPokemonAberto.classList.remove("aberto")

        //Ao clicar em um pokémon da listagem, pegaremos o id dele para saber qual cartao mostrar
       const idPokemonSelecionado = pokemon.attributes.id.value

       const idDoCartaoPokemonParaAbrir = "cartao-" + idPokemonSelecionado //aqui mostramos o id do cartao
       const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
       cartaoPokemonParaAbrir.classList.add("aberto")

       // remover a classe ativa que marca o pokémon selecionado

       const pokemonAtivoNaListagem = document.querySelector(".ativo")
       pokemonAtivoNaListagem.classList.remove("ativo")

       // Adicionar a classe ativo no item da lista selecionado
       const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
       pokemonSelecionadoNaListagem.classList.add("ativo")
    })
})