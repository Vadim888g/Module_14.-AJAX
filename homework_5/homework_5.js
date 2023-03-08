function useRequest(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    
    xhr.onload = function() {
      if (xhr.status != 200) {
        console.log('Статус ответа: ', xhr.status);
      } else {
        const result = JSON.parse(xhr.response);
        if (callback) {
          callback(result);
        }
      }
    };
    
    xhr.onerror = function() {
      console.log('Ошибка! Статус ответа: ', xhr.status);
    };
    
    xhr.send();
  };

  const resultNode = document.querySelector('.j-result');
  
  const btnNode = document.querySelector('.j-btn-request');

  const input = document.querySelector(".input");

  const input_2 = document.querySelector(".input_2");
  
  function displayResult(apiData) {
    let cards = '';
    
    apiData.forEach(item => {
      const cardBlock = `
        <div class="card">
          <img
            src="${item.download_url}"
            class="card-image"
          />
          <p>${item.author}</p>
        </div>
      `;
      cards = cards + cardBlock;
    });
      
    resultNode.innerHTML = cards;
  }
  
  btnNode.addEventListener('click', () => {
    if (input.value === '' || input.value > 10 || input.value < 1) {
    resultNode.innerHTML = "Номер страницы вне диапазона от 1 до 10"} else if (input_2.value === '' || input_2.value > 10 || input_2.value < 1) {
    resultNode.innerHTML = "Лимит вне диапазона от 1 до 10"} else {
    useRequest(`https://picsum.photos/v2/list?page=${input.value}&limit=${input_2.value}`, displayResult);
    localStorage.setItem("myKey", "myValue")
  }})


  addEventListener("onload", () => {
    localStorage.getItem("myKey")
  })

  


  