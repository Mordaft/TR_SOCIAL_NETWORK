import {format, register} from 'timeago.js';
import es from 'timeago.js/lib/lang/es';

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
                register('es', es);
                data.forEach(element => {
                    element.createdTimeAgo = format(element.created, 'es');
                    if (element.collageContent != null) {
                        element.collageContentFirstLine = element.collageContent.slice(0, 2);
                        if (element.collageContent.length > 4){
                            element.collageContentSecondLine = element.collageContent.slice(2, 4);
                            element.collageContentImageCount = element.collageContent.length - 4;
                        }
                    }
                });
                // console.info('posts demo data loading', data);
                return dataTables.posts.putAll(data).then(() => {
                    console.info('posts demo data loaded');
                });
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
