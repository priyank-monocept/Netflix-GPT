import {Component} from "react"
import Child from "./Child"
import Header from "./Header";

class Parent extends Component{
     constructor(){
        super();
        this.state = {
            name: "Default",
            company : "Default",
            location: "Default",
            login: "Default"
        }
        console.log("parent constructor");
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/priyank-monocept")
        const result = await data.json();
        this.setState({
            name: result.name,
            location:result.location,
            company:result.company,
            login:result.login
        })
        this.timer = setInterval(()=>{
            console.log("print everytime");
        }, 500)
        console.log("parent componet did mount pahesd");
       //call api to fetch user details from github
    }

    componentDidUpdate(){
        console.log("parent Run after setstate update");
    }
    
    componentWillUnmount(){
        console.log("It will ummoint");
        //it will basically clean the component
        clearInterval(this.timer);
    }

    render(){
         console.log("parent render");
        const {name,location,company,login} = this.state;
        console.log(name);
        return(
          <>
          <Header/>
          <h1>This is a {this.props.title} Component</h1>
          <p className="company">{company}</p>
          <p className="location">{location}</p>
          <p className="name">{name}</p>
          <p className="login">{login}</p>
          {/* <Child title="Child 1" /> */}
          {/* <Child title="Child 2" /> */}
          </>
        )
    }
}

export default Parent;