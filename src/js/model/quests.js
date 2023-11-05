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
    renderQuestsTable: (selector) => {
        // console.info('Render Quests Table');
        return dataTables.quests.getAll()
            .then(data => {
                return fetch('/mustache/quests-table.mst')
                .then(response => response.text())
                    .then(template => {
                        let list = { allQuestsList: data };
                        let rendered = mustache.render(template, list);
                        // console.info('Render Quests Table', rendered);
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
    renderQuestsRelevant: (selector) => {
        // console.info('Render Quests Relevant');
        return dataTables.quests.getRelevant()
            .then(data => {
                return fetch('/mustache/quests-relevant.mst')
                .then(response => response.text())
                    .then(template => {
                        let list = { relevantQuestList: data };
                        let rendered = mustache.render(template, list);
                        // console.info('Render Quests Relevant', rendered);
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
