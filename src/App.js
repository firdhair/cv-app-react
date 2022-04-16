// import logo from './logo.svg';
// import './App.css';
import './styles/style.css';
import Form from './components/Form'
import PersonalDetailsView from './components/views/PersonalDetailsView';
import WorkExperiencesView from './components/views/WorkExperiencesView';
import { Component } from "react";
import uniqid from "uniqid"

class App extends Component{
  constructor(props) {
    super()

    this.state = {
      personalDetails: {
        name: ["Fira"],
        job: ["Student"],
        number: ["08xx - xxxx - xxxx"],
        email: ["firdhair30@gmail.com"],
        location: ["Medan"],
        desc: ["The quick brown fox jumps over the lazy dog"],
      },
      experiences: [
        {
          company: 'Zenius',
          position: 'Front End Engineer',
          year: '2023',
          status: 'Active',
          jobdesc: 'The quick jumpy jumpy',
          id:uniqid()
        },
        {
          company: 'Zenius2',
          position: 'Front End Engineer',
          year: '2023',
          status: 'Active',
          jobdesc: 'The quick jumpy jumpy',
          id:uniqid()
        }
      ]
    }

    this.onSubmitForm = this.onSubmitForm.bind(this) 
    this.handleDeleteExperience = this.handleDeleteExperience.bind(this) 
    this.handleChangeExperiences = this.handleChangeExperiences.bind(this)
  }

  handleChange = (e) => {
    //console.log("e: ", e.target.parentNode[1].value)
    console.log("e: ", e.target.parentNode)
    const cobak= this.state.personalDetails;
    //console.log("cobak: ", cobak)
    
    this.setState({
      personalDetails:{
        name: e.target.parentNode[0].value,
        job:e.target.parentNode[1].value,
        number: e.target.parentNode[2].value,
        email: e.target.parentNode[3].value,
        location: e.target.parentNode[4].value, 
        desc:e.target.parentNode[5].value
      },
    })
    //console.log("ini handleChange, nama: ", this.state.personalDetails.name)
  }

  handleChangeExperiences(e, id) {
    console.log("id handleChangeExperiences: ", id, ", e target: ", e.target)
    let coba = [...this.state.experiences];
    //console.log("coba length:", coba.length)
   for(let i = 0; i < coba.length; i++){
      if(coba[i].id === id){
       console.log("coba [i]",coba[i])
       let exp = {...coba[i]};
       console.log("coba desc: ",e.target.parentNode[4].value)
      
      const newExp = [...this.state.experiences]
      newExp[i] = {
        company: `${e.target.parentNode[0].value}`,
        position: `${e.target.parentNode[1].value}`,
        year: `${e.target.parentNode[2].value}`,
        status: `${e.target.parentNode[3].value}`,
        jobdesc: `${e.target.parentNode[4].value}`,
        id: `${coba[i].id}`
      }
      this.setState({
        experiences: newExp
      })
        console.log("new exp ",newExp)
      }
    }
    console.log("after: ", coba)
  }

  handleDeleteExperience(id) {
    //e.preventDefault()
    console.log("ini handle delete")
    //console.log("ini id handle delete", id)
    const experiences = this.state.experiences;
    //console.log("delete experiences", experiences)
    const updatedExperiences = experiences.filter((experience) => experience.id !== id)
    
    console.log("updatedExperiences: ", updatedExperiences)
    this.setState({
        experiences: updatedExperiences
    })
  }

  onSubmitForm = (e) => {
    e.preventDefault()
    console.log("ini onSubmitForm")
  }

  render() {
    const {personalDetails, experiences} = this.state
    // console.log("personal details: ", personalDetails)
    // console.log("workExperiences id: ", experiences)

    return(
      <div className="main-container">
        {/* <h3>Yooo</h3> */}
        <Form 
          handleChange={this.handleChange} 
          personalDetails={personalDetails} 
          experiences={experiences} 
          deleteExperience={this.handleDeleteExperience}
          changeExperience={this.handleChangeExperiences}
        />
        <PersonalDetailsView personalDetails={personalDetails}/>
        <WorkExperiencesView experiences={experiences}/>
      </div>
    )
  }
}

export default App;
