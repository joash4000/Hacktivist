import React,{ Component } from "react";
class Github extends Component {

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
    console.log(this.props.gu)
  fetch(`https://api.github.com/users/${this.props.gu}`)
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
        {/*<h1> Fetch data from an api in react </h1> */}
        {items.name}
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

export default Github;