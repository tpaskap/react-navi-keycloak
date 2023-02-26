
import React, { useEffect } from 'react';
import Keycloak from 'keycloak-js'
import { KeycloakProvider } from '@react-keycloak/web'

import { AppRouter } from './routes'
const keycloak = Keycloak("./keycloak.json");

const keycloakProviderInitConfig = {
  //onLoad: 'login-required',
  onLoad: 'check-sso',
}

// Ce code est un exemple d'utilisation de KeycloakProvider dans une application ReactJS.

// Tout d'abord, la classe App hérite de la classe PureComponent de React.

// La méthode onKeycloakEvent est définie pour gérer les événements Keycloak, tels que la connexion et la déconnexion de l'utilisateur.

// La méthode onKeycloakTokens est définie pour gérer les tokens Keycloak, tels que les tokens d'accès et de rafraîchissement.

// Dans la méthode render, le composant KeycloakProvider est utilisé pour fournir le contexte Keycloak à l'application. Les propriétés suivantes sont passées à KeycloakProvider:

// keycloak: l'instance Keycloak créée précédemment.
// initConfig: la configuration d'initialisation Keycloak.
// onEvent: la méthode onKeycloakEvent définie précédemment pour gérer les événements Keycloak.
// onTokens: la méthode onKeycloakTokens définie précédemment pour gérer les tokens Keycloak.
// Le composant AppRouter est utilisé comme enfant de KeycloakProvider pour définir la navigation de l'application.
//     Il est important de noter que le code présenté ne montre pas comment créer et configurer l'instance Keycloak utilisée dans l'exemple. Cela doit être fait en amont dans le code, avant d'utiliser KeycloakProvider.

// class App extends React.PureComponent {
//   onKeycloakEvent = (event, error) => {
//     console.log('onKeycloakEvent', event, error)
//   }

//   onKeycloakTokens = (tokens) => {
//     console.log('onKeycloakTokens', tokens)
//   }

//   render() {
//     return (
//       <KeycloakProvider
//         keycloak={keycloak}
//         initConfig={keycloakProviderInitConfig}
//         onEvent={this.onKeycloakEvent}
//         onTokens={this.onKeycloakTokens}
//       >
//         <AppRouter />
//       </KeycloakProvider>
//     )
//   }
// }


const App = () => {

  useEffect(() => {
    // Code pour initialiser Keycloak
  }, []);

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
