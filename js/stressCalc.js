function calculateScaleScore() {
  let totalScore = 0;

  // Get all the radio buttons
  const radioButtons = document.querySelectorAll('input[type="radio"]:checked');

  // Iterate over each selected radio button
  radioButtons.forEach(radioButton => {
    // Add the value of the selected radio button to the total score
    totalScore += parseInt(radioButton.value, 10);
  });

  // Display the total score
  document.getElementById('result').textContent = "Total Score: " + totalScore;
}