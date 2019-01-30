const quotes=[
{
name:'Abraham Lincoln',
quote:'When I do good I feel good, when I do bad I feel bad, and that is my religion.'

},
{
name:'Agatha Christie',
quote:'Evil is not something superhuman, it is something less than human.'
},
{
name:'Plato',
quote:'Thinking: the talking of the soul with itself'
},
{
name:'Aristotle',
quote:'It is during our darkest moments that we must focus to see the light.'
}
]

const quoteBtn=document.querySelector('#quoteBtn');

const quote=document.querySelector('#quote');

const quoteAuthor=document.querySelector('#quoteAuthor');


quoteBtn.addEventListener('click',displayQuote)

function displayQuote(){
	let number =Math.floor(Math.random()*quotes.length);
	quoteAuthor.innerHTML=quotes[number].name;
	quote.innerHTML=quotes[number].quote;
}