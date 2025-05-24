function myfunction(){
    var greeting;
    var time=new Date().getHours();
    if (time < 10){
        greeting="good morning"
    }
   else if (time < 20) {
        greeting = "good afternoon"
    }
    else  {
        greeting = "good evening"
    }
    document.getElementById("hour").innerHTML="The current time is:" + time;
    document.getElementById("greet").innerHTML=greeting;
}