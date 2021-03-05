// FizzBuzz
// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

// var numbers = []
//
// for (var i = 0; i < 100; i++) {
//   numbers.push(i+1)
//   document.getElementById("result").innerHTML += "<span>" + numbers[i] + " " + "</span>";
//   if (!((i+1)%3) && !((i+1)%5)) {
//     numbers[i] = "Fizz"
//   } else if (!((i+1)%3)) {
//     numbers[i] = "FizzBuzz"
//   }else if (!((i+1)%5)) {
//     numbers[i] = "Buzz"
//   }
// }
// console.log(numbers);


var numbers = [];
var interference = []

for (var i = 0; i < 100; i++) {
  numbers.push(i+1)
  interference.push(i+1);
  // interference = numbers;
  if (!((i+1)%3) && !((i+1)%5)) {
    interference[i] = "FizzBuzz"
  } else if (!((i+1)%3)) {
    interference[i] = "Fizz"
  } else if (!((i+1)%5)) {
    interference[i] = "Buzz"
  }
  document.getElementById("result").innerHTML += "<span>" + interference[i] + " " + "</span>";
  // console.log(numbers[i]);
}
console.log(numbers);
console.log(interference);
