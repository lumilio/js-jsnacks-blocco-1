/* Snack 1
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.
- prompt
- if
*/

/* const first_number = Number(prompt('Type a number'))
const second_number = Number(prompt('Type another number'))

console.log(first_number, second_number); // 5, 10

if (first_number > second_number) {
  console.log('Numbero piú grande', first_number);
} else if (second_number > first_number) {
  console.log('Numbero piú grande', second_number);
} else {
  console.log('Non vale');
} */


/*Snack 2
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
*/



/* const first_word = prompt('Type a word');
const second_word = prompt('Type another word');


if (first_word.length > second_word.length) {
  console.log('Parola piú corta', second_word);
  console.log('Parola piú lunga', first_word);
} else if (second_word.length > first_word.length) {
  console.log('Parola piú corta', first_word);
  console.log('Parola piú lunga', second_word);
} else {
  console.log('Stessa lunghezza');
} */


/*Snack 3
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.

- prompt
- parseInt
- for

*/
/*
let result = 0;
for (let i = 0; i < 10; i++) {
  const user_number = parseInt(prompt('Type a number'))
  result += user_number;
}

console.log(result); */

/* Snack 4
In un array sono contenuti i nomi degli invitati alla festa del grande
Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o
no alla festa.

- array
- prompt
- array.includes (for)
- if
*/

/* const invitati = ['Ros', 'Giuseppe', 'Chira', 'Gaia', 'Lorenzo', 'Doina', 'Valentina']

const user_name = prompt('What\'s you name?');

if (invitati.includes(user_name)) {
  console.log('Welcome');
} else {
  console.log('Sorry');
} */


/* Snack 5
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.

- array
- for
- prompt
- if
- %
*/

/* const odd_numbers = []
for (let i = 0; i < 6; i++) {
  const user_number = parseInt(prompt('Type a number'))


  if (user_number % 2 !== 0) {
    odd_numbers.push(user_number)
  }

}

console.log(odd_numbers); */



/* Snack 6
Stampa il cubo dei primi N numeri,
dove N è un numero indicato dall’utente.
- prompt
- Math
- log
- for
*/
/* const n = parseInt(prompt('Type a number')) // 10

for (let i = 1; i <= n; i++) {
  console.log(Math.pow(i, 3))
}
 */



/* Snack 7
Stampa le potenze di 2 fino a 1000.
- console.log
- Math.pow
- ciclo

*/


/* let n = 0;
while (Math.pow(2, n) < 1000) {
  console.log(Math.pow(2, n));
  n++
} */

/* for (let n = 0; Math.pow(2, n) < 1000; n++) {
  console.log(Math.pow(2, n));
} */


/* Snack 8
Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.

- prompt
- for
- sum
- Number
*/

/* let sum = 0;
const four_digit_number = prompt('Type a four digit number')

for (let i = 0; i < four_digit_number.length; i++) {
  const numb = Number(four_digit_number[i])
  sum += numb
}

console.log(sum); */



/* Snack 9
Calcola la somma e la media dei primi 10 numeri.
*/

let sum = 0
let avg = 0;
for (let i = 1; i <= 10; i++) {
  sum += i
}

avg = sum / 10

console.log(sum, avg);