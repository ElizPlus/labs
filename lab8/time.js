function showTime() {
    let today = new Date();
    let currentTime = today.toLocaleTimeString('ru-RU');
    document.getElementById('time').innerHTML = currentTime;
}
setInterval(showTime, 1000);

let totalDegrees = 0;

    function showTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const timeString = `${hours}:${minutes}:${seconds}`;
        
        document.getElementById('time').textContent = timeString;
        document.getElementById('seconds').textContent = seconds;

        const secondHand = document.getElementById('second-hand');
        totalDegrees += 6; 
        secondHand.style.transform = `rotate(${totalDegrees}deg)`;
    }
    

setInterval(showTime, 1000);