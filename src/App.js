import React, { Component } from "react";
import "./App.css";

//functional component (as opposed class component)
class App extends Component {
	constructor() {
		super();
		this.handleClick2 = this.handleClick1.bind(this);
		this.handleClick1 = this.handleClick1.bind(this);
	}

	handleClick1() {
		console.log("button 1 clicked");
		console.log(this);
	}

	handleClick3 = () => console.log("button 3 clicked");

	render() {
		return (
			<div>
				{/* button 1 clicked on refresh, nothing on click*/}
				<button onClick={this.handleClick1()}>click 1</button>
				{/* button 1 clicked */}
				<button onClick={this.handleClick1}>click 2</button>
				{/* button 1 clicked */}
				<button onClick={this.handleClick2}>click 3</button>
				{/* button 3 clicked */}
				<button onClick={this.handleClick3}>click 4</button>
			</div>
		);
	}
}

export default App;
