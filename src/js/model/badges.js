let app = require('../utils/core');
const plugins = require('../utils/plugins');

let dataTables = require('../global/data-tables');
// console.log(dataTables);
let mustache = require('mustache');

const badges = {
    loadDemo: () => {
        return fetch('/demo/badges.json')
            .then(response => response.json())
            .then(data => {
                // console.info('Badges demo data loaded', data);
                return dataTables.badges.putAll(data);
            })
            .catch(error => {
                console.error(error);
            });
    },
    renderBadges: (selector) => {
        return dataTables.badges.getAll()
            .then(data => {
                return fetch('/mustache/badges.mst')
                .then(response => response.text())
                    .then(template => {
                        let list = { badgeList: data };
                        let rendered = mustache.render(template, list);
                        // console.info('Render', rendered);
                        let element = document.querySelector(selector);
                        element.innerHTML = rendered;
                        badges.createProgressBars(selector);
                    })
                    .catch(error => {
                        console.error(error);
                    });
            })
            .catch(error => {
                console.error(error);
            });
    },
    createProgressBars: (selector) => {
        let topElement = document.querySelector(selector);
        // console.log("createProgressBars 1", topElement);
        topElement.querySelectorAll('.progress-stat').forEach(function (parentElement) {;
            // console.log("createProgressBars 2", parentElement);
            let element = parentElement.querySelector('.din-progress-stat-bar');
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
module.exports = badges;
