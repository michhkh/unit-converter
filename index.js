let lengthUnit = document.getElementById("length-unit");
let volumeUnit = document.getElementById("volume-unit");
let massUnit = document.getElementById("mass-unit");
let input = prompt("Enter a number");
let number = (document.getElementById("num1").textContent = input);
// let number = 20

function calculateLength() {
  let metersToFeet = number * 3.28084; //variable that calculates meters to feet depending on input number
  let feetToMeters = number / 3.28084; //variable that calculates feet to meters depending on input number

  // Uses the variables to display the results to the lengthUnit element
  lengthUnit.textContent =
    input +
    " meters = " +
    metersToFeet.toFixed(3) +
    " feet" +
    " | " +
    input +
    " feet = " +
    feetToMeters.toFixed(3) +
    " meters";
}

function calculateVolume() {
  let gallonsToLiters = number * 3.78541;
  let litersToGallons = number / 3.78541;

  // Uses the variables to display the results to the volumeUnit element
  volumeUnit.textContent =
    input +
    " gallons = " +
    gallonsToLiters.toFixed(3) +
    " Liters" +
    " | " +
    input +
    " Liters = " +
    litersToGallons.toFixed(3) +
    " gallons";
}

function calculateMass() {
  let kilosToPounds = number * 2.20462;
  let poundsToKilos = number / 2.20462;

  // Uses the variables to display the results to the massUnit element
  massUnit.textContent =
    input +
    " kilos = " +
    kilosToPounds.toFixed(3) +
    " pounds" +
    " | " +
    input +
    " pounds = " +
    poundsToKilos.toFixed(3) +
    " kilos";
}
