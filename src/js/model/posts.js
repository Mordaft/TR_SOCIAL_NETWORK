let app = require('../utils/core');
const plugins = require('../utils/plugins');

let dataTables = require('../global/data-tables');
// console.log(dataTables);
let mustache = require('mustache');

const posts = {
    loadDemo: () => {
        return fetch('/demo/posts.json')
            .then(response => response.json())
            .then(data => {
                // console.info('posts demo data loaded', data);
                return dataTables.posts.putAll(data);
            })
            .catch(error => {
                console.error(error);
            });
    },
    renderPosts: (selector) => {
        return dataTables.posts.getAll()
            .then(data => {
                return fetch('/mustache/posts.mst')
                .then(response => response.text())
                    .then(template => {
                        let list = { postList: data };
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
module.exports = posts;
