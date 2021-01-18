import React from "react"; //react code library using javascript
import ReactDOM from "react-dom"; //reactdom = react + web browser
import "./index.css";
import AppComponent from "./App";
import reportWebVitals from "./reportWebVitals";

//place this react component called App at the "root" element of the html file
ReactDOM.render(
	<React.StrictMode>
		<AppComponent />
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
