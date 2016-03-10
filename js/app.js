(function(){

var myArray = ["title", "name", "age"]

$(function(){
    $.getJSON('url', function(data) {
        console.log(data);
    });
});


function createFunction() {
    var piece = document.createElement("P");
    var descPiece = document.createTextNode("This is a paragraph");
    piece.appendChild(descPiece);    
    document.body.appendChild(piece);


document.getElementById("myElement").appendChild(piece); 