// Le iterazioni sugli array sono dei metodi semplificati e usati per operare su di essi, modificarli o ottenere degli output desiderati.

// Partiamo col dire che gli array sono oggetti di js che si comportano come dei piccoli archivi virtuali contenenti vari tipi di elementi, sempre coerenti tra loro, come per esempio stringhe numeri o object.

// Ne consegue che per operare sugli elementi all'interno di un'array dovremmo essere in grado di estrapolarli, e questo cosa di solito si puo' fare o prendendoli singolarmente tramite i loro indici, oppure sfogliandoli con dei cicli come il for o il forEach che abbiamo gia' visto.

// Ma qui ci possono venire in aiuto le iterazioni, funzioni che sono state già implementate all'interno di js mano a mano che i programmatori sviluppavano nuove necessità di semplificare il codice e renderlo più efficente e che ci permettono di effettuare operazioni complesse su un array, utilizzando poche righe di codice.

// Un esempio potrebbe essere il confronto tra tutti gli elementi all'interno di un array, la verifica di condizioni specifiche, o la loro modifica.

// Di seguito vi illustreremo alcuni esempi applicati in situazione già riscontrate, e vi mostreremo come determinate iterazioni avrebbero potuto risolvere facilmente problemi complessi. 
// PS Per facilitare la visione dei risultati si consigli di aprire la console del proprio browser;



// REDUCE
// Condensa tutti quanti i valori dell'array e restituisce solo il valore maggiore o minore
console.log("L'ITERAZIONE REDUCE");
// prendiamo in considerazione l'esercizio snack 1 

const bicycle = [
    { name: 'Bianchi', weight: 8 },
    { name: 'Atala', weight: 9 },
    { name: 'Olmo', weight: 7 }, 
    { name: 'Casati', weight: 11 },
    { name: 'Colnago', weight: 6 },   
  ];

// Fino ad ora avremmo dovuto fare un ciclo for o forEach per individuare il numero minore o maggiore all' interno di un array

let bikeLight = bicycle[0]

bicycle.forEach(({ name, weight }) => {
  if (weight < bikeLight.weight) {
    bikeLight = { name, weight };
  }
});


//  se invece volessimo utilizzare reduce per individuare la bici con peso minore

let bicycleLight = bicycle[0]

bicycleLight = bicycle.reduce((accumulator, currElem) => {
    return currElem.weight < accumulator.weight ? currElem : accumulator;
});

console.log("Questo sarà il risultato finale");
console.log(`La bici più leggera è la ${bicycleLight.name} con peso di ${bicycleLight.weight} kg`);


console.log("");
// Allo stesso modo se volessimo opeare su un'array numerico:

const numbers = [2, 12, 4, 11, 6];

// Il primo consol log mostrerà il valore più alto all'interno dell'array
console.log("Valore più alto nell'array");
console.log(numbers.reduce((acc,num) => num > acc ? num : acc));

// Il secondo consol log mostrerà il valore più basso all'interno dell'array
console.log("Valore più basso nell'array");
console.log(numbers.reduce((acc,num) => num < acc ? num : acc));


// ----------------------------------------------------------------------------------------------------------
console.log("");
console.log("L'ITERAZIONE ARRAY.FROM");
// ARRAY.FROM

// Dato un array in ingresso, restituisce un nuovo array composto da ogni elemento singolarmente, a differenza di un ciclo for che restituisce solo ogni elemento singolo
// Con il solito ciclo for avremmo ottenuto un risultato del genere:
console.log("Risultato di un ciclo for di una stringa");
const letters2 = "ABCDEFG"

for (let i = 0; i < letters2.length; i++) {
    const elem = letters2[i];
    console.log(elem);
}

// Utilizzando array.from invece, ci ritornerà un array composto da ogni singolo elemento della stringa inserita
console.log("");
console.log("Come possiamo notare con array.from avremo invece un nuovo array");

const letters1 = Array.from("ABCDEFG");
console.log(letters1);

// Accetta anche un secondo parametro definito da una funzione da noi scelta, in questo caso ogni elemento dell'array inserito corrispondera alla moltiplicazione di se stesso
console.log("Inserendo all'interno di array.from, un secondo parametro come funzione, possiamo anche modificare ogni elemento dell'array preso in considerazione");

console.log(Array.from([1, 2, 3], (x) => x * x));


// ----------------------------------------------------------------------------------------------------------
console.log("");
console.log("L'ITERAZIONE EVERY");
// EVERY

// Every si utilizza quando vogliamo effettuare una verifica su ogni elmento di un'array, e ottenere quindi un valore booleano come risultato nel caso la condizione sia soddisfatta o no.

// Fino ad ora avremmo dovuto usare un ciclo for o forEach:

const numbersArray = [45, 4, 9, 16, 25];

let flagFor = true;
for (let i = 0; i < numbersArray.length; i++) {
    const element = numbersArray[i];
    if(element < 18){
        flagFor = false;
    }
}

console.log("Valore di ritorno con un ciclo for impostato con un flag:", flagFor);


let flagForEach = true;

numbersArray.forEach(currNumb => {
    if(currNumb < 18){
        flagForEach = false;
    }
})

console.log("Valore di ritorno con un ciclo forEach impostato con un flag:", flagForEach);


// Con every, possiamo ottenere lo stesso risultato con molte meno righe di codice


let allOver18 = numbersArray.every(myFunction);
console.log("Valore di ritorno con l'iterazione every:", allOver18);

function myFunction(value, index, array) {
  return value > 18;
}

