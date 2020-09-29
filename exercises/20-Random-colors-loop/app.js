function getColor(colorNumber)
{
    //make sure parameter is a number and not a string by converting the value to int:
    colorNumber = parseInt(colorNumber);

	switch(colorNumber){
		case 1: return "red"; 
				break;
		case 2: return "yellow"; 
				break;
		case 3: return "blue"; 
				break;
		case 4: return "green"; 
				break;
		default: return "black"; 
				 break;
	}
}

function getAllStudentColors(){
	
    //your loop here
    for (var counter = 1; counter < 11; counter++) {
        var randomNumber = Math.floor(Math.random() * 4) + 1;
        var exampleColor = getColor(randomNumber);
        console.log(`Student #${counter} has color ${exampleColor}`);
    }
	//var exampleColor = getColor(1);
}

//call the function below with the number of students in the class and print on the console
getAllStudentColors();

