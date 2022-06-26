# JavaScript
JavaScript is one of the 3 languages all web developers must learn:     

1. HTML to define the content of web pages    
2. CSS to specify the layout of web pages     
3. JavaScript to program the behavior of web pages

# JavaScript Data Types

+ Number - 1,2,3...
+ String - 'Hi Yash'
+ Boolean - true/ false
+ Null - Explicitly set a variable with no value
+ Undefined - For variables that have not yet been defined
+ Object - Complex data structures - Arrays, Dates...
+ Symbol - Used with objects

# Few Fundamentals In JS

## HTML Template

<pre><code>
let result = `${title} ${names} ${message}`;
console.log(result);
let html = `<h2> ${title} </h2> 
<p>${names}</p>
<span>${message}</span>`; 
console.log(html);
</code></pre>

## Strict Comparison (Different Types Cannot Be Equal)

<pre><code>
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
</code></pre>
