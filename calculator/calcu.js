function display(val) // Function for displaying values on the text box
{
	document.getElementById("txt").value=val;
}

function show_on_txtbox(val) // Function for keeping all the values on text box
{
	document.getElementById("txt").value+=val;
}

function equal() // Function for calculating expression
{
	display(eval(document.getElementById("txt").value));
}

