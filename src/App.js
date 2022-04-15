// import logo from './logo.svg';
// import './App.css';
import Form from './components/Form'

import { Component } from "react";

class App extends Component{
  constructor(props) {
    super()

    this.state = {
      form: {
        name: ["Fira"],
        job: ["Student"],
        number: ["08xx - xxxx - xxxx"],
        email: ["firdhair30@gmail.com"],
        location: ["Medan"],
        desc: ["The quick brown fox jumps over the lazy dog"],
      }
    }

    this.onSubmitForm = this.onSubmitForm.bind(this)    
  }

  handleChange = (e) => {
    console.log("e: ", e.target.parentNode[1].value)
    this.setState({
      form:{
        name: e.target.parentNode[0].value,
        job:e.target.parentNode[1].value,
        number: e.target.parentNode[2].value,
        email: e.target.parentNode[3].value,
        location: e.target.parentNode[4].value, 
        desc:e.target.parentNode[5].value
      }
    })
    console.log("ini handleChange, nama: ", this.state.form.name)
  }

  onSubmitForm = (e) => {
    e.preventDefault()
    console.log("ini onSubmitForm")
  }

  render() {
    const {form} = this.state

    return(
      <div>
        <h3>Yooo</h3>
        <Form handleChange={this.handleChange} form={form}/>
      </div>
    )
  }
}

export default App;
