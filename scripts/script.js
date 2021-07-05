'use strict';

const btnTranslate = document.getElementById('btn-translate');

const userInput = document.getElementById('user-input');

const output = document.getElementById('output');

const url = 'https://api.funtranslations.com/translate/minion.json';
//functions

const clickHandler = function () {
  const textToTranslate = userInput.value;
  //calling server
  fetch(getTranslationURL(textToTranslate))
    .then((response) => response.json())
    .then((json) => {
      let translatedText = json.contents.translated;
      output.innerText = translatedText;
    })
    .catch(errorHandler);
};

const getTranslationURL = function (text) {
  return url + '?text=' + text;
};

const errorHandler = function (error) {
  console.log('error occurred', error);
};

btnTranslate.addEventListener('click', clickHandler);
