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
    author: "Ralph Waldo Emerson",
    citation: "Self-Reliance",
    year: "1941"
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    citation: "Stanford University Commencement Address",
    year: "2005"
  },
  {
    quote: "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost",
    citation: "The Pasture",
    year: "1915"
  },
  {
    quote: "The only thing necessary for the triumph of evil is for good men to do nothing.",
    author: "Edmund Burke",
    citation: "Thoughts on the Cause of the Present Discontents",
    year: "1770"
  },
  {
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
    citation: "Speech at Harrow School",
    year: "1941"
  },
  {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
    citation: "Long Walk to Freedom",
    year: "1994"
  },
  {
    quote: "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.",
    author: "Martin Luther King Jr.",
    citation: "Strength to Love",
    year: "1963"
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
    <p class = "source"> ${ randomQuote['author'] }<span class = "citation"> ${ randomQuote['citation'] }</span><span class = "year"> ${ randomQuote['year'] } </span> </p>
  `;
  
  document.getElementById('quote-box').innerHTML = html ;

  return randomQuote;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);