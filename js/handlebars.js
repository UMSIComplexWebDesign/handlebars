//Retrieve the template data from the HTML .
var template = $('#handlebars-demo').html();

var context = { "name" : "Colleen van Lent", "occupation" : "Lecturer" };

//Compile the template data into a function
var templateScript = Handlebars.compile(template);

var html = templateScript(context);
//html = 'My name is Colleen . I am a Lecturer.'

$(document.body).append(html);