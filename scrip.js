// function calculateCost() {
//   const inputElement = document.querySelector(".js-input-cost");
//   let cost = Number(inputElement.value);
//   if (cost < 40) {
//     cost = cost + 10;
//   }
//   document.querySelector(".display").innerText = `$${cost}`;
// }

function fivePercent() {
  const inputElement = document.querySelector(".dollar-value");
  let cost = inputElement.value;
  cost *= 0.05;
  document.querySelector(".tip-display").innerText = `$${cost}`;
}

function tenPercent() {
  const inputElement = document.querySelector(".dollar-value");
  let cost = inputElement.value;
  cost *= 0.1;
  document.querySelector(".tip-display").innerText = `$${cost}`;
}

function fifteenPercent() {
  const inputElement = document.querySelector(".dollar-value");
  let cost = inputElement.value;
  cost *= 0.15;
  document.querySelector(".tip-display").innerText = `$${cost}`;
}

function twentyfivePercent() {
  const inputElement = document.querySelector(".dollar-value");
  let cost = inputElement.value;
  cost *= 0.25;
  document.querySelector(".tip-display").innerText = `$${cost}`;
}

function fiftyPercent() {
  const inputElement = document.querySelector(".dollar-value");
  let cost = inputElement.value;
  cost *= 0.5;
  document.querySelector(".tip-display").innerText = `$${cost}`;
}
