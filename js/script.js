const loadQuote = () => {
    fetch('https://api.kanye.rest')
        .then(res => res.json())
        .then(data => displayCode(data))
}

const displayCode = (data) => {
    const quoteField = document.getElementById('quote');
    const quoteValue = quoteField.innerHTML = `<h1 class="text-center text-black text-3xl">${data.quote}</h1>`;
    console.log(quoteValue);

    // console.log(quoteValue);
    quoteField.appendChild(quoteValue)


}

// Find the button element by its ID
var refreshButton = document.getElementById('refreshButton');

// Add a click event listener to the button
refreshButton.addEventListener('click', function() {
    // Reload the current page when the button is clicked
    location.reload(); // Or you can use: window.location = window.location;
});




loadQuote()  