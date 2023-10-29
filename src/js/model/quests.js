let app = require('../utils/core');
const plugins = require('../utils/plugins');

let dataTables = require('../global/data-tables');
// console.log(dataTables);
let mustache = require('mustache');

const quests = {
    loadDemo: () => {
        return fetch('/demo/quests.json')
            .then(response => response.json())
            .then(data => {
                // console.info('quests demo data loaded', data);
                return dataTables.quests.putAll(data);
            })
            .catch(error => {
                console.error(error);
            });
    },
    renderQuests: (selector) => {
        return dataTables.quests.getAll()
            .then(data => {
                return fetch('/mustache/quests.mst')
                .then(response => response.text())
                    .then(template => {
                        let list = { questList: data };
                        let rendered = mustache.render(template, list);
                        // console.info('Render', rendered);
                        let element = document.querySelector(selector);
                        element.innerHTML = rendered;
                    })
                    .catch(error => {
                        console.error(error);
                    });
            })
            .catch(error => {
                console.error(error);
            });
    }, 
}
module.exports = quests;
