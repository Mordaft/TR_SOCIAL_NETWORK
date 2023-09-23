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

router.navigate('newsfeed');

function hideAllScreens() {
    document.querySelectorAll('.content-grid').forEach(function (screen) {
        screen.classList.add('hiddenScreen');
    });
}

function showScreen(screen) {
    let elmnt = document.querySelector(screen);
    if (elmnt !== null && elmnt !== undefined) {
        elmnt.classList.remove('hiddenScreen');
    }    
    window.dispatchEvent(new Event('resize'));
}

window.addEventListener("load", function () {
    
    let menuItems = document.querySelectorAll(".menu-item-link");
    menuItems.forEach(function (item) {
        console.log('item', item);   
        item.addEventListener('click', function(e) {
            e.preventDefault();
            let menuItemClicked = e.target;
            console.log('click on', this, menuItemClicked.parentElement.parentElement); 
            let activeMenu = this.parentElement.parentElement.querySelector(".active");                
            console.log('menuItem', activeMenu.classList); 
            activeMenu.classList.remove('active');
            this.parentElement.classList.add('active');
        });
    });
});
    


