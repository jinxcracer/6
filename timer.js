function submitRegistrarForm(event) {
    event.preventDefault();
    var name = document.getElementById("registrarName").value;
    var lastName = document.getElementById("registrarLastName").value;
    document.getElementById("studentName").textContent = "Student: " + name + " " + lastName;
    document.getElementById("registrarForm").style.display = "none";
    document.getElementById("queueForm").style.display = "block";
    startQueueTimer();
    // Generate a unique identifier for the device
    var deviceId = Date.now() + '-' + Math.floor(Math.random() * 1000);
    // Use the unique identifier to set the queue position
    var queuePosition = generateQueuePosition(deviceId);
    // Store updated queuePosition in localStorage
    localStorage.setItem("queuePosition", queuePosition);
    console.log("Queue position after submission:", queuePosition);
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
    startQueueTimer();
    // Generate a unique identifier for the device
    var deviceId = Date.now() + '-' + Math.floor(Math.random() * 1000);
    // Use the unique identifier to set the queue position
    var queuePosition = generateQueuePosition(deviceId);
    // Store updated queuePosition in localStorage
    localStorage.setItem("queuePosition", queuePosition);
    console.log("Queue position after submission:", queuePosition);
}

// Function to generate the queue position based on the device ID
function generateQueuePosition(deviceId) {
    // Calculate the queue position based on the device ID
    // This can be a simple calculation or a more complex algorithm depending on your requirements
    // For example, you could hash the device ID or use modulo division to generate a position within a range
    // Here, we'll use a simple calculation
    var position = parseInt(deviceId.slice(-4), 10) % 100; // Limit to 100 positions
    return position;
}
