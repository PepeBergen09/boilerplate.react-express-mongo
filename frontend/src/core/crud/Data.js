import React, { Component } from "react";
import axios from 'axios';

class Data extends Component {
    constructor(){
        super();
        this.state = {
            name: ""
        }
        this.data = axios.get('http://localhost:8080/data');
        console.log(this.data);
    }

    render(){ 
        return(
            <div className="container">
                <h2 className="mt-5 mb-5">Data</h2>
                <p>{this.data[0]}</p>
            </div>
        );
    }
}

export default Data;