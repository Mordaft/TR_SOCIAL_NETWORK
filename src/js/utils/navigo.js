/*---------------
    ROUTER
---------------*/
import Navigo from 'navigo';

const router = new Navigo('/');

router.notFound(function () {
    console.log('not found');
});

const navigo = {
    hideAllScreens: () => {
        document.querySelectorAll('.content-grid').forEach(function (screen) {
            screen.classList.add('hiddenScreen');
        });
    },
    showScreen: (screen) => {
        let elmnt = document.querySelector(screen);
        if (elmnt !== null && elmnt !== undefined) {
            elmnt.classList.remove('hiddenScreen');
        }
        window.dispatchEvent(new Event('resize'));
    },
    addRoute: (route, selector) => {
        router.on(route, function () {
            navigo.hideAllScreens();
            if (selector !== undefined) {
                navigo.showScreen(selector);
            }
            else navigo.showScreen('#' + route);
        });
    },
    createAllRoutes: () => {
        /* routes */
        navigo.addRoute('/','newsfeed');
        navigo.addRoute('newsfeed');
        navigo.addRoute('groups');
        navigo.addRoute('badges');
        navigo.addRoute('members');
        navigo.addRoute('events');
        navigo.addRoute('quests');
        navigo.addRoute('group-events');
        navigo.addRoute('group-info');
        navigo.addRoute('group-members');
        navigo.addRoute('group-timeline');
        navigo.addRoute('profile-about');
        navigo.addRoute('profile-badges');
        navigo.addRoute('profile-friends');
        navigo.addRoute('profile-post');
        navigo.addRoute('profile-timeline');
        navigo.addRoute('hub-account-info');
        navigo.addRoute('hub-account-settings');
        navigo.addRoute('hub-group-invitations');
        navigo.addRoute('hub-group-management');
        navigo.addRoute('hub-profile-info');    
        navigo.addRoute('hub-profile-requests');
        navigo.addRoute('hub-profile-messages');
        navigo.addRoute('hub-profile-social');
        navigo.addRoute('hub-profile-settings');
        navigo.addRoute('logged-out-and-icons');
        console.log('createAllRoutes', router.routes); 
    },
    removeAllRoutes: () => {
        router.off('/');
        router.off('newsfeed');
        router.off('groups');
        router.off('badges');
        router.off('members');
        router.off('events');
        router.off('quests');
        router.off('group-events');
        router.off('group-info');
        router.off('group-members');
        router.off('group-timeline');
        router.off('profile-about');
        router.off('profile-badges');
        router.off('profile-friends');
        router.off('profile-post');
        router.off('profile-timeline');
        router.off('hub-account-info');
        router.off('hub-account-settings');
        router.off('hub-group-invitations');
        router.off('hub-group-management');
        router.off('hub-profile-info');    
        router.off('hub-profile-requests');
        router.off('hub-profile-messages');
        router.off('hub-profile-social');
        router.off('hub-profile-settings');
        router.off('logged-out-and-icons');
    },
    home: () => {
        router.resolve();
        router.navigate('newsfeed');
    }

}
navigo.hideAllScreens();

/* /routes */
export default navigo;