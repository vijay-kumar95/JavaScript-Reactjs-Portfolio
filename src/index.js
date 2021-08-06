import React from "react";
import ReactDOM from "react-dom";
import {Router, Switch, Route} from "react-router-dom";
import { createBrowserHistory } from "history";
import App from "./component/App";
import Joke from "./component/Joke";
import Header from "./component/Header";
import "./index.css";

const history = createBrowserHistory();

ReactDOM.render(
	<Router history = {history}>
	  <Switch>
	    <Route exact path="/" render={() => <Header><App /></Header>} />
		<Route path="/joke" render={ () => <Header><Joke /></Header>} />
	  </Switch>
	</Router>,
	document.getElementById("root")
	);