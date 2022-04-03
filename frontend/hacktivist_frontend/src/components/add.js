import React from 'react'
import axios from 'axios'
export default class Add extends React.Component{
	constructor(props){
		super(props)
        this.state={
            vname:this.props.name,
        	vid:this.props.id,
        	leetcode_username:"",
        	codeforces_username:"",
        	github_username:""
        }
		this.onChangeleetcode= this.onChangeleetcode.bind(this);
        this.onChangecodeforces = this.onChangecodeforces.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
         this.onChangegithub=this.onChangegithub.bind(this);
        // this.onChangePrice=this.onChangePrice.bind(this);
        // this.onChangeImage=this.onChangeImage.bind(this);

        
	}
 	onChangeleetcode(event) {
        this.setState({leetcode_username: event.target.value });
    }

    onChangecodeforces(event) {
        this.setState({codeforces_username: event.target.value });
    }
    onChangegithub(event) {
        this.setState({github_username: event.target.value });
    }
    // onChangePrice(event) {
    //     this.setState({ price: event.target.value });
    // }
    // onChangeImage(event){
    // 	this.setState({file: event.target.files[0]});
    // }
    async onSubmit(e) {
        e.preventDefault();
        // var flag=1
        // if (this.state.file==""){
        // 	flag=0
        // }  
        var  lid
        // const List= {
        //     vid:this.state.vid,
        //   vname:this.state.vname,
        // 	leetcode_username:this.state.leetcode_username,
        // 	codeforces_username:this.state.codeforces_username,
        // 	github_username:this.state.github_username
        // }
        const List= this.state
        console.log(List)
        //delete List.files
        await axios.post('http://localhost:4000/form', List)
                 .then(res => {
                   if(res.data.success==true){
                   		lid = res.data.listid
                      document.getElementById("AfterSubmit").innerHTML = "LIST ADDED";
                    
                   }
                   else{
                      document.getElementById("AfterSubmit").innerHTML = "LOGIN FIRST";
                   }
                 });

        console.log(lid)

        // if(flag==1){
	    //     const formData= new FormData();
	    //     formData.append('file',this.state.file,lid)
	    //     console.log(formData)

	    //     axios.post('http://localhost:4000/image', formData)
        //          .then(res => {
        //            console.log(res)
        //          });	
	    //  }          




    }
	render(){


		return(

  			<div>
             <form onSubmit={this.onSubmit}>
                    <div className="form-group">        
                        <label>Leetcode Username </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.leetcode_username}
                               onChange={this.onChangeleetcode}
                               required
                               />
                    </div>
                    <div className="form-group">
                        <label>Codeforces Username </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.codeforces_username}
                               onChange={this.onChangecodeforces}
                               required

                               />  
                    </div>
                    <div className="form-group">
                        <label>Github Username </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.github_username}
                               onChange={this.onChangegithub}
                               required

                               />  
                    </div>
                   {/* <div className="form-group">
                        <label>Price: </label>
                        <input type="number" 
                                min="1"
                               className="form-control" 
                               value={this.state.price}
                               onChange={this.onChangePrice}
                               required
                               />  
                      </div>*/}
          {/*          <div className="form-group">
                        <label>Image: </label>
                        <input type="file" 
                        		accept="image/*"
                               className="form-control" 
                               onChange={this.onChangeImage}

                               />  
                    </div>
                    */}
                    <div className="form-group">
                        <input type="submit" value="Submit your coding profile" className="btn btn-primary"/>
                    </div>
                    <div id ="AfterSubmit">

                    </div>
                </form>
                <div style={{height:'200px'}}></div>
            </div>

		)

	}
}