function clog(value) {
    console.log(value)
}

// use need to put fetch inside a function inorder to get load the data when a button is clicked
const loadQuotes = () => {
    fetch('https://api.kanye.rest')
        .then(res => res.json())
        .then(data => displayQuote(data.quote));
}
// function to display the quotes on webpage
const displayQuote = quotes => {
    const quoteContainer = document.getElementById('quote-container');
    quoteContainer.innerText = '';
    const newPara = document.createElement("p");
    newPara.innerText = quotes;
    quoteContainer.appendChild(newPara);
}
