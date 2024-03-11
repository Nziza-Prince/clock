let clock= document.getElementById("clock")
function clocked(){
    let date=new Date()
    hours=date.getHours().toString().padStart(2,0)
    minutes=date.getMinutes().toString().padStart(2,0)
    seconds=date.getSeconds().toString().padStart(2,0)
    
    let timeString=`${hours}:${minutes}:${seconds}`
    clock.textContent=timeString

   
}
function startTheClock(){
    clocked()
    starting=setInterval(clocked,1000);
}
function stopTheClock(){
   clearInterval(starting);
}

                          



