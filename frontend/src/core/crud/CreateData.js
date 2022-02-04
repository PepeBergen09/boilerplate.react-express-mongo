import React, { Component } from "react";

export default class CreateData extends Component {
    constructor(props){
        super(props);
        this.onChangeData = this.onChangeData.bind(this);
        this.onSubmitData = this.onSubmitData.bind(this);

        this.state = {
            data: ''
        }
    }
    onChangeData(e) {
        this.setState({data: e.target.value});
      }

      onSubmitData(e) {
        e.preventDefault()
    
        console.log(`Data successfully created!`);
        console.log(`Data: ${this.state.data}`);
    
        this.setState({data: ''})
      }

  render() {
    return (
        <div className="form-wrapper">
        <p>Create Data</p>
        <form onSubmitData ={this.onSubmitData}>
            <label>Data</label>
            <input type="text"  />
            <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}