import React, { Component } from "react";

class Signup extends Component {
    constructor(){
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            error: ""
        };
    }

    render(){
        return(
            <div className="container"></div>
        )
    }
}

export default Signup;