import Translator from './translator';

const LANG = process.env.TRANSLATE_TO;

Translator.updateAccess();

function maybeTranslate(text) {

  return (isEng) => {

    return new Promise((resolve, reject) => {

      if (isEng === false) {

        Translator.requestAPICall(() => {

          Translator.translateTo(LANG, text)
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

      Translator.isLang(LANG, text)
        .then(maybeTranslate(text))
        .then(resolve)
        .catch(reject);
    });
  });
}
