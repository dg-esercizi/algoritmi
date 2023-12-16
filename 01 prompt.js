// carico il pacchetto prompt-sync, che ci restituisce una function()
const chiedi = require('prompt-sync')()

// adesso ho a disposizione una funzione chiedi() da usare a mio piacimento:
let nome = chiedi('Come ti chiami? ')

// la risposta dell'utente viene memorizzata nella variabile nome:
console.log('Ciao ' + nome)

// prompt-sync restituisce sempre una stringa,
// se chiedo un numero devo convertirla con Number()
let età = Number(chiedi('Quanti ani hai? '))

// la battuta della seconda elementare:
console.log('Ahahahah hai ' + età + ' culi!!!!!')

// Abbiamo così creato una versione rudimentale di una ChatGPT demente