const quotes = [ 
{
    name:'Stephen King',
    quote:'Get busy living or get busy dying'
},
{
    name:'George Bernard Shaw',
    quote:'Nu ne oprim din joacă atunci când îmbătrânim ci îmbătrânim când încetăm să ne mai jucăm.'
},
{
    name:'Jim Morrison',
    quote:'Un prieten e acela care-ți dă libertatea să fii tu însuți.'
},
{
    name:'Octavian Paler',
    quote:'Nu există pustiu. Există doar incapacitatea noastră de a umple golul în care trăim.'
},
{
    name:'Constantin Brâncuși',
    quote:'Lucrurile nu sunt greu de făcut. Greu este să te pui în starea de a le face.'
}
    ];

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quote.addEventListener('click', displayQuote);

function displayQuote (){
    let number = Math.floor(Math.random()*quotes.length);
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
}