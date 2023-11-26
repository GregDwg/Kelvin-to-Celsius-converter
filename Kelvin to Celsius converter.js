// That set the value 293 to kelvin variable
let kelvin = 0;

// This line is subraction to convert kelvin to celsius
let celsius = kelvin - 273;

// This line will convert celsius to fahrenheit
let fahrenheit = celsius * (9/5) + 32;
let Newton = celsius * (33/100);

//  This line use Math.floor to round down the Fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);

console.log(fahrenheit);
console.log(Math.floor(Newton));
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
