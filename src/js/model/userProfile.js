const plugins = require('../utils/plugins');
let mustache = require('mustache');

const userProfile = {
    connectedUser: null,
    init: async () => {
        console.log('userProfile init');
        let storedConnectedUser = sessionStorage.getItem('connectedUser');
        if (storedConnectedUser) {
            userProfile.connectedUser = JSON.parse(storedConnectedUser);
            // console.log('userProfile init 1' , userProfile.connectedUser);
            
        }
        else {
            userProfile.connectedUser = {
                userProfile: null
            }
            // console.log('userProfile init 2' , userProfile.connectedUser);
        }
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

    callback: (response) => {
        console.log('gsi callback');
        // console.log('Callback response', response);
        let responsePayload = userProfile.parseJwt(response.credential);
        userProfile.renderLogin(responsePayload);
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
        console.log('userProfile render');
        return fetch('/mustache/user-profile.mst')
                .then(response => response.text())
                    .then(template => {
                        // console.log('userProfile render 1' , connectedUser);
                        let rendered = mustache.render(template, connectedUser);
                        // console.log('userProfile render 2' , rendered);
                        document.querySelector('#userProfileDropdownMenu').innerHTML = rendered;
                        // console.log('userProfile render 3');
                        userProfile.renderButton();
                        // console.log('userProfile render 4');
                        userProfile.createHexagons('#userProfileDropdownMenu');
                        require('../utils/navigo');
                    })
                .catch(error => {
                    console.error(error);
                });
    },
    renderLogin: (googleUserProfile) => {
        console.log('userProfile renderLogin');
        if (googleUserProfile) {
            let connectedUser = {
                userProfile: {
                    givenName: googleUserProfile.given_name,
                    familyName: googleUserProfile.family_name,
                    name: googleUserProfile.name,
                    email: googleUserProfile.email,
                    picture: googleUserProfile.picture
                }
            };
            sessionStorage.setItem('connectedUser', JSON.stringify(connectedUser));
            // console.log('userProfile renderLogin', connectedUser);
            userProfile.render(connectedUser);
        }
        
    },

    createHexagons: (selector) => {
        let topElement = document.querySelector(selector);
        // console.log("createHexagons 1", topElement);
        topElement.querySelectorAll('.user-avatar').forEach(function (parentElement) {;
            if (parentElement != null) {
                // console.log("createHexagons 2", parentElement, '#' + parentElement.getAttribute('id') + '-border');
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
