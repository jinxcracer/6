var countdownTimer;
// Retrieve queuePosition from localStorage, default to 0 if not set
var queuePosition = localStorage.getItem("queuePosition") || 0;

function toggleFields() {
    // Toggle fields logic remains the same
}

function showChoices(event) {
    // showChoices function logic remains the same
}

function submitRegistrarForm(event) {
    event.preventDefault();
    var name = document.getElementById("registrarName").value;
    var lastName = document.getElementById("registrarLastName").value;
    document.getElementById("studentName").textContent = "Student: " + name + " " + lastName;
    document.getElementById("registrarForm").style.display = "none";
    document.getElementById("queueForm").style.display = "block";
    queuePosition++;
    // Store updated queuePosition in localStorage
    localStorage.setItem("queuePosition", queuePosition);
    startQueueTimer();
}

function submitCashierForm(event) {
    event.preventDefault();
    var name = document.getElementById("cashierName").value;
    var lastName = document.getElementById("cashierLastName").value;
    var studentNameElement = document.getElementById("studentName");
    studentNameElement.textContent = "Student: " + name + " " + lastName;

    var paymentType = document.getElementById("paymentType").value;
    var year = document.getElementById("year").value;
    var course = document.getElementById("course").value;

    document.getElementById("cashierForm").style.display = "none";
    document.getElementById("queueForm").style.display = "block";
    queuePosition++;
    // Store updated queuePosition in localStorage
    localStorage.setItem("queuePosition", queuePosition);
    startQueueTimer();
}

function startQueueTimer() {
    var count = 180; // 3 minutes
    var countdownElement = document.getElementById("countdown");
    countdownTimer = setInterval(function() {
        var minutes = Math.floor(count / 60);
        var seconds = count % 60;
        countdownElement.textContent = "Queueing time: " + minutes + "m " + seconds + "s";
        count--;
        if (count < 0) {
            clearInterval(countdownTimer);
            endQueue();
        }
    }, 1000);
}

function endQueue() {
    var positionElement = document.getElementById("position");
    positionElement.textContent = "Your position in the queue: " + queuePosition;
}

function requeue() {
    clearInterval(countdownTimer);
    startQueueTimer(); // Reset the timer
}

function leave() {
    window.close();
}

function goBack() {
    var onqTechContent = document.getElementById("onqTechContent");
    var registrarForm = document.getElementById("registrarForm");
    var cashierForm = document.getElementById("cashierForm");

    onqTechContent.style.display = "block";
    registrarForm.style.display = "none";
    cashierForm.style.display = "none";
}
