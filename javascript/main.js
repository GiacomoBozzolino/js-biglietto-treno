let tratta = parseInt(prompt ('quanti km devi percorrere?'));
console.log(tratta)

let eta = parseInt(prompt ('Quanti anni hai?'));
console.log(eta)

let costo_km = 0.21;

let prezzo = tratta * costo_km;



console.log( `il tuo biglietto costa ${prezzo} €` )

if ( isNaN(tratta)|| isNaN(eta) ){
    console.log("uno dei due valori non è un numero")
} else if (eta < 18 ) {
    let sconto_1 = prezzo * 0.20
//    console.log( `il tuo biglietto costa ${prezzo * 0.20}`)
console.log(sconto_1)
}
