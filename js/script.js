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
    year: "1941",
    tags: "Inspiration"
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    citation: "Stanford University Commencement Address",
    year: "2005",
    tags: "Motivation"
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
    year: "1941",
    tags: "Motivation"
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
    year: "1963",
    tags: "Inspiration"
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
 * Background Random Color
 ***/

function randomRGB () {
  const randomValue = () => Math.floor(Math.random() * 256);
  const color = `rgb(${randomValue()}, ${randomValue()}, ${randomValue()})`;
  return color;
}




/***
 * `printQuote` function
***/
function printQuote() {
  const randomQuote = getRandomQuote();
  const randomColor = randomRGB();
  
  let html = '';

  // This check if the 'quote' property exists
  if (randomQuote['quote']) {
    html += `<p class="quote">${randomQuote['quote']}</p>`;
  }

  // This check if the 'author' property exists
  if (randomQuote['author']) {
    html += `<p class="source">${randomQuote['author']}`;
  }

  // This check if the 'citation' property exists
  if (randomQuote['citation']) {
    html += `<span class="citation">${randomQuote['citation']}</span>`;
  }

  // This check if the 'year' property exists
  if (randomQuote['year']) {
    html += `<span class="year">${randomQuote['year']}</span>`;
  }

  // This check if the 'tags' property exists
  if (randomQuote['tags']) {
    html += `<div class="tags">Tags: ${randomQuote['tags']}</div>`;
  }

  // This close the 'source' paragraph
  if (randomQuote['author']) {
    html += `</p>`;
  }

  document.getElementById('quote-box').innerHTML = html;
  document.body.style.backgroundColor = randomColor;

  return randomQuote;
}



/**
 * Refresh the page every 7 seconds
 * I give credit to https://www.geeksforgeeks.org/how-to-automatic-refresh-a-web-page-in-fixed-time/
 ***/

function autoRefresh() {
  window.location = window.location.href;
}
setInterval(printQuote, 7000); 


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);