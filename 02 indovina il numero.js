const chiedi = require('prompt-sync')({sigint: true})

// scelgo un numero a caso tra 1 e 10
let numeroDaIndovinare = Math.floor(Math.random() * 10) + 1
// Math.random() restituisce un numero casuale tra 0 e 1, ad esempio 0.2352355232677
// quindi lo moltiplichiamo per 10 e otteniamo ad esempio 23.52455232677
// poi togliamo la parte dopo la virgola con floor e otteniamo ad esempio 2
// e infine sommiamo 1 in modo che il numero non vada da 0 a 9, ma da 1 a 10

// definiamo un flag (bandierina) che dice se il numero è stato indovinato
let indovinato = false

// apriamo un ciclo while (finché) che ripete la domanda all'utente
// finché questo non indovina il numero
while(!indovinato) {
    let numeroInserito = Number(chiedi('Indovina un numero tra 1 e 10... '))

    if(numeroInserito == numeroDaIndovinare) {
        console.log('Congratulazioni bro, you got it!')
        indovinato = true
    }
    else {
        console.log('Mi dispiace bro, guess again!')
    }
}