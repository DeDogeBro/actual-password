var password = "elvinistiny1!andbird^";
function passcheck(){

if(document.getElementById('pass1').value != password){
alert('wrong password try again :)');    
return false;
}  

if(document.getElementById('pass1').value == password){
    alert('you got it :D dont tell anybody :p');    
    }    
}
