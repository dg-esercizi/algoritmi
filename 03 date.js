// manipolare le date e le ore è un compito ricorrente nella programmazione
// ogni nazione ha il suo modo di esprimerle
// vogliamo scrivere un programma che scriva il giorno e l'ora corrente
// in formato Friday, 10:30PM

// leggiamo data e ora corrente
let adesso = new Date()
console.log(adesso)

// leggiamo il numero del giorno (da 0 a 6, dove 0 è domenica)
var day = adesso.getDay()
console.log(day)

// preparo un array con l'elenco dei giorni
const listaGiorni = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

// mostro il nome del giorno corrente
console.log('Today is: ' + listaGiorni[day] + '.')

// leggo ora e minuti
let ora = adesso.getHours()
let minuti = adesso.getMinutes()

// se l'ora è maggiore di 12 sottraggo 12 e aggiungo PM
let suffisso = (ora >= 12) ? 'PM' : 'AM'
ora = (ora >= 12) ? ora - 12 : ora

// gestiamo i casi particolari in cui l'ora è zero
if(ora == 0 && suffisso == 'PM') {
    if(minuti == 0) {
        ora = 12
        suffisso = ' afternoon'
    }
    else {
        ora = 12
        suffisso = 'PM'
    }
}

console.log(ora + ':' + minuti + suffisso)