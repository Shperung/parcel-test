import * as React from "react";
import * as ReactDOM from "react-dom";

import "./scss/style.scss";

const imgA = (
    <img
        srcSet="https://cdn.auth0.com/blog/react-js/react.png 1x, https://cdn.pixabay.com/photo/2016/07/03/11/00/atomic-symbol-1494506_960_720.png 2x"
        src="https://cdn.auth0.com/blog/react-js/react.png"
        alt="React"
        height="200"
        width="200"
    />
);

const App = () => {
    return (
        <section>
            <h1>test</h1>
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
    )
}

console.log('test');
const rootNode = document.getElementById("js--root");
ReactDOM.render(<App />, rootNode)


