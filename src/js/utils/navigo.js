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

router.on('profile-timeline', function () {
    hideAllScreens();
    showScreen('#profile-timeline');
});

/* /routes */


//default route
router.navigate('newsfeed');