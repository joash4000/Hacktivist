import React from 'react'
import axios from 'axios'

export default class List extends React.Component{
	constructor(props){
		super(props) 
		this.state={}

	}

	componentDidMount() {
         console.log(this.props.id)
        axios.post('http://localhost:4000/display',{id:this.props.id})
             .then(res => {
                console.log(res.data.success)
                 this.setState(res.data)
             })
             .catch(function(error) {
                 console.log(error);
             })

           //console.log(this.state)
    }
 
	render(){
		var lol=this.state
		return(

  		<div>
  		   
        </div>
		);
   }
}