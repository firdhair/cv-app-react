import React from 'react';
import PersonalDetailsInput from './PersonalDetailsInput'
import WorkExperiencesInput from './WorkExperiencesInput'
import NewExperienceInput from './NewExperienceInput'
const Form = (props) => {
    //console.log("ini form")
    const {personalDetails, experiences, handleChange, changeExperience, deleteExperience, addExperience} = props

    //console.log("changeExperience form: ", changeExperience)
    //console.log("personalDetails: ", personalDetails)
    //console.log("workExperiences form: ", experiences)
    // for(let i = 0; i < form.length; i++) {
    //     console.log(form[i]);
    // }


    return(
        <div className='form-container'>
            <div className='form-personal form-input'>
                <h4>Personal Details</h4>
                <form key={experiences.id}>
                    <PersonalDetailsInput
                        type="text"
                        placeholder="Name"
                        value={personalDetails.name}
                        name="name"
                        id="name"
                        onChange={handleChange}
                    />
                    <PersonalDetailsInput
                        type="text"
                        placeholder="Job"
                        value={personalDetails.job}
                        name="job"
                        id="job"
                        onChange={handleChange}
                    />
                    <PersonalDetailsInput
                        type="text"
                        onChange={handleChange}
                        placeholder="Number"
                        value={personalDetails.number}
                        name="number"
                        id="number"
                    />
                    <PersonalDetailsInput
                        type="text"
                        onChange={handleChange}
                        placeholder="Email"
                        value={personalDetails.email}
                        name="email"
                        id="email"
                    />
                    <PersonalDetailsInput
                        type="text"
                        onChange={handleChange}
                        placeholder="Location"
                        value={personalDetails.location}
                        name="location"
                        id="location"
                    />
                    <textarea rows="8" 
                        type="text"
                        onChange={handleChange}
                        placeholder="Desc"
                        value={personalDetails.desc}
                        name="desc"
                        id="desc"
                    >
                    </textarea>
                    {/* <button type="submit">Submit</button> */}
                </form>
            </div>
            <div className="form-experience form-input">
                <h4>Work Experiences</h4>
                <div className="form-experience__input">
                        {/* {experiences.length === 0? <button>Add</button>: null } */}
                        {experiences.map((experience) =>{
                            
                            // if(experience.length === 0){
                            //     console.log("experience is empty")
                            // }
                            // console.log("experience id: ", experience.id)
                            return(
                                <form key={experience.id}>
                                    <WorkExperiencesInput
                                        type="text"
                                        onChange={(e) => changeExperience(e, experience.id)}
                                        placeholder="Company"
                                        value={experience.company}
                                        name="company"
                                        id="company"
                                    />
                                    <WorkExperiencesInput
                                        type="text"
                                        onChange={(e) => changeExperience(e, experience.id)}
                                        placeholder="Position"
                                        value={experience.position}
                                        name="position"
                                        id="position"
                                    />
                                    <WorkExperiencesInput
                                        type="text"
                                        onChange={(e) => changeExperience(e, experience.id)}
                                        placeholder="Start Date"
                                        value={experience.year}
                                        name="year"
                                        id="year"
                                    />
                                    <WorkExperiencesInput
                                        type="text"
                                       onChange={(e) => changeExperience(e, experience.id)}
                                        placeholder="End Date"
                                        value={experience.end}
                                        name="status"
                                        id="status"
                                    />
                                    <textarea rows="4" 
                                        type="text"
                                        onChange={(e) => changeExperience(e, experience.id)}
                                        placeholder="Desc"
                                        value={experience.jobdesc}
                                        name="desc"
                                        id="desc"
                                    >
                                    
                                    </textarea>
                                    <i className = "fas fa-trash" onClick={() => deleteExperience(experience.id)}></i>                                         
                                </form>
                            )
                        })}
                        <button className="btn-add" onClick={(e) => addExperience(e)}>Add Experience</button>
                        {/* <NewExperienceInput/> */}
                </div>
            </div>
        </div>
    )
}

export default Form