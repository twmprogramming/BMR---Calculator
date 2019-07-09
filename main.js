
document.querySelector("#calcBtn").addEventListener('click',()=>{
    let weight =parseInt(document.querySelector('#weight').value),
    hourlySpan = document.querySelector('#hourlyBMR'),
    dailySpan = document.querySelector('#dailyBMR'),
    hourlyBMR,
    dailyBMR;

    const menMult = 11;

    hourlySpan.innerHTML = `Hourly Calories Expened: ${(weight * menMult / 24).toFixed(2)}`;
    dailySpan.innerHTML = `Daily Calories Expended: ${weight * menMult}`;

});