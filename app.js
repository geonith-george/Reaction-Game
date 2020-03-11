function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function run() 
{
    reset();
    document.getElementById("reset1").disabled = true;
    document.getElementById("start").disabled = true;
    let i = 2;
    let words = ["Go","Set","Ready"]
    
    let wrdstart = setInterval(()=> {
        var n2 = document.getElementById("n").innerText= words[i];
        i--;
        if(i==-1){
            clearInterval(wrdstart);
        }
    },1000);

    let v = setInterval(() => { 
        document.getElementById("start").disabled = false;
        document.getElementById("reset1").disabled = false;
        document.getElementById("click").disabled = false;
        clearInterval(v);
        start();
        
    } ,getRndInteger(3500,7000));

}

// stopwatch 
var timeBegan = null
    , timeStopped = null
    , stoppedDuration = 0
    , started = null;

function start() {
    
    if (timeBegan === null) {
        timeBegan = new Date();
    }

    if (timeStopped !== null) {
        stoppedDuration += (new Date() - timeStopped);
    }

    started = setInterval(clockRunning, 10);	
}

function stop() {
    timeStopped = new Date();
    clearInterval(started);
    document.getElementById("start").disabled = true;
    document.getElementById("click").disabled = true;
}
 
function reset() {
    document.getElementById("n").innerText = "Come on";
    document.getElementById("start").disabled = false;
    clearInterval(started);
    stoppedDuration = 0;
    timeBegan = null;
    timeStopped = null;
    //document.getElementById("display-area").innerHTML = "00:00:00.000";
}

function clockRunning(){
    var currentTime = new Date()
        , timeElapsed = new Date(currentTime - timeBegan - stoppedDuration)
        , hour = timeElapsed.getUTCHours()
        , min = timeElapsed.getUTCMinutes()
        , sec = timeElapsed.getUTCSeconds()
        , ms = timeElapsed.getUTCMilliseconds();

    document.getElementById("n").innerHTML =
        (sec > 9 ? sec : "0" + sec) + ":" + 
        (ms > 99 ? ms : ms > 9 ? "0" + ms : "00" + ms);
};