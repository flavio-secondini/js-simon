// genero 5 numeri casuali da mostrare all'utente per 5 secondi
$(document).ready(function () {
  randomNumbers(5, 1000)
  setTimeout(function () {
    $("#numeri-generati").hide()
    $("#linea-1").hide()
    // dopo averli nascosti, inizio il countdown di 30 secondi
    var timer = 30
    var countdown = setInterval(function () {
      $("#countdown").html(timer)
      timer--
      if (timer === -1) {
        $("#linea-2").hide()
        clearInterval(countdown)
        // vedi funzione
        questions()
      }
    }, 1000)
  }, 5000)
})

// variabili che devo richiamare al di fuori delle funzioni
var numeriRandom = []
var numeriRandomLista = []
var risposteEsatte = []

// FUNZIONI

function randomNumbers(quantity, max) {
  // genero 5 numeri casuali
  for (var i = 0; i < quantity; i++) {
    numeriRandom.push(+ (Math.floor(Math.random() * max) + 1))
  }
  // li stampo nell'html
  for (var i = 0; i < numeriRandom.length; i++) {
    numeriRandomLista.push("<li>" + numeriRandom[i] + "</li>")
  }
  $("#numeri-generati").html(numeriRandomLista)
  console.log(numeriRandom);
}

function questions() {
  for (var i = 0; i < 5; i++) {
    // chiedo 5 numeri all'utente
    var risposta = parseInt(prompt("inserisci uno dei numeri"))
    // per ogni numero, se è esatto, lo conto in una lista
    if (numeriRandom.includes(risposta)) {
      risposteEsatte.push(risposta)
    }
  }
  // mostro di nuovo la lista dei numeri all'utente
  $("#numeri-generati").show()
  // comunico quante e quali sono le risposte esatte
  alert("Hai indovinato i numeri: " + risposteEsatte + " per un totale di " + risposteEsatte.length + " risposte esatte.")
}
