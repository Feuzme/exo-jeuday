var num1 = 0;
var num2 = 0;
var operator = "";

var display = (btn) => {
    if (btn === 'clear') {
        document.getElementById('result').innerHTML = "";
        var num1 = 0;
        var num2 = 0;
        var operator = "";
    }else{        
        if(btn !== '*' && btn !== '/' && btn !== '-' && btn !== '+'){
            if (operator == "") {
                document.getElementById('result').innerHTML += btn;
                num1 += +btn
            } else {
                document.getElementById('result').innerHTML += btn;
                num2 += +btn
            }
        }else{
            operator = btn;   
            document.getElementById('result').innerHTML += btn;
        }
    }
}

var solve = () => {
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