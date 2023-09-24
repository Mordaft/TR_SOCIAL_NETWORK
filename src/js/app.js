/*---------------
    MULTILANGUAJE
---------------*/
const i18ns = require('./utils/i18ns');
i18ns.loadTranslations().then(function () {    
    i18ns.refreshTraslations();
});    

/*-----------------
    PAGE LOADER 
-----------------*/
require('./global/page-loader');




/*----------------
    SCROLLBARS 
----------------*/
require('simplebar');



/*------------
    UTILS 
------------*/
require('./utils/svg-loader');
require('./utils/liquidify');
require('./utils/demo-icons');


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

function registerMenuEvents() {
    let menuItems = document.querySelectorAll(".menu-item-link");
    menuItems.forEach(function (item) {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            let menuItemClicked = e.target;
            let activeMenu = this.parentElement.parentElement.querySelector(".active");                
            activeMenu.classList.remove('active');
            this.parentElement.classList.add('active');
        });
    });
}

window.addEventListener("load", function () {
    registerMenuEvents();

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


});
    

function registerServiceWorker() {
    navigator.serviceWorker.register(
        new URL('service-worker.js', import.meta.url),
        {type: 'module'}
    );
}
registerServiceWorker();



