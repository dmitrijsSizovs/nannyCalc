document.getElementById('calculate-btn').addEventListener('click', function() {
    const startTime = document.getElementById('start-time').value;
    const endTime = document.getElementById('end-time').value;
    const hourlyRate = document.getElementById('hourly-rate').value;

    const start = new Date(`01/01/2007 ${startTime}`);
    const end = new Date(`01/01/2007 ${endTime}`);

    if(end < start) {
        end.setDate(end.getDate() + 1);  // Handle crossing midnight
    }

    const hoursWorked = (end - start) / (1000 * 60 * 60);  // Convert from ms to hours
    var totalHours = Math.floor(((end - start) / 1000 / 60 / 60));
    var totalMinutes = Math.floor(((end - start) / 1000 / 60) % 60);

    const totalSalary = hoursWorked * hourlyRate;

    document.getElementById('result').innerText = `Total Salary: €${totalSalary.toFixed(2)}`;
    document.getElementById('hours').innerText = "You worked " + totalHours + " hour(s) and " + totalMinutes + " minute(s). Your salary: " + totalSalary.toFixed(3) + "€";
});
