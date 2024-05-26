//variables

let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
   {
       quote: "The way to be Happy is to make others Happy",
       person: "Abraham Lincoln"
   },
   {
       quote: "The only way to do great work is to love what you do.",
       person: "Steve Jobs"
   },
   {
       quote: "In the end, it's not the years in your life that count. It's the life in your years.",
       person: "Abraham Lincoln"
   },
   {
       quote: "Life is what happens when you're busy making other plans.",
       person: "John Lennon"
   },
   {
       quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
       person: "Nelson Mandela"
   }
];

btn.addEventListener('click', function(){
   let random = Math.floor(Math.random() * quotes.length)

   quote.innerHTML = quotes[random].quote;
   person.innerHTML = quotes[random].person
})
