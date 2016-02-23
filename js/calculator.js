function init() {
    var evaluate = document.getElementById('basic-calc');
    var evaluateTrip = document.getElementById('trip-calc');
    var bmiCalculate = document.getElementById('bmi-calc');
    var mortgageCalculator = document.getElementById('mortgage-calc')

  function basicCalculator (){
    var gNumber1 = Number(document.getElementById('basic-num-1').value);
    var gNumber2 = Number(document.getElementById("basic-num-2").value);
    var basicOperation = document.getElementById("basic-operation").value;
    var gAnswer = document.getElementById('basic-answer-alert');
    var total;

    switch(basicOperation) {
      case "+":
            var total = gNumber1 + gNumber2;
            break;
      case "-":
            var total = gNumber1 - gNumber2;
            break;
      case "*":
            var total = gNumber1 * gNumber2;
            break;
      case "/":
            var total = gNumber1 / gNumber2;
            break;
      };

      gAnswer.innerText = total;

    // console.log(total);
    // console.log(gNumber1);
    // console.log(gNumber2);
    // console.log(basicOperation);
  }
  evaluate.addEventListener("click", basicCalculator, false);

  // The basic calculator should just uses standard arithmetic to calculate the result.
  // The trip cost calculator should let you calculate the cost of a trip, taking into account that:
  // when the speed is less than 60, the formula is distance / mpg * cost
  // when the speed is more than 60, the formula is `distance / (mpg - (speed - 60) * 2) * cost
  function tripCalculator() {
    var distance = Number(document.getElementById('trip-distance').value);
    var mpg = Number(document.getElementById('trip-mpg').value);
    var cost = Number(document.getElementById('trip-cost').value);
    var speed = Number(document.getElementById('trip-speed').value);
    var tripAnswer = document.getElementById('trip-answer-alert');
    var tripCost;

    if (speed < 60) {
       tripCost = distance / mpg * cost;
    } else if (speed > 60) {
      tripCost = distance / (mpg - (speed - 60) * 2) * cost;
    };

    tripAnswer.innerText = tripCost;

    // console.log(distance);
    // console.log(mpg);
    // console.log(cost);
    // console.log(speed);

  }
  evaluateTrip.addEventListener("click", tripCalculator, false)



  function bmiCalculator(){
    var mass = Number(document.getElementById('bmi-mass').value);
    var height = Number(document.getElementById('bmi-height').value);
    var bmiAnswer = document.getElementById('bmi-answer-alert');
    var bmi;

      function getBmi(){
        bmi = mass / (height * height);
        return bmi;
      }
      getBmi();
      bmiAnswer.innerText = bmi;

  }
  bmiCalculate.addEventListener("click", bmiCalculator, false)


  function mortgageCalculate() {
    var loan = Number(document.getElementById('mortgage-loan').value);
    var apr = Number(document.getElementById('mortgage-apr').value);
    var term = Number(document.getElementById('mortgage-term').value);
    var mortgageAnswer = document.getElementById('mortgage-answer-alert');
    var aprOne = (1+apr);
    var monthlyMortgage;
    console.log(loan)
    console.log(apr)
    console.log(term)
    console.log(typeof termOne)
    console.log(typeof term)
    var power = function(base, exponent) {
      var result = 1;
      for (var count = 0; count < exponent; count++)
        result *= base;
      return result;
    };

    function getMortgageCost() {
      console.log("mortgage cost works!")
        return monthlyMortgage = loan * apr * (power(aprOne, term)) / (((power(aprOne, term)) - 1)
    }
    getMortgageCost();
    mortgageAnswer.innerText = monthlyMortgage;



  }
  mortgageCalculator.addEventListener("click", mortgageCalculate, false);

}
window.addEventListener("load",init,false);
