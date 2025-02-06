function calculateScaleScore() {
  let totalScore = 0;

  // Get all the checkbox buttons on the page
  const checkBoxButtons = document.querySelectorAll('input[type="checkbox"]:checked');

  // Iterate over each checked checkbox button
  checkBoxButtons.forEach(checkBoxButton => {
    // Add the value of each selected checkbox button to the total score
    totalScore += parseInt(checkBoxButton.value, 10);
  });

  // Display the total score
  document.getElementById('result').textContent = "Total Score: " + totalScore;
}