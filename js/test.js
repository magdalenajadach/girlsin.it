// Please write here your instructions
// One after the other, no functions. ;)

$(document).ready(function() { /*I know that you told "forget about what we said about functions". 
//That was also a part of resolving problem with ReferenceError with body. More about it in point 3. */

//1. I created new element ==> div
var body = $('body');	
var newDiv = $('<div></div');

//2. I have selected <div> and added class to it:
newDiv.attr('class', 'personal-info-container');


//4. Added h1 element + added some text <p> to it:
var newHeader = $('<h1></h1>');
newHeader.appendTo(newDiv);
newHeader.text('I am Magda');

//5. Added another one <p> + added some text to it:
var newParagraph = $('<p></p>')
newParagraph.text('I am a woman and I code');
newParagraph.appendTo(newDiv);
			
//6. Let's play with href!
var newLink = $('<a></a>'); 
newLink.text('This is my github profile');
newLink.attr('href', 'https://www.github.com/magdalenajadach');
newLink.appendTo(newDiv);

//7. Time for img!
var newImage = $('<img></img>');
newImage.appendTo(newDiv);
newImage.attr({
    "src": "https://avatars0.githubusercontent.com/u/8046557", //I am not sure when I should use double quotes and when single
    "alt": "This is me!!!"
    });

newDiv.appendTo(body);

});
 