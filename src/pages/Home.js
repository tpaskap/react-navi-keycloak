
// Il s'agit d'un composant React qui utilise le hook useKeycloak de la bibliothèque @react-keycloak/web pour authentifier l'utilisateur avec Keycloak. Il utilise également le hook useAxios d'un fichier de hooks personnalisé hooks.js pour effectuer une demande HTTP à un point de terminaison d'API.

// L'objet keycloak retourné par useKeycloak contient des informations sur l'état d'authentification de l'utilisateur et fournit des méthodes pour se connecter et se déconnecter. Le composant rend conditionnellement un bouton de déconnexion si l'utilisateur est authentifié.

// La fonction callApi est une fonction de rappel créée avec useCallback. Il utilise l'objet axiosInstance retourné par useAxios pour effectuer une requête HTTP GET vers le point de terminaison /jwt/decode. Cette fonction est passée en tant que gestionnaire d'événements de clic à un bouton "Call API".

// Dans l'ensemble, ce composant montre comment utiliser les hooks useKeycloak et useAxios pour authentifier l'utilisateur et effectuer des requêtes API authentifiées. Cependant, il ne montre pas comment gérer la réponse du point de terminaison d'API ou comment afficher les données de la réponse dans le composant.


import React, { useCallback } from 'react'
import { useKeycloak } from '@react-keycloak/web'

import { useAxios } from '../utils/hooks'

export default () => {
  const { keycloak } = useKeycloak()
  const axiosInstance = useAxios('http://localhost:5000') // see https://github.com/panz3r/jwt-checker-server for a quick implementation
  const callApi = useCallback(() => {
    axiosInstance.get('/jwt/decode')
  }, [axiosInstance])

  return (
    <div>
      <div>User is {!keycloak.authenticated ? 'NOT ' : ''} authenticated</div>

      {!!keycloak.authenticated && (
        <button type="button" onClick={() => keycloak.logout()}>
          Logout
        </button>
      )}

      <button type="button" onClick={callApi}>
        Call API
      </button>
    </div>
  )
}
