let time = 86400;
let Timer=()=>{
    let hours=Math.floor(time/3600);
    let minutes = Math.floor((time % 3600) / 60);
    let seconds = time % 60;
    document.getElementById('timer').innerText=`Event Starts In: ${hours}h ${minutes}m ${seconds}s`;
    if (time > 0)
         time--;
}
setInterval(Timer, 1000);