<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Disease Tracker</title>
  <style>
    body {
      font-family: 'Arial', sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
    }

    h1 {
      color: #333;
    }

    label {
      font-size: 1.2rem;
      margin-top: 10px;
    }

    input {
      padding: 8px;
      margin-bottom: 15px;
      font-size: 1rem;
    }

    button {
      background-color: #3498db;
      color: #fff;
      padding: 10px 15px;
      font-size: 1.2rem;
      border: none;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    button:hover {
      background-color: #2980b9;
    }

    h2 {
      color: #333;
      margin-top: 20px;
    }

    p {
      font-size: 1.2rem;
      margin: 5px 0;
    }

    span {
      font-weight: bold;
      color: #e74c3c;
    }
  </style>
</head>
<body>

  <h1>Disease Tracker for Mumbai, India</h1>
  
  <label for="dengueCases">Dengue Cases:</label>
  <input type="number" id="dengueCases" value="0">
  
  <label for="malariaCases">Malaria Cases:</label>
  <input type="number" id="malariaCases" value="0">

  <button onclick="updateCases()">Update Cases</button>

  <h2>Current Statistics:</h2>
  <p>Total Dengue Cases: <span id="currentDengueCases">0</span></p>
  <p>Total Malaria Cases: <span id="currentMalariaCases">0</span></p>

  <script>
    let diseaseData = {
      dengue: 0,
      malaria: 0
    };

    function updateCases() {
      const dengueInput = document.getElementById('dengueCases');
      const malariaInput = document.getElementById('malariaCases');

      const newDengueCases = parseInt(dengueInput.value);
      const newMalariaCases = parseInt(malariaInput.value);

      diseaseData.dengue += newDengueCases;
      diseaseData.malaria += newMalariaCases;

      updateDisplay();

      // Check for a rise in cases and send alerts if needed
      checkAlert(newDengueCases, newMalariaCases);
    }

    function updateDisplay() {
      document.getElementById('currentDengueCases').textContent = diseaseData.dengue;
      document.getElementById('currentMalariaCases').textContent = diseaseData.malaria;
    }

    function checkAlert(newDengueCases, newMalariaCases) {
      // Set a threshold for the alert
      const alertThreshold = 10;

      if (newDengueCases > alertThreshold || newMalariaCases > alertThreshold) {
        alert('Alert: There is a rise in cases in Mumbai, India. Take necessary precautions.');
      }
    }
  </script>

</body>
</html>
