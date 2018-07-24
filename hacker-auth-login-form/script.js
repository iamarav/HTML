//function to change text on button
function changeTxt(fn){
    document.getElementById("btn").value =fn;
}

//function to show typewriter effect in elements
var i = 0;
var txt = 'AUTHENTICATION REQUIRED';
var speed = 50;


function typeWriter() {
    
  if (i < txt.length) {

    document.getElementById("heading").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

//function to generate two random numbers
function gen(){
    
    var a = Math.random()*10;
    var b = Math.random()*10;
    
    a = parseInt(a);
    b = parseInt(b);
    
    document.getElementById("num1").innerHTML= a;
    document.getElementById("num2").innerHTML= b;
        
}

//function to verify the output captcha (addition of a and b)
function verify(a,b){
        
        a = document.getElementById("num1").innerHTML;
        b = document.getElementById("num2").innerHTML;

        a = parseInt(a); //parsing string to int
        b = parseInt(b); //parsing string to int
     
        res = a+b; //result
            
                //if result is OK
        if(document.getElementById("result").value == res){
            document.getElementById("btn").disabled = false;
            document.getElementById("btn").style.background='#000';
            document.getElementById("btn").style.color='#0f0';
            document.getElementById("btn").style.cursor='pointer';
            document.getElementById("btn").style.border='#0f0 2px solid';

            changeTxt('Validate');

        }
            
            //else show error
        else{
            document.getElementById("btn").disabled = true;
            document.getElementById("btn").style.background='#000';
            document.getElementById("btn").style.color='#f00';
            document.getElementById("btn").style.cursor='no-drop';
            document.getElementById("btn").style.border='#f00 2px solid';
            changeTxt('Error');

        }
}


//function to initialise all other functions when body loads
function initialise(){
    document.getElementById("btn").disabled = true;
    document.getElementById("btn").style.cursor='no-drop';
    typeWriter(); //initialise typewriter effect
    gen(); //calling function to generate two random numbers
}
