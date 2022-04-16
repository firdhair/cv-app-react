// import logo from './logo.svg';
// import './App.css';
import './styles/style.css';
import Form from './components/Form'
import PersonalDetailsView from './components/views/PersonalDetailsView';
import WorkExperiencesView from './components/views/WorkExperiencesView';
import EducationView from './components/views/EducationView';
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
        desc: ["Bacon ipsum dolor amet meatloaf pork chop buffalo ribeye turkey ground round. Chicken ribeye hamburger, bresaola pancetta strip steak doner cupim spare ribs frankfurter. Porchetta t-bone rump tri-tip, kevin prosciutto burgdoggen ground round shank ball tip meatball tail. Beef brisket t-bone, turducken kielbasa shankle boudin jerky drumstick flank sirloin frankfurter. "],
      },
      experiences: [
        {
          company: 'X Company',
          position: 'Front End Engineer',
          year: '2022',
          end: '2023',
          jobdesc: 'Bacon ipsum dolor amet meatloaf pork chop buffalo ribeye turkey ground round. Chicken ribeye hamburger, bresaola pancetta strip steak doner cupim spare ribs frankfurter. Porchetta t-bone rump tri-tip, kevin prosciutto burgdoggen ground round shank ball tip meatball tail. Beef brisket t-bone, turducken kielbasa shankle boudin jerky drumstick flank sirloin frankfurter. ',
          id:uniqid()
        },
        {
          company: 'Z Company',
          position: 'Front End Engineer',
          year: '2024',
          end: '2025',
          jobdesc: 'Bacon ipsum dolor amet meatloaf pork chop buffalo ribeye turkey ground round. Chicken ribeye hamburger, bresaola pancetta strip steak doner cupim spare ribs frankfurter. Porchetta t-bone rump tri-tip, kevin prosciutto burgdoggen ground round shank ball tip meatball tail. Beef brisket t-bone, turducken kielbasa shankle boudin jerky drumstick flank sirloin frankfurter. ',
          id:uniqid()
        }
      ],
      education: [
        {
          course: 'Introduction to Artificial Intelligence',
          institution: 'MIT',
          year: '2025',
          end: 'Present',
          edudesc: 'The jump jump fox quick brownnnn',
          id: uniqid()
        },
        {
          course: 'Data Structure',
          institution: 'MIT',
          year: '2020',
          end: '2024',
          edudesc: 'The jump jump fox quick brownnnn',
          id: uniqid()
        }
      ]
    }

    this.handleDeleteExperience = this.handleDeleteExperience.bind(this) 
    this.handleChangeExperiences = this.handleChangeExperiences.bind(this)
    this.addNewExperience = this.addNewExperience.bind(this)
    this.handleChangeEducation = this.handleChangeEducation.bind(this)
    this.handleDeleteEducation = this.handleDeleteEducation.bind(this) 
    this.addNewEducation = this.addNewEducation.bind(this)
  }

  handleChange = (e) => {
    //console.log("e: ", e.target.parentNode[1].value)
    console.log("e: ", e.target.parentNode)
    
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
  }

  handleChangeExperiences(e, id) {
    console.log("id handleChangeExperiences: ", id, ", e target: ", e.target)
    let coba = [...this.state.experiences];
    for(let i = 0; i < coba.length; i++){
      if(coba[i].id === id){
        let newExp = [...this.state.experiences]
        newExp[i] = {
          company: `${e.target.parentNode[0].value}`,
          position: `${e.target.parentNode[1].value}`,
          year: `${e.target.parentNode[2].value}`,
          end: `${e.target.parentNode[3].value}`,
          jobdesc: `${e.target.parentNode[4].value}`,
          id: `${coba[i].id}`
        }
        this.setState({
          experiences: newExp
        })
      }
    }
    console.log("after: ", coba)
  }

  addNewExperience(e) {
    e.preventDefault()
    //console.log("ini event add experience: ", e.target)
    
    let newExp = [...this.state.experiences]
    //console.log("coba addNewExperience: ", newExp);
    newExp = {
        company: '',
        position: '',
        year: '',
        end: '',
        jobdesc: '',
        id: uniqid()
    }
    this.setState({
        experiences: this.state.experiences.concat(newExp)
    })
    //console.log("set state after new experience: ", this.state.experiences)
  }

  handleDeleteExperience(id) {
    //e.preventDefault()
    //console.log("ini handle delete")
    const experiences = this.state.experiences;
    const updatedExperiences = experiences.filter((experience) => experience.id !== id)
    
    console.log("updatedExperiences: ", updatedExperiences)
    this.setState({
        experiences: updatedExperiences
    })
  }

  handleChangeEducation(e, id) {
    console.log("id handleChangeEducation: ", id, ", e target: ", e.target)
    let coba = [...this.state.education];
    for(let i = 0; i < coba.length; i++){
      if(coba[i].id === id){
        let newExp = [...this.state.education]
        newExp[i] = {
          course: `${e.target.parentNode[0].value}`,
          institution: `${e.target.parentNode[1].value}`,
          year: `${e.target.parentNode[2].value}`,
          end: `${e.target.parentNode[3].value}`,
          edudesc: `${e.target.parentNode[4].value}`,
          id: `${coba[i].id}`
        }
        this.setState({
          education: newExp
        })
      }
    }
    console.log("after handleChangeEducation: ", this.state.education)

  }

  handleDeleteEducation(id){
    console.log("ini handle delete")
    const education = this.state.education;
    const updatedEducation = education.filter((education) => education.id !== id)
    
    console.log("updatedExperiences: ", updatedEducation)
    this.setState({
        education: updatedEducation
    })
  }

  addNewEducation(e){
    e.preventDefault()
    console.log("ini addNewEducation: ", e.target)

    let newExp = [...this.state.education]
    console.log("coba addNewExperience: ", newExp);
    newExp = {
        course: '',
        institution: '',
        year: '',
        end: '',
        edudesc: '',
        id: uniqid()
    }
    this.setState({
        education: this.state.education.concat(newExp)
    })
    console.log("set state after new education: ", this.state.education)
  }

  render() {
    const {personalDetails, experiences, education} = this.state
    // console.log("personal details: ", personalDetails)
    // console.log("workExperiences id: ", experiences)

    return(
      <div className="main-container">
        {/* <h3>Yooo</h3> */}
        <Form 
          handleChange={this.handleChange} 
          personalDetails={personalDetails} 
          experiences={experiences} 
          education={education}

          addExperience={this.addNewExperience}
          changeExperience={this.handleChangeExperiences}
          deleteExperience={this.handleDeleteExperience}

          addEducation = {this.addNewEducation}
          changeEducation = {this.handleChangeEducation}
          deleteEducation={this.handleDeleteEducation}
        />
        <div className="cv-container">
          <div className="cv-container__attributes">
            <PersonalDetailsView personalDetails={personalDetails}/>
            <WorkExperiencesView experiences={experiences}/>
            <EducationView education={education}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
