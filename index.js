
let input = document.getElementById("cal");
let string = "";

function calculateMe(event) {
    let value = event.target.innerHTML;
    
    if (value === "=") {
        string = eval(string); 
        input.value = string;  
    } else if (value === "C") {
        string = "";          
        input.value = string;
    } else if (value === "x") {
        string = string.substring(0, string.length - 1);
        input.value = string;
    } else {
        string += value;   
        input.value = string;
    }
}
