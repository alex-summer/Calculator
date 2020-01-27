const buttons = document.getElementById("buttonGrid");
var equation = "";

buttons.addEventListener("click", function(e){
	var button = e.target.value;
	if (button === "="){
		result = operate();
	}
	else if(button != undefined){
		equation = stringManager(button);
		setDisplay(equation);
	}
})



function operate(){
	
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
			console.log(equation);
			return equation;
	}
}

function setDisplay(value){
	var displayText = `<p>${value}</p>`
	const display = document.getElementById("inputDisplay");
	display.innerHTML = displayText;
}
