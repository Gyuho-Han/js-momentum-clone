const quotes = [
    {
        quote: "Education is the most powerful weapon which you can use to change the world.",
        author: "Nelson Mandela",
    },
    {
        quote: "Our greatest glory is not in never failing, but in rising every time we fall.",
        author: "Confucius",
    },
    {
        quote: "All great achievements require time.",
        author: "Maya Angelou",
    },
    {
        quote: "Why not change the world.",
        author: "Handong Global University",
    },
    {
        quote: "Small habits make big changes.",
        author: "James Clear (Author of Atomic Habits)",
    },
    {
        quote: "Never put off till tomorrow what you can do today.",
        author: "Benjamin Franklin",
    },
    {
        quote: "Learning never exhausts the mind.",
        author: "Leonardo da Vinci",
    },
    {
        quote: "Success is the sum of small efforts, repeated day in and day out.",
        author: "Robert Collier",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

console.log(todaysQuote);
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;