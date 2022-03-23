# react-native-todo2

# étapes de production

## 01 Initialisation du projet

> expo init todo
> cd todo
> expo start
## 02 Structure du projet
### Création du dossier APP et des sous-dossiers :

components, hooks, screens, navigation

### Faciliter l'import de fichiers d'un dossier à l'autre.

Installation et parmaétrage de babel-plugin-module-resolver
Créer des raccourcis pour avoir des chemins absolus et direct vers 
les différents fichiers de l'application.
https://www.npmjs.com/package/babel-plugin-module-resolver

Stopper le serveur expo puis :
> npm install --save-dev babel-plugin-module-resolver

#### Update le fichier babel.config.js

Copier-coller et modifier, depuis https://www.npmjs.com/package/babel-plugin-module-resolver
`{
  "plugins": [
    ["module-resolver", {
      "root": ["./src"],
      "alias": {
        "test": "./test",
        "underscore": "lodash"
      }
    }]
  ]
}`

## 03 Mise en place de la navigation

Installer react-navigation

Créer nos pages « Home.js » et « ToDoCreate.js »

Mettre en place la navigation de base

> npm install @react-navigation/native
> expo install react-native-screens react-native-safe-area-context

> npm install @react-navigation/native-stack

### Création des fichiers
app/navigation/Navigation.js
app/screens/Home.js
app/screens/ToDoCreate.js

Dans App.js, on ne return que le composant <Navigation />

## 04 Composant UI : le bouton

Créer le composant Button
L'appliquer au bouton de navigation

### Création des fichiers
app/components/UI/Button.js
Modification de app/screens/Home.js






