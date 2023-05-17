let tratta = parseInt(prompt ('quanti km devi percorrere?'));
console.log(tratta)

let eta = parseInt(prompt ('Quanti anni hai?'));
console.log(eta)

let costo_km = 0.21;

let prezzo = (tratta * costo_km).toFixed(2);
let prezzo_finale;



if ( isNaN(tratta)|| isNaN(eta) || (tratta === 0) || (eta === 0)) {
    console.log("i due valori possono essere solo un numero diverso da zero")
    // sconto minorenni
} else if (eta < 18 ) {
    let sconto_1 = prezzo * 0.20;
    prezzo_finale = (prezzo - sconto_1).toFixed(2);
    console.log( `il tuo biglietto costa ${prezzo_finale} €`)
} else {
// sconto over 65
    if ( eta > 65) {
        let  sconto_2 = prezzo * 0.40
        prezzo_finale = (prezzo - sconto_2).toFixed(2)
        
        console.log( `il tuo biglietto costa ${prezzo_finale} €`)
            // prezzo pieno
        } else{
            console.log( `il tuo biglietto costa ${prezzo} €`)
    }
}
