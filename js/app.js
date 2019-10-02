


let data = {
  buttonsArray: ["C", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '+', '-', '/', '*', '(', ')', '='],
  mainDOM: document.querySelector('#wrapper'),
  resultDOM: document.querySelector('#calculation-result'),

}

function init() {
  for (let i = 0; i < data.buttonsArray.length; i++) {
    data.mainDOM.insertAdjacentHTML('beforeend', `
            <input 
                class="button button__${data.buttonsArray[i]}" 
                readonly value="${data.buttonsArray[i]}
                
            ">
        `);
  }
}

init();

let arrButtons = document.querySelectorAll('.button');

console.log(arrButtons);

for (let i = 0; i < arrButtons.length; i++) {
  arrButtons[i].addEventListener('click', function () {
    if (arrButtons[i].value.trim() !== "=" && arrButtons[i].value.trim() !== "C") {
      data.resultDOM.value += arrButtons[i].value.trim()
    } else if (arrButtons[i].value.trim() === "C") {
      data.resultDOM.value = " "
    } else if (arrButtons[i].value.trim() === "=") {
      parseCalculation(data.resultDOM.value.trim())
    }
    console.log(arrButtons[i].value)
  })
}



//try some kind of tokens here to parse values
function parseCalculation(val) {
  let signs = ["*", "/", "+", "-"];         // signs in the order in which they should be evaluated
  let funcs = [multiply, divide, add, substraction];                 // the functions associated with the signs
  let tokens = val.split(/\b/);      // split the string into "tokens" (numbers or signs)

  //run through two-dimentional array
  for (let round = 0; round < signs.length; round++) {          // do this for every sign

    console.log("tokens at this point: " + tokens.join(" "));

    for (let place = 0; place < tokens.length; place++) {    // do this for every token
      if (tokens[place] == signs[round]) {                         // a sign is found
        let a = parseInt(tokens[place - 1]);    // convert previous token to number
        let b = parseInt(tokens[place + 1]);        // convert next token to number
        let result = funcs[round](a, b);
        console.log("calc: " + a + signs[round] + b + "=" + result);

        data.resultDOM.value = result;
        tokens[place - 1] = result.toString();      // store the result as a string
        tokens.splice(place--, 2);  // delete obsolete tokens and back up one place
      }
    }
  }

  return tokens[0];

  function multiply(x, y) {
    return x * y;
  }
  function add(x, y) {
    return x + y;
  }
  function divide(x, y) {
    return x / y;
  }
  function substraction(x, y) {
    return x - y;
  }
}


