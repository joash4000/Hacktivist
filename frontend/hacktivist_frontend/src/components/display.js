import React, { Component } from 'react';
import axios from 'axios'
import {Leet,Gith,Codef} from "./leet";
import Leetcode from "./leetcode";
import Github from './github';
export default class Display extends Component{
	constructor(props){
		super(props) 
		this.state={}

        

	}

	componentDidMount() {
         console.log(this.props.id)
        axios.post('http://localhost:4000/display',{id:this.props.id})
             .then(res => {
                console.log(res.data)
                console.log(res.data.codeforces_username)
                
                var lol=res.data
                this.setState(res.data)
             })
             .catch(function(error) {
                 console.log(error);
             })

           //console.log(this.state)
    }
    
 
	render(){
		var st=this.state
        //var user = st;
        console.log(st)
        console.log(st.codeforces_username)
        console.log(st.leetcode_username)
        console.log(st.github_username)
       // console.log(st[0].leetcode_username)
    //    var lc,cf,gh
    //     for (var i in st){
    //        console.log(st[i].leetcode_username)
    //         lc=st[i].leetcode_username
    //         console.log(st[i].codeforces_username)
    //         cf=st[i].codeforces_username
    //         console.log(st[i].github_username)
    //         gh=st[i].github_username
    //     }
        //  console.log(lc)
        //  console.log(cf)
        //  console.log(gh);
		return(

  		<div>
          
        <Leet us={st.leetcode_username} />
         <Gith us={st.github_username}/>
        <Codef us={st.codeforces_username}/>
          {/*  <Leetcode lu={st.leetcode_username}/>
           <Github gu={st.github_username} />*/}


        </div>
		);

       


  
}

}
