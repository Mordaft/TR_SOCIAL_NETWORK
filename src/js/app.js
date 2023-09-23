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
const sidebar = require('./sidebar/sidebar');

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
    showScreen('#newsfeed');
});
router.on('groups', function () {
    hideAllScreens();
    showScreen('#groups');
});
router.on('badges', function () {
    hideAllScreens();
    showScreen('#badges');
});

router.on('members', function () {
    hideAllScreens();
    showScreen('#members');
});

router.on('events', function () {
    hideAllScreens();
    showScreen('#events');
});

router.on('quests', function () {
    hideAllScreens();
    showScreen('#quests');
});

router.on('profile-timeline', function () {
    hideAllScreens();
    showScreen('#profile-timeline');
});


/* /routes */

function hideAllScreens() {
    document.querySelectorAll('.content-grid').forEach(function (screen) {
        screen.classList.add('hiddenScreen');
    });
}

function showScreen(screen) {
    let elmnt = document.querySelector(screen);
    elmnt.classList.remove('hiddenScreen');
    //sidebar.updateGridPosition(elmnt);
    window.dispatchEvent(new Event('resize'));
}


    


