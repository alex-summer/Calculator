const buttons = document.getElementById("buttonGrid");
var equationText = "";

buttons.addEventListener("click", function(e){
	var button = e.target.value;
	if (button === "="){
		equationText = operate();
		setDisplay(equationText);
	}
	else if(button != undefined){
		equationText = stringManager(button);
		setDisplay(equationText);
	}
})



function operate(){
	var result;
	try{
		result = eval(equationText);
		result = result.toFixed(5)
		return result;
	}
	catch{
		result = "Invalid equation";
		return result;
	}
	
}

function stringManager(button){
	switch(button){
		case "clr":
			equationText = "";
			return equationText;
		case "del":
			equationText = equationText.slice(0, -1);
			return equationText;
		default:
			switch(true){
				case (equationText.length <= 24): 
					equationText += button;
					return equationText;
				case (equationText.length > 24):
					return equationText;
			}
				
			
	}
}

function setDisplay(value){
	var displayText = `<p>${value}</p>`
	const display = document.getElementById("inputDisplay");
	display.innerHTML = displayText;
}
