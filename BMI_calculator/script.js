function calculate() {
    const weight = parseFloat(document.getElementById("weightInput").value);
    const height = parseFloat(document.getElementById("heightInput").value);
  
    if (isNaN(weight) || weight <= 0 || isNaN(height) || height <= 0) {
      document.getElementById("results").innerHTML =
        "Please enter the valid input";
      return 0;
    }
    const heightM = height / 100;
    const bmi = (weight / (heightM * heightM)).toFixed(1);
  
    let measure;
  
    if (bmi <= 18.4) {
      measure = ` Your BMI is ${bmi} , which means your underweight`;
    } else if (bmi <= 24.9) {
      measure = `Your BMI is ${bmi}, which means your are Normal`;
    } else if (bmi <= 29.9) {
      measure = `Your BMI is ${bmi}, which means you are Overweight.`;
    } else {
      measure = `Your BMI is ${bmi}, which means you are Obese.`;
    }
  
    document.getElementById("results").innerHTML = measure;
  }
  