import {Component} from "react"
class Child extends Component{

    constructor(props){
        super(props);
        console.log(this.props.title + "constructor");
    }

    componentDidMount(){
        console.log(this.props.title + "Mount");
    }

    render(){
         console.log(this.props.title + "render");
        return(
          <>
          <h1>This is a {this.props.title} component</h1>
          </>
        )
    }
}

export default Child;