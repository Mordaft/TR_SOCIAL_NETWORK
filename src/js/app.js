const plugins = require('./utils/plugins');

loadInitalComponents();
window.addEventListener("load", function () {
    /*---------------
        MULTILANGUAJE
    ---------------*/
    const i18ns = require('./utils/i18ns');
    registerMenuEvents();
    i18ns.loadTranslations().then(function () {
        i18ns.refreshTraslations();
        /*---------------
        LOGIN WITH GOOGLE
        ----------------*/
        const gsi = require('./google/gsi');

        loadVisualComponents();
        loadRoutes();
        /*---------------
            DEMO DATA   
        ---------------*/
        loadDemoData()
    });

});

function createProgressBars(selector) {
    let topElement = document.querySelector(selector);
    // console.log("createProgressBars 1", topElement);
    topElement.querySelectorAll('.progress-stat').forEach(function (parentElement) {;
        // console.log("createProgressBars 2", parentElement);
        let element = parentElement.querySelector('.din-progress-stat-bar');
        if (element != null) {
            // console.log("createProgressBars 3", element);
            plugins.createProgressBar({
                container: '#' + element.id,
                height: 4,
                lineColor: '#293249'
            });
            
            plugins.createProgressBar({
                container: '#' + element.id,
                height: 4,
                gradient: {
                colors: ['#40d04f', '#d9ff65']
                },
                scale: {
                start: 0,
                end: 100,
                stop: element.getAttribute('data-progress-bar')
                },
                animateOnScroll: true
            });
        }
    });
}


function loadDemoData() {
    const badges = require('./model/badges');
    badges.loadDemo().then(function () {
        badges.renderBadges("#badges-list").then(function () {
            createProgressBars("#badges-list");
        });
    });

    const events = require('./model/events');
    events.loadDemo().then(function () {
        events.renderEvents("#event-list");
    });

    const groups = require('./model/groups');
    groups.loadDemo().then(function () {
        groups.renderGroups("#group-list");
    });

    const members = require('./model/members');
    members.loadDemo().then(function () {
        members.renderMembers("#member-list");
    });
}

function loadInitalComponents(){
    /*-----------------
        PAGE LOADER 
    -----------------*/
    require('./global/page-loader');
}

function clearAllSelectedMenus() {
    let menuItems = document.querySelectorAll(".active");
    menuItems.forEach(function (item) {
        // console.log("clearAllSelectedMenus", item);
        item.classList.remove('active');
    });
}

function markAllEquivalentMenus(hrefMenu) {
    let menuItems = document.querySelectorAll("a[href='" + hrefMenu + "']");
    // console.log("hrefMenu", menuItems);
    menuItems.forEach(function (item) {
        item.parentElement.classList.add('active');
    });
}


function registerMenuEvents() {
    let menuItems = document.querySelectorAll(".menu-item-link");
    menuItems.forEach(function (item) {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            let menuItemClicked = e.target;
            //clear all selected menus
            clearAllSelectedMenus();
            //select all menus
            markAllEquivalentMenus(menuItemClicked.getAttribute('href'));
        });
    });
}


function loadRoutes() {
    require('./utils/navigo');
}

function loadVisualComponents() {
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
    // require('./global/maps');

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
    // require('./widget/twitter');

    /*---------------
        DATA TABLES
    ---------------*/
    require('./global/data-tables');

    
}


function registerServiceWorker() {
    navigator.serviceWorker.register(
        new URL('service-worker.js', import.meta.url),
        { type: 'module' }
    );
}
registerServiceWorker();



