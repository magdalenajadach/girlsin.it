// Please write here your instructions
// One after the other, no functions. ;)

$(document).ready(function() {



//1. I created new element ==> div

var newDiv = $('<div></div');

//

//2. I have selected <div> and added class to it:

newDiv.attr('class', 'personal-info-container');

//

//3. I appended <div> to a <body> tag




//

//4. Added h1 element + added some text <p> to it:

var newHeader = $('<h1></h1>');
newHeader.text('I am Magda');
newHeader.appendTo(newDiv);

//

//5. Added another one <p> + added some text to it:
newParagraph = $('<p></p>')
newParagraph.text('I am a woman and I code');
newParagraph.appendTo(newHeader);

});

 