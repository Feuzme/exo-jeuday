var num1;
var num2;
var operator = "";

var display = (btn) => {
    if (btn === 'clear') {
        document.getElementById('result').innerHTML = "";
        document.getElementById('num1').innerHTML = "";
        document.getElementById('num2').innerHTML = "";
        document.getElementById('op').innerHTML="";

    }else{        
        if(btn !== '*' && btn !== '/' && btn !== '-' && btn !== '+'){
            if (document.getElementById('op').innerHTML == "") {
                document.getElementById('num1').innerHTML += btn;
            } else {
                document.getElementById('num2').innerHTML += btn;
            }
        }else{              
            document.getElementById('op').innerHTML = btn;
        }
    }
}

var solve = () => {
    num1 = +document.getElementById('num1').innerHTML;
    num2 = +document.getElementById('num2').innerHTML;
    operator = document.getElementById('op').innerHTML
    switch (operator) {
        case '+':            
            document.getElementById('result').innerHTML = num1 + num2;
            break;
        case '-':
            document.getElementById('result').innerHTML = num1 - num2;
            break;
        case '*':
            document.getElementById('result').innerHTML = num1 * num2;
            break;
        case '/':
            if(num2!=0){
                document.getElementById('result').innerHTML = num1 / num2;
            } else {
                document.getElementById('result').innerHTML = "Math Error"
            }                
            break;        
    }
}