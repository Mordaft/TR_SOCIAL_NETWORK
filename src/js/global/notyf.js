const { Notyf } = require('notyf/notyf');
let noty = new Notyf(
    options = {
        duration: 1500,
        position: {
        x: 'left',
        y: 'down',
        zIndex: 99999
        },
        types: [
            {
                type: 'suscess',
                background: '#40D04F',
                icon: {
                    className: 'material-icons',
                    tagName: 'span',
                    text: 'done',
                    color: 'white'
                    }

            },
            {
                type: 'info',
                background: '#7750F8',
                icon: {
                    className: 'material-icons',
                    tagName: 'span',
                    text: 'info',
                    color: 'white'
                    }

            },
            {
                type: 'warning',
                background: 'orange',
                icon: {
                    className: 'material-icons',
                    tagName: 'span',
                    text: 'warning',
                    color: 'white'
                    }
            },
            {
                type: 'error',
                background: 'indianred',
                icon: {
                    className: 'material-icons',
                    tagName: 'span',
                    text: 'error',
                    color: 'white'
                    }

            }
        ]}
    );

const notif = {
    suscess: (message) => {
        console.log('Notif suscess >>>>> ', message);
        noty.open({
            type: 'suscess',
            message: message
        });
    },
    error: (message) => {
        console.log('Notif error >>>>> ', message);
        noty.open({
            type: 'error',
            message: message
        });
    },
    info: (message) => {
        console.log('Notif info >>>>> ', message);
        noty.open({
            type: 'info',
            message: message
        });
    },
    warn: (message) => {
        console.log('Notif warm >>>>> ', message);
        noty.open({
            type: 'warning',
            message: message
        });
    }
}

module.exports = notif;