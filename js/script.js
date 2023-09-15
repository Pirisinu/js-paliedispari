/* ##Esercizio 1 
  - ***Svolgimento***
1. Creare una constante in cui andro con un prompt a prendere il valore della parola inserita 
2. Creare una funzione con valore della parola
3. creare una costante della parola invertita in cui andrò a:
    - scomporrere la parola(split)
    - invertire la parola(reverse)
    - riunure la parola(join)
4. Creare un return confrntando la parola originale con quella invertita
5. Creo un if in cui con la condizione in entrata verifico il valore della parola controllata 
    - Se il valore della paorla è uguale alla parola mando a schermo: ***La tua parola è Palidroma***
    - Alrimenti mando a schermo: ***La tua parola non è Palidroma***
*/

//1.
const wordIn = prompt('Inserire una parola');

//2.
function isPalindroma(wordIn){
  
  //3.
  const wordInvert = wordIn.split('').reverse().join('');

  //4.
  return wordIn === wordInvert;
}
//5.
if (isPalindroma(wordIn)) {
  console.log(wordIn + " è una parola palindroma.");
} else {
  console.log(wordIn + " non è una parola palindroma.");
}

/* ##Esercizio 2
- ***Svolgimento***

1. Creiamo due funzioni:
    - Randomizer (generatore randomico di nummeri da 1 a 5)
    - evenControl [controlla se sia pari o dispari un numero (mi dara un risultato booleano da poter sfruttare con il ternary operator)]

2. Andiamo a chiedere con un prompt "Pari o Dispari"

3. **Effettuiamo un controllo** 
    - se ciò che è stato inserito non corrisponde a uno dei valori sopra indicati:(Pari o Dispari) blocchiamo la procedura, altrimenti si procede

4. Andiamo a chiedere con un prompt "Scegli il tuo numero da 1 a 5"

5. **Effettuiamo un controllo** 
    - se ciò che è stato inserito non corrisponde a uno dei valori o all'intervallo dei numeri scelti sopra indicati:("Scegli il tuo numero da 1 a 5") blocchiamo la procedura, altrimenti si procede

6. Effettuati i controlli in una costante genero in numero randomico con la funzione

7. In una costante vado a sommare i due numeri(user vs random);

8. Creo un (ternary) operetor per dare il risultato  ? 'pari' : 'dispari'

9. Se il valore ("Pari o Dispari") scelto in precedenza corrispondi al risultato del ternary scrivere **Ha vinto l'utente**
10. Altrimenti **Ha vinto il pc**
*/

//1. 
//1.Randomaizer
/**
 * Generatore randomico di numeri
 * @param {number} min 
 * @param {number} max 
 */
function randomizer (min, max) {
  return Math.floor(Math.random() * 5) + 1;
}

//1.EvenControl
/**
 * Controllo 'pari e dispari'
 * @param {number}
 * @returns 
 */
function evenControl (numero) {
  return numero % 2 === 0;
}

//2.
const userChoice = prompt('Scegli tra pari e dispari').toLowerCase();
console.log(userChoice);

//3.
if (userChoice !== 'pari' && userChoice !== 'dispari') console.log('Valore inserito non valido');
else{
  console.log('bravo');
}