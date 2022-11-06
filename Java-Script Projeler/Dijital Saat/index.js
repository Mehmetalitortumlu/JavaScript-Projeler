

function GetTime(){
    var nov = new Date();
    var hour = nov.getHours();
    var minute = nov.getMinutes();
    var second= nov.getSeconds();

    var day = nov.getDate();
    var month=nov.getMonth()+1;
    var year= nov.getFullYear();

    document.getElementById("hour").innerText=hour
    document.getElementById("minute").innerText=minute
    document.getElementById("second").innerText=second  
    document.getElementById("date").innerText=(day+" /" + month + "/ " + year)  

}
setInterval(function(){GetTime();},1000)