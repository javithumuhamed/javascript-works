function randomgem(){
   var array=['rock','paper','scissor'];
   return array[Math.floor(Math.random()*3)];
}
function gaming(yourchoice)
{
   var humanchoice , botchoice;   
   humanchoice=yourchoice.id;
   botchoice=randomgem();
   var results= declarewinner(humanchoice,botchoice);
   printResult(humanchoice,botchoice,results);
}


function printResult(hc,bc,result)
{
   //database for images
   var imagedoc={
      rock: document.getElementById('rock').src,
      paper: document.getElementById('paper').src,
      scissor: document.getElementById('scissor').src   
   };
   //lets remove everything first
   document.getElementById('rock').remove();
   document.getElementById('paper').remove();
   document.getElementById('scissor').remove();


   console.log(typeof(imagedoc));
  
   var humandiv=document.createElement('div');
   var botdiv=document.createElement('div');
   var messagediv=document.createElement('div');
   var messageval=messagefinal(result);
   humandiv.innerHTML="<img src='" + imagedoc[hc]+"'"+"style='box-shadow:0px 0px 20px 20px rgba(0,238,255,0.65)'"+ ">";
   botdiv.innerHTML="<img src='"+ imagedoc[bc]+"'"+"style='box-shadow:0px 0px 20px 20px rgba(255,0,153,1)'"+">";
   messagediv.innerHTML="<h1 style=padding:30px;font-size:50px;color:"+messageval['color']+";>"+messageval['message']+"</h1>";
   document.getElementById('boxer-content').appendChild(humandiv);
   document.getElementById('boxer-content').appendChild(messagediv);   
   document.getElementById('boxer-content').appendChild(botdiv);     
}
function declarewinner(humanc,botc){
   var database={
      rock:{'scissor':1,'rock':0.5,'paper':0},
      paper:{'scissor':0,'rock':1,'paper':0.5},
      scissor:{'scissor':0.5,'rock':0,'paper':1}
   }
   var score=database[humanc][botc];
   return score;
}
function messagefinal(numvalue){
   if (numvalue==0){
      return {
         'message': 'You Lose',
         'color':'Red'
      }
   }
   else if (numvalue==0.5){
      return {
         'message': 'Tie',
         'color':'Yellow'
      }
   }
   else if( numvalue==1){
      return {
         'message': 'You Won',
         'color': 'Green'
      }
   }
}
