import * as React from "react";
import * as ReactDOM from "react-dom";

import "./scss/style.scss";

class App extends React.Component {
    render() {
        return (
            <section>
                <div>
                    <img
                        srcSet="https://cdn.auth0.com/blog/react-js/react.png 1x, https://cdn.pixabay.com/photo/2016/07/03/11/00/atomic-symbol-1494506_960_720.png 2x"
                        src="https://cdn.auth0.com/blog/react-js/react.png"
                        alt="React"
                        height="200"
                        width="200"
                    />
                </div>
            </section>
        )
    }
}

console.log('test');
const rootNode = document.getElementById("js--root");
ReactDOM.render(<App />, rootNode)


