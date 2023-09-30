var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var option_from, option_to;
input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);

option_from = inputType.value;
option_to = resultType.value;
function myResult() {

    option_from = inputType.value;
    option_to = resultType.value;
    if(option_from==="meter"&& option_to==="kilometer"){
        result.value = Number(input.value)*0.001;
    }
    else if(option_from==="meter"&& option_to==="centimeter"){
        result.value = Number(input.value)*100;
    }
    else if(option_from==="meter"&& option_to==="decimeter"){
        result.value = Number(input.value)*0.10;
    }
    else if(option_from==="meter"&& option_to==="meter"){
        result.value = input.value;
        
    }
    if(option_from==="kilometer"&& option_to==="meter"){
        result.value = Number(input.value)*1000;
    }
    else if(option_from==="kilometer"&& option_to==="centimeter"){
        result.value = Number(input.value)*100000;
    }
    else if(option_from==="kilometer"&& option_to==="decimeter"){
        result.value = Number(input.value)*1000;
    }
    else if(option_from==="kilometer"&& option_to==="kilometer"){
        result.value = input.value;

    }
    if(option_from==="centimeter"&& option_to==="meter"){
        result.value = Number(input.value)*0.01;
    }
    else if(option_from==="centimeter"&& option_to==="kilometer"){
        result.value = Number(input.value)*0.00001;
    }
    else if(option_from==="centimeter"&& option_to==="decimeter"){
        result.value = Number(input.value)*0.1;
    }
    else if(option_from==="centimeter"&& option_to==="centimeter"){
        result.value = input.value;

    }
    if(option_from==="decimeter"&& option_to==="meter"){
        result.value = Number(input.value)*0.1;
    }
    else if(option_from==="decimeter"&& option_to==="kilometer"){
        result.value = Number(input.value)*0.0001;
    }
    else if(option_from==="decimeter"&& option_to==="centimeter"){
        result.value = Number(input.value)*10;
    }
    else if(option_from==="decimeter"&& option_to==="decimeter"){
        result.value = input.value;

    }
}