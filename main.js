// FizzBuzz
// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

var numbers = []

for (var i = 0; i < 100; i++) {
  console.log(i+1);
  document.getElementById("result").innerHTML += "<span>" + (i + 1) + "</span>";
}
