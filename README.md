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

## 05 Composant UI : input
Créer le composant Input

### Création de fichiers
app/components/UI/Input.js  
Modification de app/screens/ToDoCreate.js

## 06 Contrôler le formulaire avec un hook personnalisé

Créer dans un hook dédié aux states relatifs à notre formulaire  
Passer ce state à notre formulaire  
Créer une fonction pour gérer la soumission du formulaire et la passer à ce dernier.  

### Création de fichiers
app/hooks/useNewToDoManage.js -> fichier pas encore opérationnel, reste à implémenter la fonction handleSubmit().  
Modification de app/screens/ToDoCreate.js  
Modification de app/components/UI/Input.js

## 07 Interagir avec le AsyncStorage : Read et Create

Installer le package AsyncStorage  
Créer un hook dédié à la gestion du stockage  
Créer les actions de lecture et de création dans la base de données locale  

> expo install @react-native-async-storage/async-storage

Documentation de ASYNCSTORAGE  
https://docs.expo.dev/versions/latest/sdk/async-storage/  
https://react-native-async-storage.github.io/async-storage/docs/usage/


### Création de fichiers
app/hooks/useAsyncStorageCRUD.js  
Modification de app/hooks/useNewToDoManage.js

## 08 Interagir avec le AsyncStorage : Update et Delete

Créer les fonctions Update et Delete, dans app/hooks/useAsyncStorageCRUD.js
### Création de fichiers
Modification de app/hooks/useAsyncStorageCRUD.js

## 09 Créer des tasks et afficher la liste des to-do

Créer une task à la soumission de notre formulaire  
Afficher notre liste de to-do

### Création de fichiers
Modification de app/hooks/useNewToDoManage.js  
Modification de app/screens/Home.js

Il manque un STATE GLOBAL, car la variable toDoList, qui est un STATE, est présente dans plusieurs
fichiers. Pour qu'elle se mette à jour correctement, il faut qu'elle soit globale.  
Voir partie suivante.

## 10 Créer un state global

Créer un state global grâce à l'API Context (évite d'utiliser REDUX)  
Afficher notre liste de to-do

### Création de fichiers
app/state/AppContext.js  
app/hooks/useAppContext.js  
Modification de App.js  
Modification de app/hooks/useAsyncStorageCRUD.js

## 10 bis - Ajout d'un bouton "BACK HOME" et d'une ALERTE lors de la création d'une TODO.

### Création de fichiers
Modification de app/screens/ToDoCreate.js  
Modification de app/hooks/useNewToDoManage.js

## 11 Style des cartes « to-do »

Styliser les cartes de tâches

### Création de fichiers
app/components/ToDoCard.js  
Modification de app/screens/Home.js

## 12 Supprimer une to-do

Créer le bouton de suppression par carte  
Passer la fonction de suppression à nos éléments
### Création de fichiers
Modification de app/components/ToDoCard.js    
Modification de app/screens/Home.js  

## 13 Cocher / décocher une task

Créer une checkbox dont le contenu change selon une prop  
Passer la propriété « checked » aux tâches au moment de leur création  
Lui passer une fonction pour pouvoir cocher / décocher les tâches

On peut trouver des icônes ici :  
https://icons.expo.fyi/  
import Ionicons from 'react-native-vector-icons/Ionicons';
### Création de fichiers
Modification de app/components/ToDoCard.js  
Modification de app/hooks/useNewToDoManage.js  
Modification de app/screens/Home.js  

## 14 Touche de style finale

Rendre notre conteneur scrollable  
Augmenter les marges de l'élément « button »  
Ajouter des titres  
Changer la couleur de fond de l'écran de création de tâche

Site pour trouver une palette de couleurs :  
colorhunt.co
### Création de fichiers

Modification de app/screens/Home.js  
Modification de app/components/UI/Button.js  
app/components/UI/Title.js  