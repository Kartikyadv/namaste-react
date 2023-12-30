import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.name + "constructor called");
        this.state = {
            count: 0
        };
    }

    componentDidMount(){
        console.log(this.props.name + "Component did mount");
    }
    render() {
        const {name,location} = this.props;
        console.log(name + "render called");
        return (
            <div className="user_card">
                <h1>{this.state.count}</h1>
                <button onClick={()=>{
                    this.setState({
                        count: this.state.count+1,
                    })
                }}>click</button>
                <h1>{name}</h1>
                <h2>{location}</h2>
                <h2>ky5986390@gmail.com</h2>
            </div>
        )
    }
}

export default UserClass;