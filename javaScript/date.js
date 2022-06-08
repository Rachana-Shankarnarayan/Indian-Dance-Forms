

function timeMonitor() {
    var r = new Date();
    var ampm = r.getHours( ) >= 12 ? ' PM' : ' AM';
    hours = r.getHours( ) % 12;
    hours = hours ? hours : 12;
    hours=hours.toString().length==1? 0+hours.toString() : hours;
    
    var minutes=r.getMinutes().toString()
    minutes=minutes.length==1 ? 0+minutes : minutes;
    
    var seconds=r.getSeconds().toString()
    seconds=seconds.length==1 ? 0+seconds : seconds;
    
    var month=(r.getMonth() +1).toString();
    month=month.length==1 ? 0+month : month;
    
    var nowDate=r.getDate().toString();
    nowDate=nowDate.length==1 ? 0+nowDate : nowDate;
    
    var currentDate=month + "/" + nowDate + "/" + r.getFullYear(); 
    currentDate = currentDate + " - " +  hours + ":" +  minutes + ":" +  seconds + " " + ampm;
    document.getElementById("time").innerHTML = currentDate;
    timeChange();
     }



     function timeChange(){
    var delay=1000; // Refresh rate in milli seconds
    runningTime=setTimeout(timeMonitor(),delay);
    }
 

