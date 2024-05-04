function submitRegistrarForm(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var lastName = document.getElementById("lastName").value;
    document.getElementById("studentName").textContent = "Student: " + name + " " + lastName;
    document.getElementById("registrarForm").style.display = "none";
    document.getElementById("queueForm").style.display = "block";
    queuePosition++; // Increment queuePosition
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
    queuePosition++; // Increment queuePosition
    startQueueTimer();
}
