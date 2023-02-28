
// Ce code est un composant React qui rend une application Web et utilise la bibliothèque
//  keycloak-js pour l'authentification.

// La première chose que le code fait est d'importer React et les bibliothèques nécessaires, 
// notamment keycloak-js et @react-keycloak/web.

// Ensuite, il initialise une instance de Keycloak avec les informations fournies 
// dans le fichier JSON keycloak.json. Cette instance est ensuite utilisée pour initialiser 
// le KeycloakProvider à l'aide de KeycloakProvider de la bibliothèque @react-keycloak/web.

// La constante keycloakProviderInitConfig définit les paramètres d'initialisation pour 
// le KeycloakProvider, notamment la stratégie d'authentification utilisée (check-sso dans ce cas).

// Le composant App retourne ensuite le KeycloakProvider, qui englobe le composant AppRouter, 
// lequel gère les routes de l'application.

// Le KeycloakProvider permet la communication entre les composants de l'application et 
// l'instance de Keycloak. Les fonctions onKeycloakEvent et onKeycloakTokens sont appelées pour 
// gérer les événements Keycloak lorsqu'ils se produisent.

// Enfin, le composant App est exporté pour être utilisé dans d'autres parties de l'application.

import React from 'react';
import Keycloak from 'keycloak-js'
import { KeycloakProvider } from '@react-keycloak/web'

import { AppRouter } from './routes'
const keycloak = Keycloak("./keycloak.json");

const keycloakProviderInitConfig = {
  //onLoad: 'login-required',
  onLoad: 'check-sso',
}

const App = () => {

  const onKeycloakEvent = (event, error) => {
    console.log('onKeycloakEvent', event, error);
  };

  const onKeycloakTokens = (tokens) => {
    console.log('onKeycloakTokens', tokens);
  };

  return (
    <KeycloakProvider
      keycloak={keycloak}
      initConfig={keycloakProviderInitConfig}

      // initConfig={{}} // Config d'initialisation Keycloak
      onEvent={onKeycloakEvent}
      onTokens={onKeycloakTokens}
    >
      <AppRouter />
    </KeycloakProvider>
  );
};

export default App
