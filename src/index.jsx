import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import { Provider } from 'react-redux';

import store from './store.js';

import IndexScreen from './components/pages/index/index.screen.jsx';
import ArtistsScreen from './components/pages/artists/artists.screen.jsx';
import ArtistScreen from './components/pages/artists/artist.screen.jsx';

import "./scss/style.scss";
import cancel from './svg/assets/cancel.svg';
import arrow from './svg/assets/arrow-point-to-right.svg';


console.log('cancel', cancel)

const App = () => {
    return (
   
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <Route exact path="/" component={IndexScreen} />
            <Route exact path="/artists" component={ArtistsScreen} />            
            <Route exact path="/artists/:unique" component={ArtistScreen} />
          </React.Fragment>
        </Router>
      </Provider>
    )
}

console.log('test');
const rootNode = document.getElementById("js--root");
ReactDOM.render(<App />, rootNode)


