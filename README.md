# Smart-Search

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This app is a search interface that filters some data from this link :

https://opendata.paris.fr/api/records/1.0/search/?dataset=lieux-de-tournage-a-paris&q=&facet=annee_tournage&facet=type_tournage&facet=nom_tournage&facet=nom_realisateur&facet=ardt_lieu

The data is saved in a JSON file imported from the previous link. 
The app filters the data by specific keywords and displays the information on the web interface.

The App.js file render a single component called SearchBar.js. 
That component is taking 2 props : the data from the json file and the input search from the user.

## Available Scripts

In the project directory, you can run:

### `npm install`

Install the app packages

### `npm start`

Runs the app in the development mode
