
import Identicon from 'identicon.js';
const plugins = require('../utils/plugins');
let mustache = require('mustache');
let navigo = require('../utils/navigo');
let dataTables = require('../global/data-tables');
let db = dataTables.getBD();
const getUuid = require('uuid-by-string');

const userProfile = {
    connectedUser: null,
    init: async () => {
        console.log('userProfile init');
        userProfile.connectedUser = require('../global/connected-user');
        userProfile.render(userProfile.connectedUser);
    },
    renderComponents: () => {
        // console.log('userProfile render 5');
        userProfile.createHexagonsUserProfile('#userProfileNavigationWidget');
        // console.log('userProfile render 5');
        userProfile.createHexagonsUserProfile('#userProfileDropdownMenu');
        // console.log('userProfile render 6');
        userProfile.createHexagonsUserProfile('#navigation-widget-small');
        // console.log('userProfile render 7');
        userProfile.createHexagonsUserProfile('#navigation-widget-mobile');
        // console.log('userProfile render 6');
        if (userProfile.connectedUser != null) {
            userProfile.refreshAvatarPicture(userProfile.connectedUser);
        }

    },
    render: (connectedUser) => {
        // console.log('userProfile render');
        return fetch('/mustache/user-profile.mst')
                .then(response => response.text())
                    .then(template => {
                        // console.log('userProfile render 0');
                        navigo.default.removeAllRoutes();
                        // console.log('userProfile render 1' , connectedUser);
                        let rendered = mustache.render(template, connectedUser);
                        // console.log('userProfile render 2' , rendered);
                        document.querySelector('#userProfileDropdownMenu').innerHTML = rendered;
                        // console.log('userProfile render 3');
                        userProfile.renderLogin();
                        navigo.default.createAllRoutes();
                        userProfile.createEventsHandlers();
                        navigo.default.home();
                        setInterval(async function () {
                            await db.cloud.sync();
                        }, 60*1000);
                    })
                .catch(error => {
                    console.error(error);
                });
    },
    renderLogin: async () => {           
        await db.cloud.sync();
        let current =db.cloud.currentUser._value;
        if (current != undefined && current.userId != "unauthorized"){
            console.log('userProfile render', current);
            var bearer = 'Bearer ' + db.cloud.currentUser._value.accessToken;
            var url = dataTables.getURL() + '/users/' + encodeURI(current.userId);
            console.log('userProfile render', url); 
            fetch( url, {
                    method: 'GET',
                    headers: {
                        'Authorization': bearer,
                        'Content-Type': 'application/json'
                        }
                    }
                )
                .then(response => response.json())
                .then(data => {                   
                    // console.log('userProfile render', data); 
                    let uuid = getUuid(current.email);
                    let identicon = new Identicon(uuid.toString(), 64).toString();
                    userProfile.connectedUser = {
                        userProfile: {
                            uid: current.userId,
                            name: data.data.displayName,
                            email: current.email,
                            picture: identicon
                            }
                        };
                    // console.log('userProfile render', JSON.stringify(userProfile.connectedUser));
                    sessionStorage.setItem('connectedUser', JSON.stringify(userProfile.connectedUser));
                    }
                )
        }
        userProfile.connectedUser = require('../global/connected-user');
        // console.log('userProfile renderComponents', userProfile.connectedUser);
        userProfile.renderComponents();    
    },
    refreshAvatarPicture: (connectedUser) => {
        // console.log('userProfile refreshAvatarPicture', connectedUser);
        if (connectedUser == null) {
            return;
        }
        let user = connectedUser.userProfile();
        if (user) {

            let userImage = new Image();
            userImage.src = "data:image/png;base64,"+ user.userProfile.picture ;    
            userImage.addEventListener("load", function () {
                // console.log('userProfile refreshAvatarPicture load image');
                document.querySelectorAll('.avatarPicture').forEach(function (element) {
                    canvas = element.children[0];
                    if (canvas == undefined) {
                        canvas = document.createElement('canvas');
                        element.appendChild(canvas);
                    }
                    let ctx = canvas.getContext('2d');
                    var t = Math.max(canvas.width, canvas.height),
                        i = (Math.abs(canvas.width - canvas.height), canvas.width < canvas.height ? (canvas.width - canvas.height) / 2 : 0),
                        e = canvas.height < canvas.width ? (canvas.height - canvas.width) / 2 : 0;
                    ctx.drawImage(userImage, i, e, t, t);
                    
                });
            });    
            
            
            // console.log('userProfile refreshAvatarPicture data-src =', "data:image/png;base64,"+ user.userProfile.picture);
        }
    },
    createHexagonsUserProfile: (selector) => {
        let topElement = document.querySelector(selector);
        // console.log("createHexagons 1", selector, topElement);
        topElement.querySelectorAll('.user-avatar').forEach(function (parentElement) {;
            if (parentElement != null) {
                // console.log("createHexagons 2", selector, parentElement, '#' + parentElement.getAttribute('id') + '-border');
                // let element = parentElement.querySelector('#' + parentElement.getAttribute('id') + '-border div');
                // console.log("createHexagons 3", element);
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
    },
    createEventsHandlers: () => {
        buttonLogout = document.querySelector("#logoutButton");
        console.log('createEventsHandlers' , buttonLogout);
        if (buttonLogout) {
            buttonLogout.addEventListener('click', async function (event) {
                event.preventDefault();
                console.log('logout clicked');
                await  db.cloud.logout();
                db.cloud.logout().then(() => {
                    console.log('logout done');
                    sessionStorage.removeItem('connectedUser');
                    userProfile.connectedUser = null;
                    userProfile.init();
                });
            });
        }
        buttonLogin = document.querySelector("#loginButton");
        console.log('createEventsHandlers' , buttonLogin);
        if (buttonLogin) {
            buttonLogin.addEventListener('click', async function (event) {
                event.preventDefault();
                console.log('logout clicked');
                await  db.cloud.login();
                db.cloud.login().then(() => {
                    userProfile.init();
                });
            });
        }

    }



}

module.exports = userProfile;
