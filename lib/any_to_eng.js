import Translator from './translator';

Translator.updateAccess();

function maybeTranslate(text) {

  return (isEng) => {

    return new Promise((resolve, reject) => {

      if (isEng === false) {

        Translator.requestAPICall(() => {

          Translator.translateTo('en', text)
            .then(resolve)
            .catch(reject);
        });
      } else {
        reject(text);
      }
    });
  };
}

export default function maybeTranslateToEng(text) {

  return new Promise((resolve, reject) => {

    Translator.requestAPICall(() => {

      Translator.isLang('en', text)
        .then(maybeTranslate(text))
        .then(resolve)
        .catch(reject);
    });
  });
}
