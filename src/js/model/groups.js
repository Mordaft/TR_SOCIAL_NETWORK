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
    },
    createGroupHexagons: (selector) => {
        let topElement = document.querySelector(selector);
        // console.log("createGroupHexagons 1", topElement);
        topElement.querySelectorAll('.user-avatar').forEach(function (parentElement) {;
            if (parentElement != null) {
                // console.log("createGroupHexagons 2", parentElement, '#' + parentElement.getAttribute('id') + '-border');
                // let element = parentElement.querySelector('#' + parentElement.getAttribute('id') + '-border div');
                // console.log("createGroupHexagons 3", element);
    
                plugins.createHexagon({
                    container: '#' + parentElement.id + '-border div',
                    width: 120,
                    height: 132,
                    roundedCorners: true,
                    fill: true,
                    lineColor: '#1d2333'
                });
    
                plugins.createHexagon({
                    container: '#' + parentElement.id + '-content div',
                    width: 100,
                    height: 110,
                    roundedCorners: true,
                    clip: true
                  });
                                
            }
        });  
    }    
}
module.exports = groups;
