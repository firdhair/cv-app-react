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
        desc: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."],
      },
      experiences: [
        {
          company: 'X Company',
          position: 'Front End Engineer',
          year: '2022',
          end: '2023',
          jobdesc: ' Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"',
          id:uniqid()
        },
        {
          company: 'Z Company',
          position: 'Front End Engineer',
          year: '2024',
          end: '2025',
          jobdesc: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.',
          id:uniqid()
        }
      ],
      education: [
        {
          course: 'Introduction to Artificial Intelligence',
          institution: 'MIT',
          year: '2025',
          end: 'Present',
          edudesc: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."',
          id: uniqid()
        },
        {
          course: 'Data Structure',
          institution: 'MIT',
          year: '2020',
          end: '2024',
          edudesc: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. ',
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
