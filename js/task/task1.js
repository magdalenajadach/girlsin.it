// Helpful functions:

// Selectors:

// Select the <body> element

  $('body')

// Select the element with id="idname" (we can also assign this element to a var)

  var selectedElement = $('#idname');

// Select all the elements with the attribute class=" classname "
// Important!!! Returns an array even if it finds only one element or none!!!
//Magda ==> Why it is so iportant? It this selector: $('body')doesnt' return an array? If not, why this is so important?

  $('.classname');


// Manipulation:

// How to create a new <p> element

  var newParagraph = $('<p></p>');


// Now let's see what we can do with this new paragraph.
// Let's create a new <span> element
  var newSpan = $('<span>I am a span</span>');

// now what we do is:

// Take the paragraph and APPEND the span to it:

  newParagraph.append(newSpan);

// Or we can take the span and APPEND it TO the paragraph
  newSpan.appendTo(newParagraph)


// another interesting thing is that we can update/insert text in the span
// note: this can be done with any element!!!!

newSpan.text('some text')

// Now: let's create a new div element.

  var newDiv = $('<div></div>');

// I really need to assign an id to this div, because I will need it later.
// what I can do is to use the function attr(). attr() takes two arguments first is the attribute name and the second the value we want to assign to that

  newDiv.attr('id', 'whatever_value');

// so the newDiv now it will be <div id="whatever_value"></div>
// Note: you can use this attr function to set ANY attribute you want on ANY element.




// THE TASK!!!! OOOUUUUUUH!!!!!

// So the task we want to accomplish is:

// I changed a bit your index.html.
// I added a file called js/test.js

// I'd like you to write a series of JS instructions to create a structure as the following

<div id="personal-info-container">
  <h1>I am Magda</h1>
  <p>I am a woman and I code!</p>
  <a href="https://www.github.com/magdalenajadach">This is my github profile</a>
  <img src="https://avatars0.githubusercontent.com/u/8046557" alt="This is me!!!" />
<div>

// and then attach this to the body:
// When I will do Right click on the browser -> Inspect element, I'd like to see something similar to this:

<html>
  <head>
  </head>
  <body>
    <div id="personal-info-container">
      <h1>I am Magda</h1>
      <p>I am a woman and I code!</p>
      <a href="https://www.github.com/magdalenajadach">This is my github profile</a>
      <img src="https://avatars0.githubusercontent.com/u/8046557" alt="This is me!!!" />
    <div>

  </body>
</html>

// Please forget about what we said about creating function name(){} etc.
// Just write a simple series of instructions. You should be able to solve the excercise just using the function that I explained on top.

// Of course, you cannot modify the index.html. ;) Only test.js :)





