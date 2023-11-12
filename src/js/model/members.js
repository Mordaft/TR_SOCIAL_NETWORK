let app = require('../utils/core');
let dataTables = require('../global/data-tables');
// console.log(dataTables);
let mustache = require('mustache');

let requests = require('../model/requests');

const members = {
    connectedUser: require('../global/connected-user'),
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
    handleEvents: () => {
        document.querySelectorAll('.button-friendship').forEach(function (element) {
            element.addEventListener('click', function (event) {
                let connectedUserRef = require('../global/connected-user').userProfile();
                let userId = event.currentTarget.getAttribute('data-member');
                let request = { 
                    type: 'friendship',
                    from: connectedUserRef.userProfile.uid,
                    to: userId, 
                    timestamp: Date.now()
                };
                console.log('Request Friendship clicked: ', request);
                requests.requestFriendship(request);
            });
        });
    },
    renderMembers: (selector) => {
        return dataTables.members.getAll()
            .then(data => {
                return fetch('/mustache/members.mst')
                .then(response => response.text())
                    .then(template => {
                        let list = { memberList: data, connectedUser: members.connectedUser.userProfile()};
                        let rendered = mustache.render(template, list);
                        // console.info('Render', rendered);
                        let element = document.querySelector(selector);
                        element.innerHTML = rendered;
                        members.handleEvents();
                    })
                    .catch(error => {
                        console.error(error);
                    });
            })
            .catch(error => {
                console.error(error);
            });
    },
    createMemberHexagons: (selector) => {
        let topElement = document.querySelector(selector);
        // console.log("createMemberHexagons 1", topElement);
        topElement.querySelectorAll('.user-avatar').forEach(function (parentElement) {;
            if (parentElement != null) {
                // console.log("createMemberHexagons 2", parentElement, '#' + parentElement.getAttribute('id') + '-border');
                // let element = parentElement.querySelector('#' + parentElement.getAttribute('id') + '-border div');
                // console.log("createMemberHexagons 3", element);
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
                    width: 82,
                    height: 90,
                    roundedCorners: true,
                    roundedCornerRadius: 3,
                    clip: true
                });
                plugins.createHexagon({
                    container: '#' + parentElement.id + '-progress div',
                    width: 100,
                    height: 110,
                    lineWidth: 6,
                    roundedCorners: true,
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
                    width: 100,
                    height: 110,
                    lineWidth: 6,
                    roundedCorners: true,
                    lineColor: '#293249'
                });
    
                plugins.createHexagon({
                    container: '#' + parentElement.id + '-badge-border div',
                    width: 32,
                    height: 36,
                    roundedCorners: true,
                    roundedCornerRadius: 1,
                    lineColor: '#1d2333',
                    fill: true
                });
    
                plugins.createHexagon({
                container: '#' + parentElement.id + '-badge-content div',
                width: 26,
                height: 28,
                roundedCorners: true,
                roundedCornerRadius: 1,
                lineColor: '#7750f8',
                fill: true
                });
    
            }        
              
        });    
    }    
}
module.exports = members;
