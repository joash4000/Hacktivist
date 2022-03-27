import React,{useState,useEffect} from "react"
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './dash.css'

export default class Dashboard extends React.Component{
	constructor(){
		super()
		var st=localStorage.getItem('mydata')
		//console.log(st)
        this.state = {
			leetcode_username: '',
			codefor_username: '',
			github_username:''
	  
		}
		// if (st==null)
		// {
		// 	window.location.assign('/user/login');
		// }
         
		// this.state=JSON.parse(st)
       // this.onClick=this.onClick.bind(this);
	   
	   this.onChangeUsername_l= this.onChangeUsername_l.bind(this);
       this.onChangeUsername_c= this.onChangeUsername_c.bind(this);
       this.onChangeUsername_g= this.onChangeUsername_g.bind(this);
	   this.onSubmit_l = this.onSubmit_l.bind(this);
	//    this.onSubmit_c= this.onSubmit_c.bind(this);
	//    this.onSubmit_g = this.onSubmit_g.bind(this);
	} 
	onChangeUsername_l(event) {
        this.setState({ leetcode_username: event.target.value });
    }
	onChangeUsername_c(event) {
        this.setState({ codefor_username: event.target.value });
    }
	onChangeUsername_g(event) {
        this.setState({ github_username: event.target.value });
    }
	

	onSubmit_l= (e) =>{
	e.preventDefault();	
	// console.log(this.state.leetcode_username)
	     


	}
	render(){

		return(
			
			<div>

			
	       	<nav  id="navuser" className="navbar navbar-expand-lg navbar-light bg-light">
	          
	       </nav>
				<button id="lolout" className="btn btn-primary" onClick={this.onClick}>LOGOUT</button>
				<div class="card-container">
				<div id="column1">
				  <h2> Leetcode </h2>
				  {/*<p> This is first column of our grid system</p>*/}
                   <form onSubmit={this.onSubmit_l}>
				   <div className="form-group">        
				   <label>Leetcode Username: </label>
				   <input type="text" 
						  className="form-control" 
						  value={this.state.leetcode_username}
						  onChange={this.onChangeUsername_l}
						  />
			         </div>
					 <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary"/>
                    </div>
                    <div id ="AfterSubmit">

                    </div>
				   </form>
				</div>
				<div id="column2">
				  <h2> Codeforces </h2>
				   {/*<p> This is second column of our grid system</p>*/}
				  <form onSubmit={this.onSubmit_c}>
				   <div className="form-group">        
				   <label>Codeforces Username: </label>
				   <input type="text" 
						  className="form-control" 
						  value={this.state.codefor_username}
						  onChange={this.onChangeUsername_c}
						  />
			         </div>
					 <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary"/>
                    </div>
				   </form>
				</div>
				<div id="column3">
				  <h2> Github </h2>
				  {/*<p> This is third column of our grid system</p>*/}
				  <form onSubmit={this.onSubmit_g}>
				   <div className="form-group">        
				   <label>Github Username: </label>
				   <input type="text" 
						  className="form-control" 
						  value={this.state.github_username}
						  onChange={this.onChangeUsername_g}
						  />
			         </div>
					 <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary"/>
                    </div>
				   </form>
				</div>
			 </div>
	</div>



        
		
		);
	}
	
}


