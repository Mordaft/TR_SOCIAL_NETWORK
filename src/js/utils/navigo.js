/*---------------
    ROUTER
---------------*/
import Navigo from 'navigo';

const router = new Navigo('/');


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
    home: () => {
        // TODO: fix this
        // let element = document.querySelectorAll("[href='newsfeed']")[0];
        // let evt = new Event( 'click', { bubbles: true } );
        // setTimeout(element.dispatchEvent(evt) , 1000);
        // router.root = 'newsfeed';
        // router.off('newsfeed').on('newsfeed', function () {
        //     navigo.hideAllScreens();
        //     navigo.showScreen('#newsfeed');
        // });
        // router.navigate('newsfeed');
    }

}
export default navigo;

navigo.hideAllScreens();

/* routes */
router.on('newsfeed', function () {
    navigo.hideAllScreens();
    navigo.showScreen('#newsfeed');
});
router.on('groups', function () {
    navigo.hideAllScreens();
    navigo.showScreen('#groups');
});
router.on('badges', function () {
    navigo.hideAllScreens();
    navigo.showScreen('#badges');
});

router.on('members', function () {
    navigo.hideAllScreens();
    navigo.showScreen('#members');
});

router.on('events', function () {
    navigo.hideAllScreens();
    navigo.showScreen('#events');
});

router.on('quests', function () {
    navigo.hideAllScreens();
    navigo.showScreen('#quests');
});

router.on('group-events', function () {
    navigo.hideAllScreens();
    navigo.showScreen('#group-events');
});

router.on('group-info', function () {
    navigo.hideAllScreens();
    navigo.showScreen('#group-info');
});

router.on('group-members', function () {
    navigo.hideAllScreens();
    navigo.showScreen('#group-members');
});

router.on('group-timeline', function () {
    navigo.hideAllScreens();
    navigo.showScreen('#group-timeline');
});

router.on('profile-about', function () {
    navigo.hideAllScreens();
    navigo.showScreen('#profile-about');
});

router.on('profile-badges', function () {
    navigo.hideAllScreens();
    navigo.showScreen('#profile-badges');
});

router.on('profile-friends', function () {
    navigo.hideAllScreens();
    navigo.showScreen('#profile-friends');
});

router.on('profile-post', function () {
    navigo.hideAllScreens();
    navigo.showScreen('#profile-post');
});

router.on('hub-account-info', function () {
    navigo.hideAllScreens();
    navigo.showScreen('#hub-account-info');
});

router.on('hub-account-settings', function () {
    navigo.hideAllScreens();
    navigo.showScreen('#hub-account-settings');
});

router.on('hub-group-invitations', function () {
    navigo.hideAllScreens();
    navigo.showScreen('#hub-group-invitations');
});

router.on('hub-group-management', function () {
    navigo.hideAllScreens();
    navigo.showScreen('#hub-group-management');
});

router.on('hub-profile-info', function () {
    navigo.hideAllScreens();
    navigo.showScreen('#hub-profile-info');
});

router.on('hub-profile-requests', function () {
    navigo.hideAllScreens();
    navigo.showScreen('#hub-profile-requests');
});

router.on('hub-profile-messages', function () {
    navigo.hideAllScreens();
    navigo.showScreen('#hub-profile-messages');
});

router.on('hub-profile-social', function () {
    navigo.hideAllScreens();
    navigo.showScreen('#hub-profile-social');
});


router.on('logged-out-and-icons', function () {
    navigo.hideAllScreens();
    navigo.showScreen('#logged-out-and-icons');
});

router.on('profile-timeline', function () {
    navigo.hideAllScreens();
    navigo.showScreen('#profile-timeline');
});


/* /routes */
