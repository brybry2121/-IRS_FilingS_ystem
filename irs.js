// Handle E-File Submission
document.getElementById('efileForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const fullName = document.getElementById('fullName').value;
    const ssn = document.getElementById('ssn').value;
    const income = document.getElementById('income').value;

    alert(`E-File Submitted!\n\nName: ${fullName}\nSSN: ${ssn}\nIncome: $${income}`);
});

// Handle Refund Tracking
document.getElementById('refundForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const trackingNumber = document.getElementById('trackingNumber').value;

    alert(`Tracking Refund for Number: ${trackingNumber}`);
});