let app = require('../utils/core');
let dataTables = require('../global/data-tables');
// console.log(dataTables);
let mustache = require('mustache');

const events = {
    loadDemo: () => {
        return fetch('/demo/events.json')
            .then(response => response.json())
            .then(data => {
                // console.info('Events demo data loaded', data);
                return dataTables.events.putAll(data);
            })
            .catch(error => {
                console.error(error);
            });
    },
    renderEvents: (selector) => {
        return dataTables.events.getAll()
            .then(data => {
                return fetch('/mustache/events.mst')
                .then(response => response.text())
                    .then(template => {
                        let list = { eventList: data };
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
module.exports = events;
