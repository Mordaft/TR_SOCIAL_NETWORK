/*---------------
    ROUTER
---------------*/
import Navigo from 'navigo';

const router = new Navigo('/');

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

router.on('group-events', function () {
    hideAllScreens();
    showScreen('#group-events');
});

router.on('group-info', function () {
    hideAllScreens();
    showScreen('#group-info');
});

router.on('group-members', function () {
    hideAllScreens();
    showScreen('#group-members');
});

router.on('group-timeline', function () {
    hideAllScreens();
    showScreen('#group-timeline');
});

router.on('profile-about', function () {
    hideAllScreens();
    showScreen('#profile-about');
});

router.on('profile-badges', function () {
    hideAllScreens();
    showScreen('#profile-badges');
});

router.on('profile-friends', function () {
    hideAllScreens();
    showScreen('#profile-friends');
});

router.on('profile-post', function () {
    hideAllScreens();
    showScreen('#profile-post');
});

router.on('hub-account-info', function () {
    hideAllScreens();
    showScreen('#hub-account-info');
});

router.on('hub-account-settings', function () {
    hideAllScreens();
    showScreen('#hub-account-settings');
});

router.on('hub-group-invitations', function () {
    hideAllScreens();
    showScreen('#hub-group-invitations');
});

router.on('hub-group-management', function () {
    hideAllScreens();
    showScreen('#hub-group-management');
});

router.on('hub-profile-info', function () {
    hideAllScreens();
    showScreen('#hub-profile-info');
});

router.on('hub-profile-requests', function () {
    hideAllScreens();
    showScreen('#hub-profile-requests');
});

router.on('hub-profile-messages', function () {
    hideAllScreens();
    showScreen('#hub-profile-messages');
});

router.on('hub-profile-social', function () {
    hideAllScreens();
    showScreen('#hub-profile-social');
});


router.on('logged-out-and-icons', function () {
    hideAllScreens();
    showScreen('#logged-out-and-icons');
});

router.on('profile-timeline', function () {
    hideAllScreens();
    showScreen('#profile-timeline');
});



/* /routes */


//default route
router.navigate('newsfeed');