$(document).ready(function() {

allQuizes = [
	"<p>What's the size of the moon?</p>", 
	"<p>How many states are there in United States?</p>", 
	"<p>How do you add jQuqery to an HTML file?</p>", 
	"<p>What's Obama's first name?</p>", 
	"<p>What color is Mars?</p>"
	]

var randomQuiz = function (){
	var randomIndex = Math.floor(Math.random() * allQuizes.length);
    return allQuizes[randomIndex];
}

$('button').on('click', function(){
	$('p').remove();
	$('body').append(randomQuiz)
});


$('#submit').click(function(){
	allQuizes.push("<p>"+ $('#question-add').val() + "</p>");
	console.log(allQuizes);
})


});