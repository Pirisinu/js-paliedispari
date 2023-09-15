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
  console.log(wordInvert);

  //4.
  return wordIn === wordInvert;
}
console.log(isPalindroma(wordIn))
//5.
if (isPalindroma(wordIn)) {
  console.log(wordIn + " è una parola palindroma.");
} else {
  console.log(wordIn + " non è una parola palindroma.");
}