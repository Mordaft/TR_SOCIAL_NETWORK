import { I18n, TranslateOptions } from "i18n-js";

let t = new I18n();
const i18n= {
    loadTranslations: async function (options) {
        t.locale = 'es';
        
        const response = await fetch("/translations/es-ES.json");

        const translations = await response.json();
        t.store(translations);    
    },
    refreshTraslations: function () {
        document.querySelectorAll('[data-i18n]').forEach(function (element) {
            let key = element.getAttribute('data-i18n');
            console.log("refreshTraslations",element);
            let traslation = t.t(key);
            if (element.tagName === 'DIV') {
                if (element.children.length > 0) {
                    element.setAttribute("title", traslation);
                }
                else {
                    element.innerHTML = traslation;
                }
            }
            else if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.setAttribute("placeholder", traslation);
            }
            else if (element.tagName === 'I' || element.tagName === 'A' ) {
                element.setAttribute("title", traslation);
                element.setAttribute("data-title", traslation);
            }
            else element.innerHTML = traslation;
        });
    }

}

module.exports = i18n;