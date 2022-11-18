var num = document.getElementById('innerNUm');
var incBtn = document.getElementById('inc');
var decBtn = document.getElementById('dec');


var counter = 0;
incBtn.addEventListener('click',(event)=>{
    counter++;
    num.innerHTML = counter;
})


decBtn.addEventListener('click',(event)=>{
    counter--;
    num.innerHTML = counter;
})
