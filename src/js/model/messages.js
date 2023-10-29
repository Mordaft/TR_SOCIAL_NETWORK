let app = require('../utils/core');
const plugins = require('../utils/plugins');

let dataTables = require('../global/data-tables');
// console.log(dataTables);
let mustache = require('mustache');

const messages = {
    loadDemo: () => {
        return fetch('/demo/messages.json')
            .then(response => response.json())
            .then(data => {
                // console.info('messages demo data loaded', data);
                return dataTables.messages.putAll(data);
            })
            .catch(error => {
                console.error(error);
            });
    },
    renderMessages: (selector) => {
        return dataTables.messages.getAll()
            .then(data => {
                return fetch('/mustache/messages.mst')
                .then(response => response.text())
                    .then(template => {
                        let list = { messageList: data };
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
module.exports = messages;
