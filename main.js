let startTime;
let endTime;

document.getElementById('startButton').addEventListener('click', function() {
    startTime = new Date().getTime(); // Start the stopwatch
    document.getElementById('startButton').style.display = 'none'; // Hide start button
    document.getElementById('stopButton').style.display = 'inline'; // Show stop button
});

document.getElementById('stopButton').addEventListener('click', function() {
    endTime = new Date().getTime(); // Stop the stopwatch
    document.getElementById('stopButton').style.display = 'none'; // Hide stop button
    document.getElementById('guessForm').style.display = 'block'; // Show the guess form
});

document.getElementById('guessForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    const guess = parseFloat(document.getElementById('guess').value);
    const timeElapsed = (endTime - startTime) / 1000; // Time in seconds

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `You guessed: ${guess} seconds. <br> Actual time: ${timeElapsed.toFixed(2)} seconds.`;
    
    // Reset
    document.getElementById('guessForm').style.display = 'none';
    document.getElementById('guess').value = '';
    document.getElementById('startButton').style.display = 'inline'; // Show start button again
});

// Change styles based on user selection
document.getElementById('bgColor').addEventListener('change', function() {
    document.body.style.backgroundColor = this.value;
});

document.getElementById('fontStyle').addEventListener('change', function() {
    document.body.style.fontFamily = this.value;
});

document.getElementById('buttonStyle').addEventListener('change', function() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.className = ''; // Clear any previous classes
        button.classList.add(this.value); // Apply selected style
    });
});
