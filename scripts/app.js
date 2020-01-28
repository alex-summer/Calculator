const buttons = document.getElementById("buttonGrid");
var equation = "";

buttons.addEventListener("click", function(e){
	var button = e.target.value;
	if (button === "="){
		equation = operate();
		setDisplay(result);
	}
	else if(button != undefined){
		equation = stringManager(button);
		console.log(equation);
		setDisplay(equation);
	}
})



function operate(){
	try
	result = eval(equation);
	console.log(result);
	return result;
}

function stringManager(button){
	switch(button){
		case "clr":
			equation = "";
			return equation;
		case "del":
			equation = equation.slice(0, -1);
			return equation;
		default:
			equation = equation + button;
			return equation;
	}
}

function setDisplay(value){
	var displayText = `<p>${value}</p>`
	const display = document.getElementById("inputDisplay");
	display.innerHTML = displayText;
}
