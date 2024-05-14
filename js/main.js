var quote = document.getElementById('quote');
var button = document.getElementById('generate-btn');

var quotes = [
    "'The only way to do great work is to love what you do.' ― Steve Jobs",
    "'The best way to predict the future is to invent it.' ― Alan Kay",
    "'Don't let yesterday take up too much of today.' ― Will Rogers",
    "'All the world is made of faith, and trust, and pixie dust.' ― J.M. Barrie",
    "'I have great faith in fools - self-confidence my friends will call it.' ― Edgar Allan Poe",
    "'Never be afraid to trust an unknown future to a known God.' ― Corrie ten Boom",
    "'Time you enjoy wasting is not wasted time.' ― Marthe Troly",
    "'Happiness in intelligent people is the rarest thing I know.' ― Ernest Hemingway ",
    "'Count your age by friends, not years. Count your life by smiles, not tears.' ― John Lennon",
    "'Happiness is a warm puppy.' ― Charles M. Schulz",
    "'You cannot protect yourself from sadness without protecting yourself from happiness.' ― Jonathan Safran Foer"
];

var lastRandomIndex;

function rondomQuote() {
    var randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastRandomIndex);
    lastRandomIndex = randomIndex;
    quote.textContent = quotes[randomIndex];
}


