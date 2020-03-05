//var a;

//a = "ABC";

//console.log(a.replace ("A", "T").replace("B","N"))

/*var x = myFunction(4,3)

function myFunction(a, b) {
    return a * b;   // The function returns the product of p1 and p2
  }
  console.log(x)

*/
//var l = window.prompt("Enter Length: ");
//var w = window.prompt("Enter width: ");


function recArea(l, w) 
{

    return l * w;  
}

function squareArea(l) 
{

    return l * l;  
}

console.log(recArea(4, 9));
console.log(squareArea(4));


function fahrenheitCelius(f) 
{
    // var c = (f - 32) * 5/9;
    // return c;  

    return (f - 32) * (5 / 9);
}

console.log(Math.round(fahrenheitCelius(4)));

var currentTime = new Date ( );

var currentHours = currentTime.getHours ( );
var currentMinutes = currentTime.getMinutes ( );
var currentSeconds = currentTime.getSeconds ( );

currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;
