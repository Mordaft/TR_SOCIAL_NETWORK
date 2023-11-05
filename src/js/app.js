const plugins = require('./utils/plugins');

loadInitalComponents();
window.addEventListener("load", function () {
    /*---------------
        MULTILANGUAJE
    ---------------*/
    const i18ns = require('./utils/i18ns');
    registerMenuEvents();
    i18ns.loadTranslations().then(function () {
        /*---------------
        LOGIN WITH GOOGLE
        ----------------*/
        const gsi = require('./google/gsi');
        /*---------------
            DEMO DATA   
        ---------------*/
        i18ns.refreshTraslations();
        loadVisualComponents();
        loadRoutes();
        loadDemoData();
        
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

function createQuestProgressBars(selector) {
    let topElement = document.querySelector(selector);
    // console.log("createProgressBars 1", topElement);
    topElement.querySelectorAll('.progress-stat').forEach(function (parentElement) {;
        // console.log("createProgressBars 2", parentElement);
        let element = parentElement.querySelector('.progress-stat-bar');
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




function createMemberHexagons(selector) {
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

function createGroupHexagons(selector) {
    let topElement = document.querySelector(selector);
    // console.log("createGroupHexagons 1", topElement);
    topElement.querySelectorAll('.user-avatar').forEach(function (parentElement) {;
        if (parentElement != null) {
            // console.log("createGroupHexagons 2", parentElement, '#' + parentElement.getAttribute('id') + '-border');
            // let element = parentElement.querySelector('#' + parentElement.getAttribute('id') + '-border div');
            // console.log("createGroupHexagons 3", element);

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
                width: 100,
                height: 110,
                roundedCorners: true,
                clip: true
              });
                            
        }
    });  
}

function createPostsReactionsDropdowns(selector) {
    plugins.createDropdown({
        trigger: '.reaction-options-dropdown-trigger',
        container: '.reaction-options-dropdown',
        triggerEvent: 'click',
        offset: {
          bottom: 54,
          left: -16
        },
        animation: {
          type: 'translate-bottom',
          speed: .3,
          translateOffset: {
            vertical: 20
          }
        },
        closeOnDropdownClick: true
      });
}


function createPostsHexagons(selector) {
    let topElement = document.querySelector(selector);
    // console.log("createMemberHexagons 1", topElement);
    topElement.querySelectorAll('.user-avatar').forEach(function (parentElement) {;
        if (parentElement != null) {
            // console.log("createMemberHexagons 2", parentElement, '#' + parentElement.getAttribute('id') + '-border');
            // let element = parentElement.querySelector('#' + parentElement.getAttribute('id') + '-border div');
            // console.log("createMemberHexagons 3", element);
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



function loadDemoData() {
    const posts = require('./model/posts');
    posts.loadDemo().then(function () {
        posts.renderPosts("#post-list").then(function () {
            createPostsReactionsDropdowns("#post-list");
            createPostsHexagons("#post-list");
            console.info('Posts rendered');
        });
    });

    const badges = require('./model/badges');
    badges.loadDemo().then(function () {
        badges.renderBadges("#badges-list").then(function () {
            createProgressBars("#badges-list");
            console.info('Badges rendered');
        });
    });

    const quests = require('./model/quests');
    quests.loadDemo().then(function () {
        quests.renderQuestsRelevant("#quests-relevant").then(
            function () {
                createQuestProgressBars("#quests-relevant");
                console.info('Quests relevant rendered');
        }); 
        quests.renderQuestsTable("#quests-table").then(
                function () {
                createQuestProgressBars("#quests-table");
                console.info('Quests table rendered');
        });
    });

    const events = require('./model/events');
    events.loadDemo().then(function () {
        events.renderEvents("#event-list").then(function () {
            console.info('Events rendered');
        });
    });

    const groups = require('./model/groups');
    groups.loadDemo().then(function () {
        groups.renderGroups("#group-list").then(function () {
            createGroupHexagons("#group-list");
            console.info('Groups rendered');
        });
    });

    const members = require('./model/members');
    members.loadDemo().then(function () {
        members.renderMembers("#member-list").then(function () {
            createMemberHexagons("#member-list");
            console.info('Members rendered');
        });
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



