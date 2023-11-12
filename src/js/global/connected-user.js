const connectedUser = {
    userProfile: () => {
        let storedConnectedUser = sessionStorage.getItem('connectedUser');
        if (storedConnectedUser) {
            return JSON.parse(storedConnectedUser);
        }
        else return null;  
    },
}

module.exports = connectedUser;