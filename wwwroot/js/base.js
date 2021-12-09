(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    var weddingday = "08/14/2023";

    const countDown = new Date(weddingday).getTime(),
        x = setInterval(function () {

            const now = new Date().getTime(),
                distance = countDown - now;

            if (document.getElementById("days") == null)
                return;

            document.getElementById("days").innerText = Math.floor(distance / (day)),
                document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)).toString().padStart(2, "0"),
                document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)).toString().padStart(2, "0"),
                document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second).toString().padStart(2, "0");

            if (distance < 0) {
                document.getElementById("headline").innerText = "To już dzisiaj!";
                document.getElementById("countdown").style.display = "none";
                document.getElementById("content").style.display = "block";
                clearInterval(x);
            }
        }, 0)
}());