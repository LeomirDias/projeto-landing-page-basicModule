//Criar variáveis
var setaEsquerda = window.document.getElementById("seta-esquerda")
var cardLeonardo = window.document.getElementById("card-leonardo")
var cardSamantha = window.document.getElementById("card-samantha")
var cardBruna = window.document.getElementById("card-bruna")
var setaDireita = window.document.getElementById("seta-direita")
//Criar funções
function RolarParaDireita(){
    cardLeonardo.style="display:none"
    cardBruna.style="display:flex"
}
function RolarParaEsquerda(){
    cardLeonardo.style="display:flex"
    cardBruna.style="display:none"
}
