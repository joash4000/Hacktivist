import React,{ Component } from "react";
class Leetcode extends Component {

constructor() {
    super()

    this.state = {
        items: [],
        DataisLoaded: false,
    };
}

// ComponentDidMount is used to
// execute the code 
componentDidMount() {
    console.log(this.props.lu)
  
    fetch(
`https://leetcode-stats-api.herokuapp.com/${this.props.lu}?format=json`)
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                items: json,
                DataisLoaded: true
            });
            // let  datas = Array.from(items.data);
            // console.log(datas);
        })
}

render() {
    const { items,DataisLoaded } = this.state;
    console.log(items)
    if (!DataisLoaded) return <div>
        <h1> Please wait some time.... </h1> </div> ;

    return (
    <div className = "App">
        {/*<h1> Fetch data from an api in react </h1> 
        {items.easySolved}*/}
        <header className="App-header">
          <h2>Leetcode User Data</h2>
        </header>
        <div className="user-container">
          <h5 className="info-item">Ranking : {items.ranking}</h5>
          <h5 className="info-item">Acceptance-Rate : {items.acceptanceRate}</h5>
          <h5 className="info-item">Easy Solved : {items.easySolved}</h5>
          <h5 className="info-item">Medium Solved : {items.mediumSolved}</h5>
          <h5 className="info-item">Hard Solved : {items.hardSolved}</h5>
          <h5 className="info-item">Contribution Points : {items.contributionPoints}</h5>
        </div>
         {
        //    Object.keys(items).map((key,i) =>(
        //        <p key={i}>
        //            <span>Key Name: {key}</span>
        //            <span> Value: {items[key]}</span>
        //        </p>
        //    ))
            // items.map((item) => ( 
            // <ol key = { item.id } >
            //     {/* User_Name: { item.username }, 
            //     Full_Name: { item.name }, 
            //     User_Email: { item.email }  */}
            //     {item.ranking}
            //     </ol>
            // ))
        }
    </div>
);
    }
}

export default Leetcode;