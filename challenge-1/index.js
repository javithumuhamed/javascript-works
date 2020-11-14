function ageval()
{
var x=prompt("Enter  your Birthyear");
var age=(2020-x)*365;
var textAnswer= document.createTextNode("You are "+age+" days old");
var h1=document.createElement('h1')
h1.setAttribute('id','ageval');
h1.appendChild(textAnswer);
document.getElementById('agevalue').appendChild(h1);
}
function reset(){
    document.getElementById('agevalue').innerHTML='';

}
//// TODO: run this later
