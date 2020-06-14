var quotes = [
    "You're loved,even when you feel alone,hang on, it gets easier, and then it gets okay and then it feels like freedom.",
    "You are the ocean in one drop.",
    "Growth requires patience, isolation and sacrifice.",
    "Nobody can steal your talent, time and capability.",
    "Life always works out.",
    "Give your children power through their names.",
    "Your mind is your lead, inject it with positivity.",
    "Your feet are your foundation, walk with purpose.",
    "When you hit rock bottom and survive, there are very few things in life that can scare you.",
    "Life is too short and too precious to accomodate other people's desires above your own.",
    "You are the most precious creation oF God, be-you-tiful."
]
function getQuote() {
    var randomNumber = Math.floor(Math.random()* quotes.length);
    document.getElementById('newQuoteSection').innerHTML = quotes[randomNumber];

}




