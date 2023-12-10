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
                return fetch('/mustache/questsTable.mst')
                .then(response => response.text())
                    .then(template => {
                        let list = { allQuestsList: data };
                        let rendered = mustache.render(template, list);
                        // console.info('Render Quests Table', rendered);
                        let element = document.querySelector(selector);
                        element.innerHTML = rendered;
                        quests.createQuestProgressBars(selector);
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
                return fetch('/mustache/questsRelevant.mst')
                .then(response => response.text())
                    .then(template => {
                        let list = { relevantQuestList: data };
                        let rendered = mustache.render(template, list);
                        // console.info('Render Quests Relevant', rendered);
                        let element = document.querySelector(selector);
                        element.innerHTML = rendered;
                        quests.createQuestProgressBars(selector);
                    })
                    .catch(error => {
                        console.error(error);
                    });
            })
            .catch(error => {
                console.error(error);
            });
    }, 
    createQuestProgressBars: (selector) => {
        let topElement = document.querySelector(selector);
        // console.log("createProgressBars 1", topElement);
        topElement.querySelectorAll('.progress-stat').forEach(function (parentElement) {;
            // console.log("createProgressBars 2", parentElement);
            let element = parentElement.querySelector('.progress-stat-bar');
            if (element != null) {
                // console.log("createProgressBars 3", element);
                plugins.createProgressBar({
                    container: '#' + element.id,
                    height: 4,
                    lineColor: '#293249'
                });
                
                plugins.createProgressBar({
                    container: '#' + element.id,
                    height: 4,
                    gradient: {
                    colors: ['#40d04f', '#d9ff65']
                    },
                    scale: {
                    start: 0,
                    end: 100,
                    stop: element.getAttribute('data-progress-bar')
                    },
                    animateOnScroll: true
                });
            }
        });
    }
    

}
module.exports = quests;
