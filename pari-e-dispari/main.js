let choice = prompt("scegli pari o dispari")
console.log(choice);

let userNumber = Number(prompt("inserisci un numero da 1 a 5"))
console.log(userNumber);

let computer = getRandomIntInclusive()
console.log(computer);

let pariDispari = evenOdd(userNumber, computer)



function getRandomIntInclusive() {
let computerNumber = Math.ceil(Math.random() * 5)
  return computerNumber
}


function evenOdd (num1, num2) {
    let sum = num1 + num2;
    console.log(sum);
    if (sum % 2 === 0){
        return `Il numero ${sum} è pari`
    } else {
        return `Il numero ${sum} è dispari`
    }
}

console.log(pariDispari);








