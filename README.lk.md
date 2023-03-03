Sources mofifiées de

https://github.com/react-keycloak/react-keycloak-examples.git
examples/react-navi


# Lancement keycloak

## First time
docker run -v $PWD/keycloak_data:/opt/jboss/keycloak/standalone/data/ -p 8080:8080 -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=admin quay.io/keycloak/keycloak:15.0.2

## After
docker run -v $PWD/keycloak_data:/opt/jboss/keycloak/standalone/data/ -p 8080:8080 quay.io/keycloak/keycloak:15.0.2

http://localhost:8080/

cd tools && docker build -t my-nodejs .

docker run -it --rm -v $PWD:/tmp -w /tmp my-nodejs /bin/sh
su node
npm i
exit
exit

docker run -p 3000:3000 -it --rm -v $PWD:/tmp -w /tmp my-nodejs npm start

# Config keycloak

## Add Realm

http://localhost:8080/
create realm : keycloak-react-auth

## Add user in realm keycloak-react-auth

user : laurent
paswword : aaaaaa

Check user acces
http://localhost:8080/auth/realms/keycloak-react-auth/account/#/laurent

## Add Client as admin

Client ID : React-auth
Client Protocol : openid-connect
Root URL : http://localhost:3000


Valid Redirect URIs : *

Master > Clients > keycloak-react-auth-realm > Installation
Format Option : keycloak OIDC JSON
Download


## Remarquable

public/keycloak.json

const keycloak = Keycloak("./keycloak.json");

code react js keycloak version 15.2 expiration 20 minutes stoke le token dans un cookie de session


dans src/App.js
const keycloakProviderInitConfig = {
  onLoad: 'check-sso',         // On laisse apparaitre le bouton login
  // onLoad: 'login-required', // On automatiquement logge sur keycloak
}
