// import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
    constructor(props){
        super(props);
        console.log("parent constructor called");
    }

    componentDidMount(){
        console.log("parent component did mount called");
    }

    render() {
    console.log("parent render called");
        return (
            <div>
                <h1>About</h1>
                <UserClass name={"first"} location={"gurgaon"}/>
                <UserClass name={"second"} location={"gurgaon"}/>
            </div>
        )
    }
};

export default About;