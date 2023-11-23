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
                    // console.info('posts demo data loaded');
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
                        posts.createPostsReactionsDropdowns(selector);
                        posts.createPostsHexagons(selector);
                    })
                    .catch(error => {
                        console.error(error);
                    });
            })
            .catch(error => {
                console.error(error);
            });
    } ,  
    createPostsReactionsDropdowns: (selector) => {
        plugins.createDropdown({
            trigger: '.reaction-options-dropdown-trigger',
            container: '.reaction-options-dropdown',
            triggerEvent: 'click',
            offset: {
              bottom: 54,
              left: -16
            },
            animation: {
              type: 'translate-bottom',
              speed: .3,
              translateOffset: {
                vertical: 20
              }
            },
            closeOnDropdownClick: true
          });
    },
    createPostsHexagons: (selector) => {
        let topElement = document.querySelector(selector);
        // console.log("createMemberHexagons 1", topElement);
        topElement.querySelectorAll('.user-avatar').forEach(function (parentElement) {;
            if (parentElement != null) {
                // console.log("createMemberHexagons 2", parentElement, '#' + parentElement.getAttribute('id') + '-border');
                // let element = parentElement.querySelector('#' + parentElement.getAttribute('id') + '-border div');
                // console.log("createMemberHexagons 3", element);
                plugins.createHexagon({
                    container: '#' + parentElement.id + '-border div',
                    width: 40,
                    height: 44,
                    roundedCorners: true,
                    fill: true,
                    lineColor: '#1d2333'
                });
                plugins.createHexagon({
                    container: '#' + parentElement.id + '-content div',
                    width: 30,
                    height: 32,
                    roundedCorners: true,
                    roundedCornerRadius: 1,
                    clip: true
                });
                plugins.createHexagon({
                    container: '#' + parentElement.id + '-progress div',
                    width: 40,
                    height: 44,
                    lineWidth: 3,
                    roundedCorners: true,
                    roundedCornerRadius: 1,
                    gradient: {
                        colors: ['#d9ff65', '#40d04f']
                    },
                    scale: {
                        start: 0,
                        end: 1,
                        stop: .8
                    }
                });
                plugins.createHexagon({
                    container: '#' + parentElement.id + '-progress-border div',
                    width: 40,
                    height: 44,
                    lineWidth: 3,
                    roundedCorners: true,
                    lineColor: '#293249'
                });   
                plugins.createHexagon({
                    container: '#' + parentElement.id + '-badge-border div',
                    width: 22,
                    height: 24,
                    roundedCorners: true,
                    roundedCornerRadius: 1,
                    lineColor: '#1d2333',
                    fill: true
                });
                plugins.createHexagon({
                container: '#' + parentElement.id + '-badge-content div',
                width: 16,
                height: 18,
                roundedCorners: true,
                roundedCornerRadius: 1,
                lineColor: '#7750f8',
                fill: true
                });
            }        
              
        });    
    }
    

}
module.exports = posts;
