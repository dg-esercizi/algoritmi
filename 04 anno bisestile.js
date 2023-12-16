// definiamo una funzione che verifica se l'anno dato è bisestile
// % calcola il resto della divisione
// 130 % 100 = 30
// 100 % 100 = 0
// 200 % 100 = 0
function bisestile(anno) {
    return (anno % 100 == 0) ? (anno % 400 == 0) : (anno % 4 == 0)
}

console.log(bisestile(2024))
console.log(bisestile(2100))
console.log(bisestile(2400))