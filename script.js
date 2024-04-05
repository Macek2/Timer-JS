function updateCountdown(targetID, interval) {
        const currentTime = new Date();
        let currentHour = currentTime.getHours();
        let currentMinutes = currentTime.getMinutes();
        let currentSeconds = currentTime.getSeconds();

        let timeFromOne = currentHour * 60 + currentMinutes - 60;
                if (timeFromOne < 0) {
                        timeFromOne += 24 * 60;
                }

        let remainingTime = (interval - (timeFromOne % interval)) - 1;
        let remainingSeconds = 59 - currentSeconds;

        let totalMinutes = currentMinutes + remainingTime + 1;
        let endHour = (currentHour + Math.floor(totalMinutes / 60)) % 24;
        let endMinutes = totalMinutes % 60;


        // Poprawa warunku dla resetowania interwału
        if (currentHour === 1 && currentMinutes === 0 && currentSeconds === 0) {
                remainingTime = interval;
                remainingSeconds = 60;
        }

        if(currentHour === 0 && currentMinutes === 0 && currentSeconds === 0){
                remainingTime=60;
        }

        document.getElementById(targetID).textContent = ("0" + Math.floor(remainingTime / 60)).slice(-2) + ":" + ("0" + (remainingTime % 60)).slice(-2) + ":" + ("0" + remainingSeconds).slice(-2);

        document.getElementById("current-time").textContent = "Aktualna godzina: " + ("0" + currentHour).slice(-2) + ":" + ("0" + currentMinutes).slice(-2) + ":" + ("0" + currentSeconds).slice(-2);
        document.getElementById("expected-time" + targetID.charAt(targetID.length - 1)).textContent = ("0" + endHour).slice(-2) + ":" + ("0" + endMinutes).slice(-2);

        if (remainingTime < 5) {
                document.getElementById("color" + targetID.charAt(targetID.length - 1)).style.backgroundColor = "#8B0000";
        } else if (remainingTime === interval - 1) {
                document.getElementById("color" + targetID.charAt(targetID.length - 1)).style.backgroundColor = "green";
        } else {
                document.getElementById("color" + targetID.charAt(targetID.length - 1)).style.backgroundColor = "";
        }
}
setInterval(function() {
        updateCountdown("remaining-time1", 10);
        updateCountdown("remaining-time2", 15);
        updateCountdown("remaining-time3", 30);
        updateCountdown("remaining-time4", 45);
        updateCountdown("remaining-time5", 50);
        updateCountdown("remaining-time6", 60);
        updateCountdown("remaining-time7", 80);
        updateCountdown("remaining-time8", 90);
}, 1000);
