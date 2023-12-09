
import Identicon from 'identicon.js';
const plugins = require('../utils/plugins');
let mustache = require('mustache');
let navigo = require('../utils/navigo');
let dataTables = require('../global/data-tables');
let db = dataTables.getBD();
const getUuid = require('uuid-by-string');
const pageLoader = require('../global/page-loader');

const userProfile = {
    timerSync: null,
    connectedUser: null,
    init: async () => {
        console.log('userProfile init');
        userProfile.connectedUser = require('../global/connected-user');
        userProfile.render(userProfile.connectedUser);
    },
    renderComponents: () => {
        // console.log('renderComponents refreshAvatarPicture');
        userProfile.refreshAvatarPicture(userProfile.connectedUser);
        // console.log('renderComponents createHexagonsUserProfile userProfileNavigationWidget');
        userProfile.createHexagonsUserProfile('#navigation-widget-small');
        // console.log('renderComponents createHexagonsUserProfile userProfileDropdownMenu');
        userProfile.createHexagonsUserProfile('#userProfileDropdownMenu');
        // console.log('renderComponents createHexagonsUserProfile navigation-widget-mobile');
        userProfile.createHexagonsUserProfile('#navigation-widget-mobile');
        // console.log('renderComponents createHexagonsUserProfile navigation-widget-mobile');
        userProfile.createHexagonsUserProfileBig('#user-short-description');

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
                        userProfile.renderComponents();    
                        navigo.default.createAllRoutes();
                        userProfile.createEventsHandlers();
                        navigo.default.home();
                        userProfile.timerSync = setInterval(async function () {
                            await db.cloud.sync();
                        }, 60*1000); 
                        pageLoader.hidePageLoader();               
                    })
                .catch(error => {
                    console.error(error);
                    pageLoader.hidePageLoader();
                });
    },
    renderLogin: async () => {           
        await db.cloud.sync();
        let current =db.cloud.currentUser._value;
        if (current != undefined && current.userId != "unauthorized"){
            // console.log('userProfile render', current);
            pageLoader.showPageLoader();
            var bearer = 'Bearer ' + db.cloud.currentUser._value.accessToken;
            var url = dataTables.getURL() + '/users/' + encodeURI(current.userId);
            // console.log('userProfile render', url); 
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
                    // console.log('userProfile render fetch response', data); 
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
                    sessionStorage.setItem('connectedUser', JSON.stringify(userProfile.connectedUser));
                    // console.log('userProfile render', JSON.stringify(userProfile.connectedUser));
                    userProfile.init();
                })
        }
    },
    refreshAvatarPicture: (connectedUser) => {
        // console.log('userProfile refreshAvatarPicture', connectedUser);
        let user = connectedUser.userProfile();
        var src = "/img/avatar/17.jpg";
        if (user) {
            // console.log('userProfile refreshAvatarPicture with user', user);
            src = "data:image/png;base64,"+ user.userProfile.picture ;    
            // console.log('userProfile refreshAvatarPicture data-src =', "data:image/png;base64,"+ user.userProfile.picture);
        }
        else {
            // console.log('userProfile refreshAvatarPicture no user');
        }

        document.querySelectorAll('.avatarPicture').forEach(function (element) {
            // console.log('userProfile change data-src', element.parentElement.parentElement.getAttribute('class'), element.getAttribute('data-src'), src);
            element.setAttribute('data-src', src);
        });
    },
    createHexagonsUserProfile: (selector ) => {
        var updatableElement;
        let topElement = document.querySelector(selector);
        // console.log("UserProfile createHexagons 1", selector, topElement);
        topElement.querySelectorAll('.user-avatar').forEach(function (parentElement) {;
            if (parentElement != null) {
                // console.log("UserProfile createHexagons 2", selector, '#' + parentElement.id);
                plugins.createHexagon({
                    container: '#' + parentElement.id + ' > div.user-avatar-border > div',
                    width: 40,
                    height: 44,
                    roundedCorners: true,
                    fill: true,
                    lineColor: '#1d2333'
                });
                plugins.createHexagon({
                    container: '#' + parentElement.id +  ' > div.user-avatar-content > div',
                    width: 30,
                    height: 32,
                    roundedCorners: true,
                    roundedCornerRadius: 1,
                    clip: true
                });
                plugins.createHexagon({
                    container: '#' + parentElement.id +  ' > div.user-avatar-progress > div',
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
                    container: '#' + parentElement.id + ' > div.user-avatar-progress-border > div',
                    width: 40,
                    height: 44,
                    lineWidth: 3,
                    roundedCorners: true,
                    lineColor: '#293249'
                });
                plugins.createHexagon({
                    container:'#' + parentElement.id +  ' > div.user-avatar-badge-border > div',
                    width: 22,
                    height: 24,
                    roundedCorners: true,
                    roundedCornerRadius: 1,
                    lineColor: '#1d2333',
                    fill: true
                });
                plugins.createHexagon({
                container: '#' + parentElement.id + ' > div.user-avatar-badge-content > div',
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
    createHexagonsUserProfileBig: (selector ) => {
        var updatableElement;
        let topElement = document.querySelector(selector);
        // console.log("createHexagonsUserProfileBig 1", selector, topElement);
        topElement.querySelectorAll('.user-avatar').forEach(function (parentElement) {;
            if (parentElement != null) {
                plugins.createHexagon({
                    container: '#' + parentElement.id + ' > div.user-avatar-border > div',
                    width: 120,
                    height: 132,
                    roundedCorners: true,
                    fill: true,
                    lineColor: '#1d2333'
                });
                plugins.createHexagon({
                    container: '#' + parentElement.id +  ' > div.user-avatar-content > div',
                    width: 82,
                    height: 89,
                    roundedCorners: true,
                    clip: true
                });
                plugins.createHexagon({
                    container: '#' + parentElement.id +  ' > div.user-avatar-progress > div',
                    width: 100,
                    height: 108,
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
                    container: '#' + parentElement.id + ' > div.user-avatar-progress-border > div',
                    width: 100,
                    height: 108,
                    lineWidth: 6,
                    roundedCorners: true,
                    lineColor: '#293249'
                });
                plugins.createHexagon({
                    container:'#' + parentElement.id +  ' > div.user-avatar-badge-border > div',
                    width: 32,
                    height: 36,
                    roundedCorners: true,
                    roundedCornerRadius: 1,
                    lineColor: '#1d2333',
                    fill: true
                });
                plugins.createHexagon({
                container: '#' + parentElement.id + ' > div.user-avatar-badge-content > div',
                width: 26,
                height: 28,
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
        // console.log('createEventsHandlers' , buttonLogout);
        if (buttonLogout) {
            buttonLogout.addEventListener('click', async function (event) {
                event.preventDefault();
                pageLoader.showPageLoader();
                // console.log('logout clicked');
                await  db.cloud.logout();
                db.cloud.logout().then(() => {
                    // console.log('logout done');
                    sessionStorage.removeItem('connectedUser');
                    userProfile.connectedUser = null;
                    clearInterval(userProfile.timerSync);
                    userProfile.timerSync = null;
                    userProfile.init();
                });
            });
        }
        buttonLogin = document.querySelector("#loginButton");
        // console.log('createEventsHandlers' , buttonLogin);
        if (buttonLogin) {
            buttonLogin.addEventListener('click', async function (event) {
                event.preventDefault();
                // console.log('login clicked');
                await  db.cloud.login();
                db.cloud.login().then(() => {
                    // console.log('login done');
                    db.cloud.sync().then(() => {
                        // console.log('sync after login done');
                        userProfile.renderLogin();                            
                       });
                    });
                });
        }
    }



}

module.exports = userProfile;
