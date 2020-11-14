var all_button=document.getElementsByTagName('button');
var copyAllButtons=[];
console.log(all_button.length)
for (let i=0;i < all_button.length;i++)

{
    copyAllButtons.push(all_button[i].classList[1]);
}
console.log(all_button);
console.log(copyAllButtons);
 function buttonColorChange(buttonthingy){
    
     if (buttonthingy.value ==='red'){
         buttonRed();
     }
     if (buttonthingy.value ==='green'){
         buttonGreen();
     }
     if (buttonthingy.value ==='reset'){
        buttonreset();
    }
    if (buttonthingy.value ==='random'){
        buttonrandom();
    }
 }
 function buttonRed(){
    for (let i =0;i<all_button.length;i++){
        all_button[i].classList.remove(all_button[i].classList[1])
        all_button[i].classList.add("btn-danger")
    }
 }
 function buttonGreen(){
    for (let i =0;i<all_button.length;i++){
        all_button[i].classList.remove(all_button[i].classList[1])
        all_button[i].classList.add("btn-success")
    }
 }
 function buttonrandom(){
    var choice =[, "btn-danger","btn-primary","btn-warning","btn-success"];
    
    for (let i =0;i<all_button.length;i++){
        let randomvalue =Math.floor(Math.random()*5)
        all_button[i].classList.remove(all_button[i].classList[1])
        all_button[i].classList.add(choice[randomvalue])
    }
 }
 function buttonreset(){
    for (let i =0;i<all_button.length;i++){
        all_button[i].classList.remove(all_button[i].classList[1])
        all_button[i].classList.add(copyAllButtons[i])
    }
 }