// scrivere un programma che, dato un codice, aggiunga il primo carattere
// del codice all'inizio e alla fine
// ad es. se il codice è FGNTY
// deve restituire FFGNTYF

function front_back(codice) {
    // estraggo il primo carattere: parte da 0 e prende 1 carattere
    // substring(posizionePartenza, quantiCaratteri)
    // "BDSGHSDDS".substring(2, 3) => SGH 
    primo = codice.substring(0, 1)

    return primo + codice + primo
}

console.log(front_back('CARRO'))