/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat



// Hello fellow coders!:)
// this is my first ever project and I am open for a feedback. I am going for exceed.

/***
 * `quotes` array
***/

//My quote theme is the 'space exploration'. I ve added extra property name 'tag' to objects in the array.

let quotes = [
 {
  text:"I'm sure the universe is full of intelligent life. It's just been too intelligent to come here.",
  source:"Arthur C. Clarke",
  citation:"IRC discussion at Scifi.com",
  year:"1996",
  tag: []
 },
{
  text:"I don't think the human race will survive the next thousand years, unless we spread into space. There are too many accidents that can befall life on a single planet. But I'm an optimist. We will reach out to the stars.",
  source:"Stephen Hawking",
  citation:"The Daily Telegraph",
  year:"2001",
  tag: ['scientist']
},
{
  text:"Space is for everybody. It's not just for a few people in science or math, or for a select group of astronauts. That's our new frontier out there, and it's everybody's business to know about space.",
  source:"Christa Mcauliffe",
  citation:"",
  year:"1985",
  tag:['scientist','astronaut']
},
{
  text:"Space travel is life-enhancing, and anything that's life-enhancing is worth doing. It makes you want to live forever.",
  source:"Ray Bradbury",
  citation:"Playboy",
  year:"1996",
  tag:[]
},
{
  text:"We cannot predict the new forces, powers, and discoveries that will be disclosed to us when we reach the other planets and set up new laboratories in space. They are as much beyond our vision today as fire or electricity would be beyond the imagination of a fish.",
  source:"Arthur C. Clarke",
  citation:"Space and the Spirit of Man",
  year:"",
  tag:[]
},
{
  text:"Some say that we should stop exploring space, that the cost in human lives is too great. But Columbia's crew would not have wanted that. We are a curious species, always wanting to know what is over the next hill, around the next corner, on the next island. And we have been that way for thousands of years.",
  source:"Stuart Atkinson",
  citation:"New Mars",
  year:"2003",
  tag: ['scientist']
},
{
  text:"As long as we are a single-planet species, we are vulnerable to extinction by a planetwide catastrophe, natural or self-induced. Once we become a multiplanet species, our chances to live long and prosper will take a huge leap skyward.",
  source:"David Grinspoon",
  citation:"Slate",
  year:"2004",
  tag: ['scientist']
}
]
/***
 * `getRandomQuote` function
***/

/*** I created a function for calling random number and a function calling
*  random quote based on its index postion in the array ***/
function getRandomNumber(arr)
    {
  const randomNumber = Math.round(Math.random() * (arr) );
  return randomNumber;
    }

function GetRandomQuote ()
    {
  let quoteRandom = quotes[ getRandomNumber(quotes.length - 1)];
  return quoteRandom;
    }


/***
 * `printQuote` function
***/
// printQuote function prints random quote on the screen

function printQuote() {
  let callQuote = GetRandomQuote();
  let textDisplay =
    `<p class = "quote">"${callQuote.text}"</p>
     <p class = "source">${callQuote.source}`;

   if (callQuote.citation)
    {
    textDisplay += `<span class = "citation"> ${callQuote.citation}</span>`;
    }
   if (callQuote.year)
    {
    textDisplay += `<span class = "year"> ${callQuote.year}</span>`;
    }
   if (callQuote.tag)
    {
    textDisplay += `<span class = "tag"> ${callQuote.tag.join(' ,')}</span>`;
    }
    textDisplay += `</p>`;

// Here the background color is changed every time the function is called
  const red = getRandomNumber(256);
  const green = getRandomNumber(256);
  const blue = getRandomNumber(256);

  document.body.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`;


  return document.getElementById('quote-box').innerHTML = textDisplay;

}

printQuote();
// The printQuote function will be called after 10 seconds
window.setInterval(printQuote, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);
