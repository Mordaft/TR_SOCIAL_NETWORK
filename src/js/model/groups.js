let app = require('../utils/core');
let dataTables = require('../global/data-tables');
// console.log(dataTables);
let mustache = require('mustache');

const groups = {
    loadDemo: () => {
        return fetch('/demo/groups.json')
            .then(response => response.json())
            .then(data => {
                // console.info('Groups demo data loaded', data);
                return dataTables.groups.putAll(data);
            })
            .catch(error => {
                console.error(error);
            });
    },
    renderGroups: (selector) => {
        return dataTables.groups.getAll()
            .then(data => {
                return fetch('/mustache/groups.mst')
                .then(response => response.text())
                    .then(template => {
                        let list = { groupList: data };
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
    }    
}
module.exports = groups;
