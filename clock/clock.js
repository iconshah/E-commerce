


//  var hrs = getTime();   

//  console.log(hrs);


function displayTime() {
    var time = new Date();
    var hrs = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    
    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = min;
    document.getElementById("seconds").innerHTML = sec;
    session = document.getElementById("session").innerHTML;
    
}
setInterval(displayTime, 10);
