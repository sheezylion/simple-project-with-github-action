// function calculateCost() {
//   const inputElement = document.querySelector(".js-input-cost");
//   let cost = Number(inputElement.value);
//   if (cost < 40) {
//     cost = cost + 10;
//   }
//   document.querySelector(".display").innerText = `$${cost}`;
// }

let tipAmount = 0;

function fivePercent() {
  const inputElement = document.querySelector('.dollar-value');
  const bill = Number(inputElement.value);

  const percent = bill * 0.05;

  const numOfPeople = document.getElementById('num-of-people').value;

  console.log('log', numOfPeople);
  if (!bill) {
    return alert('Please input your bill ');
  }
  if (!numOfPeople) {
    return alert('Please input the number of persons');
  }

  if (bill && numOfPeople) {
    tipAmount = Number(percent / numOfPeople).toFixed(2);

    // inputElement.value = Number(bill + percent).toFixed(2);

    document.querySelector('.tip-display').innerText = `$${tipAmount}`;
  }
}

function tenPercent() {
  const inputElement = document.querySelector('.dollar-value');
  let cost = inputElement.value;
  cost *= 0.1;
  document.querySelector('.tip-display').innerText = `$${cost.toFixed(2)}`;
}

function fifteenPercent() {
  const inputElement = document.querySelector('.dollar-value');
  let cost = inputElement.value;
  cost *= 0.15;
  document.querySelector('.tip-display').innerText = `$${cost.toFixed(2)}`;
}

function twentyfivePercent() {
  const inputElement = document.querySelector('.dollar-value');
  let cost = inputElement.value;
  cost *= 0.25;
  document.querySelector('.tip-display').innerText = `$${cost.toFixed(2)}`;
}

function fiftyPercent() {
  const inputElement = document.querySelector('.dollar-value');
  let cost = inputElement.value;
  cost *= 0.5;
  document.querySelector('.tip-display').innerText = `$${cost.toFixed(2)}`;
}

function onInputPeopleChange() {
  const dollarValue = document.querySelector('.dollar-value').value;
  const numOfPeople = document.getElementById('num-of-people').value;

  if (numOfPeople && dollarValue) {
    const totalPerPerson = parseFloat((dollarValue / numOfPeople).toFixed(2));
    document.querySelector('.person-display').innerText = `$${totalPerPerson}`;
  }
}

function onReset() {
  document.querySelector('.person-display').innerText = 0.0;
  document.querySelector('.tip-display').innerText = 0.0;
  document.querySelector('.dollar-value').value = '';
  document.getElementById('num-of-people').value = '';
}
