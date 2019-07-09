class UI {
  static calculateBMR() {
    const menMultiplier = 11;

    let weight = parseInt(document.querySelector("#weight").value),
      hourlySpan = document.querySelector("#hourlyBMR"),
      dailySpan = document.querySelector("#dailyBMR"),
      hourlyBMR = (weight * menMultiplier) / 24,
      dailyBMR = weight * menMultiplier;

    hourlySpan.innerHTML = `Hourly Calories Expened: ${hourlyBMR.toFixed(2)}`;

    dailySpan.innerHTML = `Daily Calories Expended: ${dailyBMR}`;
    
  }
}

document.querySelector("#calcBtn").addEventListener("click", UI.calculateBMR);
