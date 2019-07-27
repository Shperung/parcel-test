import * as React from "react";
import * as ReactDOM from "react-dom";

import "./scss/style.scss";

class App extends React.Component {
    render() {
        return (
            <h1>App</h1>
        )
    }
}

console.log('test');
const rootNode = document.getElementById("js--root");
ReactDOM.render(<App />, rootNode)


