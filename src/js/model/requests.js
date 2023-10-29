let app = require('../utils/core');
const plugins = require('../utils/plugins');

let dataTables = require('../global/data-tables');
// console.log(dataTables);
let mustache = require('mustache');

const requests = {
    loadDemo: () => {
        return fetch('/demo/requests.json')
            .then(response => response.json())
            .then(data => {
                // console.info('requests demo data loaded', data);
                return dataTables.requests.putAll(data);
            })
            .catch(error => {
                console.error(error);
            });
    },
    renderRequests: (selector) => {
        return dataTables.requests.getAll()
            .then(data => {
                return fetch('/mustache/requests.mst')
                .then(response => response.text())
                    .then(template => {
                        let list = { requestList: data };
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
module.exports = requests;
