import Keycloak from 'keycloak-js';

const initOptions = {
    url: 'http://localhost:8080/',
    realm: 'demo',
    clientId: 'demos',
    // checkLoginIframe: true, // Check if the user is still logged in using an iframe
    pkceMethod: 'S256'
    // clientSecret: '8Dw7HchZP2xdS0ZPXCfGDXnO4a99wPqP'
}

const keycloaks = new Keycloak(initOptions)

export default keycloaks;