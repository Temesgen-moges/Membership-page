import Keycloak from 'keycloak-js';

const initOptions = {
    url: 'http://localhost:8080/',
    realm: 'demo',
    clientId: 'demos',
    checkLoginIframe: true, 
    pkceMethod: 'S256'
}

const keycloaks = new Keycloak(initOptions)

export default keycloaks;