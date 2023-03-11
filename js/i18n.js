import { i18n_strings } from './i18n_strings.js';

var language = 'es';

function replaceAll(obj) {
  for (var key in obj) {
    console.log(key, obj[key]);
    var element = document.getElementById(key);
    if (element) {
      element.innerHTML = obj[key];
    }
  }
}

var i18n = i18n_strings.en;

if (language == 'es') {
  i18n = i18n_strings.es;
}
replaceAll(i18n);

export { i18n };
