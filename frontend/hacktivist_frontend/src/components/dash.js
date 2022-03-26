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
	
	
}


