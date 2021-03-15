// genero 5 numeri casuali da mostrare all'utente per 5 secondi
$(document).ready(function () {
  randomNumbers(5, 1000)
  setTimeout(function () {
    alert("ok")
  }, 5000)
})


// dopo 30 secondi chiedo di inserire i 5 numeri
// stampo quanti e quali numeri sono stati indovinati


// FUNZIONI
function randomNumbers(quantity, max) {
  var numeriRandom = []
  for (var i = 0; i < quantity; i++) {
    numeriRandom.push('<li>' + (Math.floor(Math.random() * max) + 1) + '</li>')
  }
  $("#numeri-generati").html(numeriRandom)
}
