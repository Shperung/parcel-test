import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import { Provider } from 'react-redux';

import store from './store.js';

import IndexScreen from './components/index/index.screen.jsx';
import ArtistsScreen from './components/artists/artists.screen.jsx';
import ArtistScreen from './components/artists/artist.screen.jsx';

import "./scss/style.scss";
import cancel from './icon/assets/cancel.svg';
import arrow from './icon/assets/arrow-point-to-right.svg';

const imgA = (
    <img
        srcSet="https://cdn.auth0.com/blog/react-js/react.png 1x, https://cdn.pixabay.com/photo/2016/07/03/11/00/atomic-symbol-1494506_960_720.png 2x"
        src="https://cdn.auth0.com/blog/react-js/react.png"
        alt="React"
        height="200"
        width="200"
    />
);

console.log('cancel', cancel)

const App = () => {
    return (
   
      <Provider store={store}>
        <section>
            <h1>test</h1>
            <h2>test</h2>
            <svg width="25" height="25">
              <use xlinkHref={cancel} />
            </svg>
            <svg>
              <use xlinkHref={arrow} />
            </svg>
            <div
             //className="absolute-centered"
             //className="flex-centered"
             //className="flex-centered-margin"
             //className="centered-table-cell"
            >
                <figure>
                    {imgA}

                </figure>
            </div>
        </section>
        <Router>
          <React.Fragment>
            <Route path="/" component={IndexScreen} />
            <Route path="/artists" component={ArtistsScreen} />            
            <Route path="/artists/:unique" component={ArtistScreen} />
          </React.Fragment>
        </Router>
      </Provider>
    )
}

console.log('test');
const rootNode = document.getElementById("js--root");
ReactDOM.render(<App />, rootNode)


