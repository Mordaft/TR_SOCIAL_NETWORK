let app = require('../utils/core');
let dataTables = require('../global/data-tables');
// console.log(dataTables);
let mustache = require('mustache');

let requests = require('../model/requests');

const groups = {
    connectedUser: require('../global/connected-user'),
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
    handleEvents: () => {
        document.querySelectorAll('.button-join-group').forEach(function (element) {
            element.addEventListener('click', function (event) {
                let connectedUserRef = require('../global/connected-user').userProfile();
                let groupId = event.currentTarget.getAttribute('data-group');
                let request = { 
                    type: 'membership',
                    from: connectedUserRef.userProfile.uid,
                    to: groupId, 
                    timestamp: Date.now()
                };
                console.log('Request Membership clicked: ', request);
                requests.requestJoinToGroup(request);
            });
        });
    },
    renderGroups: (selector) => {
        return dataTables.groups.getAll()
            .then(data => {
                return fetch('/mustache/groups.mst')
                .then(response => response.text())
                    .then(template => {
                        let list = { groupList: data , connectedUser: groups.connectedUser.userProfile()};
                        // console.info('renderGroups', list);
                        let rendered = mustache.render(template, list);
                        // console.info('renderGroups', rendered);
                        let element = document.querySelector(selector);
                        element.innerHTML = rendered;
                        groups.handleEvents();
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
