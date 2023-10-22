let app = require('../utils/core');
let dataTables = require('../global/data-tables');
// console.log(dataTables);
let mustache = require('mustache');

const members = {
    loadDemo: () => {
        return fetch('/demo/members.json')
            .then(response => response.json())
            .then(data => {
                // console.info('Members demo data loaded', data);
                return dataTables.members.putAll(data);
            })
            .catch(error => {
                console.error(error);
            });
    },
    renderMembers: (selector) => {
        return dataTables.members.getAll()
            .then(data => {
                return fetch('/mustache/members.mst')
                .then(response => response.text())
                    .then(template => {
                        let list = { memberList: data };
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
module.exports = members;
