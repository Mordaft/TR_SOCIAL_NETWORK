const gsi = {
    init: () => {
        console.log('initialize gsi');
        result = google.accounts.id.initialize({
            client_id: '314457533021-j53t1aohehhl443p39el6ng1blv2ann3.apps.googleusercontent.com',
            callback: gsi.callback
        });
        console.log('initialize gsi', result);
        google.accounts.id.renderButton(
            document.getElementById("gsiButtonDiv"),
            { theme: "filled_black", size: "small", shape: "pill", text: "signin_with", width: "164", height: "42", onsuccess: gsi.onSuccess, onfailure: gsi.onFailure }
        );
    },
    callback: (response) => {
        console.log('Callback response', response);
        let responsePayload = gsi.parseJwt(response.credential);
        console.log('gsi callback', responsePayload);
    },
    onSuccess: (response) => {
        console.log('GSI onSuccess', response);
    },
    onFailure: (response) => {
        console.log('GSI onFailure', response);
    },
    parseJwt: (token) => {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        return JSON.parse(jsonPayload);
    }
}

gsi.init();


export default gsi;