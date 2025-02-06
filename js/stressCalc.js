function calculateScaleScore() {
  let totalScore = 0;

  // Get all the checkbox buttons
  const checkBoxButtons = document.querySelectorAll('input[type="checkbox"]:checked');

  // Iterate over each selected radio button
  checkBoxButtons.forEach(checkBoxButton => {
    // Add the value of the selected checkbox button to the total score
    totalScore += parseInt(checkBoxButton.value, 10);
  });

  // Display the total score
  document.getElementById('result').textContent = "Total Score: " + totalScore;
}