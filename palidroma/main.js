function rovesciaParola(parola) {
  let invertedWord = "";
  for (let i = parola.length -1; i >= 0; i--) {
    invertedWord += parola[i]
  } 
  console.log(invertedWord);
  return invertedWord;
 }

 

let userWord = prompt("Inserisci una parola");
let parolaGirata = rovesciaParola(userWord);

if (userWord == parolaGirata) {
 console.log("LA PAROLA E' PALINDROMA");
}

else {
  console.log("LA PAROLA NON E' PALINDROMA");
}
