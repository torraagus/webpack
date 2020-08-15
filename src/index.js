import React from "react";
import ReactDOM from "react-dom";
import "./assets/favicon.ico";
import "./assets/fonts/Raleway.ttf"
import "./assets/scss/global.scss";
import image from "./assets/images/img01.jpg";

const App = () => (
	<div>
		<h1 className="titulo">Hola mundo!</h1>
		<img style={{ width: 300 }} src={image} />
	</div>
);

ReactDOM.render(<App />, document.getElementById("root"));
