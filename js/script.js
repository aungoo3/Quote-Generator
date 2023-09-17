/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
{
  quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
  author: "Ralph Waldo Emerson"
},
{
  quote: "The only way to do great work is to love what you do.",
  author: "Steve Jobs"
},
{
  quote: "In three words I can sum up everything I've learned about life: it goes on.",
  author:  "Robert Frost"
},
{
  quote: "The only thing necessary for the triumph of evil is for good men to do nothing.",
  author: " Edmund Burke "
},
{
  quote: "The best way to predict the future is to create it.",
  author:  " Peter Drucker "
},
{
  quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
  author: " Albert Einstein "
},
{
  quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
  author:  "Martin Luther King Jr. "
}
];


/***
 * `getRandomQuote` function
***/
function getRandomQuote () {
  const generateRandomQuote = Math.floor(Math.random() * quotes.length);
  return quotes[generateRandomQuote];
}


/***
 * `printQuote` function
***/
function printQuote() {
  const randomQuote = getRandomQuote();
  
  let html = 
  `
    <p class = "quote"> ${ randomQuote['quote'] } </p>
    <p class = "source"> ${ randomQuote['author'] } </p>
  `;
  
  document.getElementById('quote-box').innerHTML = html

  return randomQuote;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);