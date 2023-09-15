Esercizi con funzioni
===
## ***Esercizio 1***: *'Palidroma'*
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
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

## ***Esercizio 2***: *'Pari e Dispari'*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
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