const generateBtnElement = document.getElementById('btn-generator');
const quoteIdElement = document.getElementById('advice-id');
const quoteContentElement = document.getElementById('advice-quote');


const generateNewQuote = async function() {
    const reqURL = 'https://api.adviceslip.com/advice';
    const req = new Request(reqURL);
    const res = await fetch(req);
    const Quote = await res.json();
    
    const QuoteID = Quote.slip.id;
    const QuoteContent = Quote.slip.advice;
    
    
    quoteIdElement.textContent = QuoteID;
    quoteContentElement.textContent = `"${QuoteContent}"`;
}


generateBtnElement.addEventListener('click', generateNewQuote);