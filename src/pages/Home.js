
// Il s'agit d'un composant React qui utilise le hook useKeycloak de 
// la bibliothèque @react-keycloak/web pour authentifier l'utilisateur 
// avec Keycloak. Il utilise également le hook useAxios d'un fichier d
// e hooks personnalisé hooks.js pour effectuer une demande HTTP à un 
// point de terminaison d'API.

// L'objet keycloak retourné par useKeycloak contient des informations 
// sur l'état d'authentification de l'utilisateur et fournit des méthodes
//  pour se connecter et se déconnecter. Le composant rend conditionnellement un bouton de déconnexion si l'utilisateur est authentifié.

// La fonction callApi est une fonction de rappel créée avec useCallback.
// Il utilise l'objet axiosInstance retourné par useAxios pour effectuer 
// une requête HTTP GET vers le point de terminaison /jwt/decode. 
// Cette fonction est passée en tant que gestionnaire d'événements de clic à un bouton "Call API".

// Dans l'ensemble, ce composant montre comment utiliser les hooks useKeycloak et useAxios 
// pour authentifier l'utilisateur et effectuer des requêtes API authentifiées. 
// Cependant, il ne montre pas comment gérer la réponse du point de terminaison d'API ou 
// comment afficher les données de la réponse dans le composant.

import React, { useEffect, useState } from 'react'
// import React, { useCallback } from 'react'
import { useKeycloak } from '@react-keycloak/web'
import axios from 'axios'

// import { useAxios } from '../utils/hooks'

const HomePage = () => {

  const { keycloak, initialized } = useKeycloak()

  const [imgURL, setImgURL] = useState("");

  const getRandomImage = () => {
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then(response => {
        setImgURL(response.data.message);
      })
      .catch(err => {
        console.log("error fetching image:", err);
      })
  }
  useEffect(() => {
    getRandomImage();
  }, []);

  // const axiosInstance = useAxios('http://localhost:5000') // see https://github.com/panz3r/jwt-checker-server for a quick implementation

  // const callApi = useCallback(() => {
  //   axiosInstance.get('/jwt/decode')
  // }, [axiosInstance])

  if (!initialized) {
    return <div>Loading...</div>;
  }
  // Obtenez l'heure d'expiration de la session
  const expiration = new Date(keycloak.tokenParsed.exp * 1000);
  const expirationString = expiration.toLocaleString("fr-FR");

  return (
    <>

      <div>
        User: {keycloak.tokenParsed.name} is {!keycloak.authenticated ? 'NOT ' : ''} authenticated
        <p>Votre session expire le {expirationString}.</p>
        <p>
          {!!keycloak.authenticated && (
            <button type="button" onClick={() => keycloak.logout()}>
              Logout
            </button>
          )}
        </p>
      </div>

      {/* <button type="button" onClick={callApi}>
        Call API
      </button> */}

      <div>
        <img alt="" src={imgURL} />
      </div>

      <p>
        <button onClick={getRandomImage}>Random Dog Pic</button>
      </p>

    </>
  )
}
export default HomePage;