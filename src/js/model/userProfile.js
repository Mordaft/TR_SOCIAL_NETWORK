const plugins = require('../utils/plugins');
let mustache = require('mustache');
let navigo = require('../utils/navigo');
let db = require('../global/data-tables').getBD();


const userProfile = {
    connectedUser: null,
    init: async () => {
        console.log('userProfile init');
        userProfile.connectedUser = require('../global/connected-user');
        userProfile.render(userProfile.connectedUser);

        console.log('userProfile initialize gsi');
        result = google.accounts.id.initialize({
            client_id: '314457533021-j53t1aohehhl443p39el6ng1blv2ann3.apps.googleusercontent.com',
            callback: userProfile.callback
        });
        // console.log('initialize gsi', result);
    },
    renderButton: () => {
        console.log('gsi render');
        google.accounts.id.renderButton(
            document.getElementById("gsiButtonDiv"),
            { theme: "filled_black", size: "small", shape: "pill", text: "signin_with", width: "164", height: "42", onsuccess: userProfile.onSuccess, onfailure: userProfile.onFailure }
        );
    },
    renderForm: () => {
        google.accounts.id.prompt();        
    },

    callback: (response) => {
        console.log('gsi callback');
        // console.log('Callback response', response);
        let responsePayload = userProfile.parseJwt(response.credential);
        
        userProfile.renderLogin(responsePayload);
        console.log(DXCEmailPrompt);
        DXCEmailPrompt.onSubmit({email: responsePayload.email});
        // console.log('gsi callback payLoad', responsePayload);

    },
    onSuccess: (response) => {
        console.log('GSI onSuccess', response);
    },
    onFailure: (response) => {
        console.log('GSI onFailure', response);
    },
    parseJwt: (token) => {
        console.log('gsi parseJwt');
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        return JSON.parse(jsonPayload);
    },

    render: (connectedUser) => {
        console.log('userProfile render', connectedUser);
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
                        userProfile.renderButton();
                        // console.log('userProfile render 4');
                        userProfile.refreshAvatarPicture(connectedUser);
                        // console.log('userProfile render 5');
                        userProfile.createHexagonsUserProfile('#userProfileDropdownMenu');
                        // console.log('userProfile render 6');
                        userProfile.createHexagonsUserProfile('#navigation-widget-small');
                        // console.log('userProfile render 7');
                        userProfile.createHexagonsUserProfile('#navigation-widget-mobile');
                        // console.log('userProfile render 6');
                        navigo.default.createAllRoutes();
                        navigo.default.home();
                    })
                .catch(error => {
                    console.error(error);
                });
    },
    renderLogin: (googleUserProfile) => {
        // console.log('userProfile renderLogin', googleUserProfile);
        if (googleUserProfile) {
            userProfile.connectedUser = {
                userProfile: {
                    uid: googleUserProfile.sub,
                    givenName: googleUserProfile.given_name,
                    familyName: googleUserProfile.family_name,
                    name: googleUserProfile.name,
                    email: googleUserProfile.email,
                    picture: googleUserProfile.picture
                }
            };
            sessionStorage.setItem('connectedUser', JSON.stringify(userProfile.connectedUser));
            userProfile.connectedUser = require('../global/connected-user');
            // console.log('userProfile renderLogin', connectedUser);
            userProfile.render(userProfile.connectedUser);
        }
        
    },
    refreshAvatarPicture: (connectedUser) => {
        console.log('userProfile refreshAvatarPicture', connectedUser);
        let user = connectedUser.userProfile();
        if (user) {
            document.querySelectorAll('.avatarPicture').forEach(function (element) {
                console.log('refreshAvatarPicture', user.userProfile.picture);
                element.setAttribute('data-src', user.userProfile.picture);
                console.log('refreshAvatarPicture', element);
            });
        }
    },
    createHexagonsUserProfile: (selector) => {
        let topElement = document.querySelector(selector);
        console.log("createHexagons 1", selector, topElement);
        topElement.querySelectorAll('.user-avatar').forEach(function (parentElement) {;
            if (parentElement != null) {
                console.log("createHexagons 2", selector, parentElement, '#' + parentElement.getAttribute('id') + '-border');
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
    }
    


}

module.exports = userProfile;
