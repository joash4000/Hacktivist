import React from "react"
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


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


