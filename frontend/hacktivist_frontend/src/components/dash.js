import React from "react"
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './dash.css'

export default class Dashboard extends React.Component{
	constructor(){
		super()
		var st=localStorage.getItem('mydata')
		console.log(st)

		if (st==null)
		{
			window.location.assign('/user/login');
		}

		this.state=JSON.parse(st)
       // this.onClick=this.onClick.bind(this);
        


	} 
	render(){

		return(
		<Router>	
			<div>

			
	       	<nav  id="navuser" className="navbar navbar-expand-lg navbar-light bg-light">
	          
	       </nav>
				<button id="lolout" className="btn btn-primary" onClick={this.onClick}>LOGOUT</button>
				<div class="card-container">
				<div id="column1">
				  <h2> First column </h2>
				  <p> This is first column of our grid system</p>
				</div>
				<div id="column2">
				  <h2> second column </h2>
				  <p> This is second column of our grid system</p>
				</div>
				<div id="column3">
				  <h2> Third column </h2>
				  <p> This is third column of our grid system</p>
				</div>
			 </div>
	</div>



        {/*
        <Route path="/dashboard/dispatched" component={() => <Dashboard />}/>
        <Route path="/dashboard/search" component={() => <Dashboard />}/>
        <Route path="/dashboard/track" component={() => <Dashboard />}/>
        <Route path="/dashboard/rate" component={() => <Dashboard />}/>*/}

		</Router>
		);
	}
	
}


