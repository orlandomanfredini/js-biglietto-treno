// ---- CONSEGNA//
// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// // va applicato uno sconto del 20% per i minorenni
// oppure applicato uno sconto del 40% per gli over 65.
// L’output del prezzo finale va stampato in console in forma “umana” cioè con al massimo due decimali, per indicare centesimi sul prezzo. Questo richiederà un minimo di ricerca.


// - Chiedere (con promt) all'utente km da percorrere e età.

let trip = parseFloat (prompt('Inserisci km da percorrere') /*number*/)

let age = parseFloat (prompt('Inserisci la tua età') /* number*/)


// - In base ai km da percorrere
//   - Applico tariffa di 0,21€ / km da percorrere

let tariffa = trip * 0.21; //number

// - In base all'età  
//   - Calcolo possibili sconti: 
    // - SE passeggero ha < 18 anni applico 20% di sconto
    // - ALTRIMENTI SE ha età > 65 anni applico 40% di sconto
if(age < 18){
    console.log(tariffa - tariffa * 0.20 )
} else if(age > 65){
    console.log(tariffa - tariffa * 0.40)
    
} else{
    console.log(tariffa)
}


 // - Stampo prezzo in console    