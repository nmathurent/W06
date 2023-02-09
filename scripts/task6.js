/* Lesson 6 */
/* Program written by Nelson Mathurent */

/* IF/ELSE IF */

// Step 1: Declare and initialize a new variable to hold the current date
let currDate = new Date();

// Step 2: Declare another variable to hold the day of the week
var day;

// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )
day = currDate.getDay();

// Step 4: Declare a variable to hold a message that will be displayed
var message;

// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'
if (day >= 1 && day <= 5) {
    message = 'Hang in there!';
}
// Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'
else {
    message = 'Woohoo! It is the weekend!'; 
}


/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message
var dayString;

// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above
switch(day) {
    case 0:
        dayString = 'Sunday';
        break;
    case 1:
        dayString = 'Monday';
        break;
    case 2:
        dayString = 'Tuesday';
        break;
    case 3:
        dayString = 'Wednesday';
        break;
    case 4:
        dayString = 'Thursday';
        break;
    case 5:
        dayString = 'Friday';
        break;
    case 6:
        dayString = 'Saturday';
        break;
}
/* OUTPUT */

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1
document.querySelector('#message1').textContent = message;

// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2
document.querySelector('#message2').textContent = dayString;

/* FETCH */
// Step 1: Declare a global empty array variable to store a list of Jokes
var jokeList = [];

// Step 2: Declare a global array variable to store a list of Jokes Categories
var categoriesList = ["career","celebrity","dev","explicit","fashion","food","history","money","movie","music","political","religion","science","sport","travel"];

// Step 3: Initialize the dropdown list with the list of Jokes Categories
categoriesList.forEach(element => {
// Create an Option object       
var opt = document.createElement("option");        

// Assign text and value to Option object
opt.text = element;
opt.value = element;

// Add an Option object to Drop Down List Box
document.getElementById('categories').options.add(opt);
});

// Step 4: Declare a function named output that accepts a joke as an argument and does the following:
// - Creates an HTML <article> element
// - Creates an HTML <h4> element and add the joke's jokeDesc property to it
// - Appends the <h4> element to the <article> element as children
// - Appends the <article> element to the HTML element with an ID of jokes

function output (jokeList)
{
    templeElement = document.getElementById('jokes');

    
    // jokeList.forEach(element => {
        // - Creates an HTML <article> element
        let articleElement = document.createElement('article');

        // - Creates an HTML <h4> element and add the temple's location property to it
        let h4Element = document.createElement('h4');
        h4Element.textContent = jokeList.value;
        h4Element.setAttribute('id', 'jokeDesc');

        // - Appends the <h4> element to the <article> element as child
        articleElement.append(h4Element);

        // - Appends the <article> element to the HTML element with an ID of jokes
        templeElement.append(articleElement);
        
    // });

}

// Step 5: Create another function called getJokes. Make it an async function.
// Step 6: In the function, using the built-in fetch method, call this absolute URL: 'https://api.chucknorris.io/jokes/random?category=animal'. Create a variable to hold the response from your fetch. You should have the program wait on this line until it finishes.
// Step 7: Convert your fetch response into a Javascript object ( hint: .json() ). Store this in the jokeList variable you declared earlier (Step 1). Make sure the the execution of the code waits here as well until it finishes.

let urlJoke = "https://api.chucknorris.io/jokes/random?category=animal";
let results = null;

async function getJokes(urlJoke) {
    const response = await fetch(urlJoke);
    //check to see if the fetch was successful
    if (response.ok) {
      // the API will send us JSON...but we have to convert the response before we can use it
      // .json() also returns a promise...so we await it as well.
      const data = await response.json();
      jokeList = data;
      output(jokeList);

    }
  }
  
// Step 8: Finally, call the output function and pass it the list of jokes. Execute your getJokes function to make sure it works correctly.
getJokes(urlJoke);

// Step 9: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of jokes

function reset() {
    var div = document.getElementById('jokes');
      
    while(div.firstChild) {
        div.removeChild(div.firstChild);
    }
}

// Step 10: Declare a function named pickJoke that does the following:
// - Calls the reset function
// - Sorts the global joke list by the currently selected value of the HTML element with an ID of pickJoke
// - Calls the output function passing in the sorted list of jokes

 
 function pickJoke() {

    // - Calls the reset function
    reset();

    // - Sorts the global temple list by the currently selected value of the HTML element with an ID of pickJoke
    select= document.querySelector('#categories');

    console.log("previousValue: " + previousValue + " Actual: " + select.value);
    select.setAttribute('previousValue', select.value);
    urlJoke = urlJoke.replace(previousValue, select.value)
    previousValue = select.value;
    
    getJokes(urlJoke);
    
}

// Step 11: Add a change event listener to the HTML element with an ID of pickJoke that calls the pickJoke function
const pickJokeSelect = document.getElementById("categories");
previousValue = pickJokeSelect.value; 
pickJokeSelect.addEventListener('change', pickJoke);


