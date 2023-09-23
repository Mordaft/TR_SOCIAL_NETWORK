/*-----------------
    PAGE LOADER 
-----------------*/
require('./global/page-loader');

/*----------------
    SCROLLBARS 
----------------*/
require('simplebar');

/*---------------
    TOOLTIPS 
---------------*/
require('./global/tooltips');

/*---------------
    POPUPS 
---------------*/
require('./global/popups');

/*-----------------
    ACCORDIONS
-----------------*/
require('./global/accordions');

/*------------
    UTILS 
------------*/
require('./utils/svg-loader');
require('./utils/liquidify');
require('./utils/demo-icons');

/*------------
    FORM 
------------*/
require('./form/form-rating');
require('./form/form-counter');
require('./form/form-switch');
require('./form/form-input');
require('./form/interactive-input');

/*--------------
    LANDING 
--------------*/
require('./landing/landing.tabs');

/*-------------
    HEADER 
-------------*/
require('./header/header.progressBar');
require('./header/header.dropdown');

/*-------------
    SIDEBAR 
-------------*/
require('./sidebar/sidebar');

/*-----------------
    USER AVATAR 
-----------------*/
require('./global/user-avatar.hexagons');

/*----------
    MAPS 
----------*/
require('./global/maps');

/*---------------
    CONTENT 
---------------*/
require('./content/content.progressBar');
require('./content/content.slider');
require('./content/content.dropdown');
require('./content/content.tab');

/*-------------
    CHARTS
-------------*/
require('./global/charts');

/*---------------
    WIDGETS 
---------------*/
require('./widget/twitter');

/*---------------
    ROUTER
---------------*/
import Navigo from 'navigo'; 

const router = new Navigo('/');
hideAllScreens();
document.querySelector('#newsfeed').classList.remove('hiddenScreen');


/* routes */
router.on('newsfeed', function () {
    hideAllScreens();
    document.querySelector('#newsfeed').classList.remove('hiddenScreen');
});
router.on('groups', function () {
    hideAllScreens();
    document.querySelector('#groups').classList.remove('hiddenScreen');
});
router.on('badges', function () {
    hideAllScreens();
    document.querySelector('#badges').classList.remove('hiddenScreen');
});

router.on('events', function () {
    hideAllScreens();
    document.querySelector('#events').classList.remove('hiddenScreen');
});

router.on('profile-timeline', function () {
    hideAllScreens();
    document.querySelector('#profile-timeline').classList.remove('hiddenScreen');
});


/* /routes */

function hideAllScreens() {
    document.querySelectorAll('.content-grid').forEach(function (screen) {
        console.log(screen);
        screen.classList.add('hiddenScreen');
    });
}


    


