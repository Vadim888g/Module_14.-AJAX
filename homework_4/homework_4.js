function pageLoaded() {
  const input = document.querySelector("#input");
  const input_2 = document.querySelector("#input_2");
  const btn = document.querySelector("#button");
  const output = document.querySelector("#output");
  
  function sendRequest() {
    if (input.value !== '' && input_2.value !== '' && input.value >= 100 && input.value <= 300 && input_2.value >= 100 && input_2.value <= 300) {
      fetch(`https://picsum.photos/${input.value}/${input_2.value}`)
      .then(response => {
        let output = `
      <img src="https://picsum.photos/${input.value}/${input_2.value}"/>
    `
    return output;
      })
      .then(data => {
        writeOutput(formatOutput(data));
      })
    } else {
        output.innerHTML = `<p>Одно из чисел вне диапазона от 100 до 300</p>`
    }
  }
  
  function formatOutput(data) {
    let output = `
      <img src="https://picsum.photos/${input.value}/${input_2.value}"/>
    `
    return output;
  }
  
  function writeOutput(message) {
    output.innerHTML = message;
    }
  
  
  btn.addEventListener("click", sendRequest);
}

document.addEventListener("DOMContentLoaded", pageLoaded);