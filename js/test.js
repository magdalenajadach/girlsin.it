// Please write here your instructions
// One after the other, no functions. ;)

$(document).ready(function() { /*I know that you told "forget about what we said about functions". 
//That was also a part of resolving problem with ReferenceError with body. More about it in point 3. */

//1. I created new element ==> div

var newDiv = $('<div></div');

//2. I have selected <div> and added class to it:

newDiv.attr('class', 'personal-info-container');

//3. I appended <div> to a <body> tag

/* newDiv.append(body); //=> since Friday night I had ReferenceError: "body is not defined"
On Saturday I realised that maybe I dont't need to append div to a body. Maybe... ;) */

//4. Added h1 element + added some text <p> to it:

var newHeader = $('<h1></h1>');
newHeader.appendTo(newDiv);
newHeader.text('I am Magda');

//5. Added another one <p> + added some text to it:
newParagraph = $('<p></p>')
newParagraph.text('I am a woman and I code');
newParagraph.appendTo(newHeader);

//6. Let's play with href!
newLink = $('<a></a>'); 
$('a').attr('href', 'https://www.github.com/magdalenajadach'); 
newLink.text('This is my github profile');
newLink.appendTo(newDiv);

//7. Time for img!
newImage = $('<img></img>');
$("img").attr({
        "src": "https://avatars0.githubusercontent.com/u/8046557", //I am not sure when I should use double quotes and when single
        "alt": "This is me!!!"
    });
newImage.appendTo(newDiv);

("body").append( newDiv, newHeader, newParagraph ); //I don't know how this to the body.

});
 