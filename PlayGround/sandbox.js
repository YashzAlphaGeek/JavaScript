alert('hello,world');
console.log(1);
console.log(2);

//Variables
let age =25;
let year = 2019;
console.log(age,year);

age = 30;
console.log(age,year);

const points = 100;
//points=10;
console.log(points);

var score = 75;
console.log(score);

const title = 'Hi';
const names = 'Yash';
const message ="How are you?";

//HTML Template
let result = `${title} ${names} ${message}`;
console.log(result);
let html = `
<h2>${title}</h2>
<p>${names}</p>
<span>${message}</span>`;
console.log(html);


//Strict Comparison
let ageIs=25;
console.log(ageIs===25);
console.log(ageIs==='25');
console.log(ageIs!==25);
console.log(ageIs!=='25');

//Type Conversion
let val ='100';
console.log(typeof val);
val=Number(val);
console.log(val+1);
console.log(typeof val);


