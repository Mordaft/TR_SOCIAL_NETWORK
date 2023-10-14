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
                return fetch('/mustache/badge.mst')
                .then(response => response.text())
                    .then(template => {
                        list = { badgeList: data };
                        let rendered = mustache.render(template, list);
                        console.info('Render', rendered);
                        document.querySelector(selector).innerHTML = rendered;
                    })
                    .catch(error => {
                        console.error(error);
                    });
            })
            .catch(error => {
                console.error(error);
            });
    }    
}
module.exports = badges;
