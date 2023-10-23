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
                console.info('Badges demo data loaded', data);
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
                        // element.querySelectorAll('.progress-stat-bar').forEach((badge) => {
                            
                        // }
                    })
                    .catch(error => {
                        console.error(error);
                    });
            })
            .catch(error => {
                console.error(error);
            });
    },
    renderProgressBars: (selector) => {

    }    
}
module.exports = badges;
