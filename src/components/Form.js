import React from 'react';
import PersonalDetailsInput from './PersonalDetailsInput'
import WorkExperiencesInput from './WorkExperiencesInput'
import EducationInput from './EducationInput'
const Form = (props) => {
    //console.log("ini form")
    const { personalDetails, experiences, education, 
            handleChange, changeExperience, deleteExperience, addExperience,
            changeEducation, deleteEducation, addEducation
    } = props


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
                        {experiences.map((experience) =>{
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
                                        name="end"
                                        id="end"
                                    />
                                    <textarea rows="4" 
                                        type="text"
                                        onChange={(e) => changeExperience(e, experience.id)}
                                        placeholder="Desc"
                                        value={experience.jobdesc}
                                        name="jobdesc"
                                        id="jobdesc"
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
            <div className="form-education form-input">
                <h4>Education</h4>
                {education.map((education) =>{
                            return(
                                <form key={education.id}>
                                    <EducationInput
                                        type="text"
                                        onChange={(e) => changeEducation(e, education.id)}
                                        placeholder="Course"
                                        value={education.course}
                                        name="company"
                                        id="company" 
                                    />
                                    <EducationInput
                                        type="text"
                                        onChange={(e) => changeEducation(e, education.id)}
                                        placeholder="Institution"
                                        value={education.institution}
                                        name="institution"
                                        id="institution" 
                                    />
                                    <EducationInput
                                        type="text"
                                        onChange={(e) => changeEducation(e, education.id)}
                                        placeholder="Start Date"
                                        value={education.year}
                                        name="start-date"
                                        id="start-date" 
                                    />
                                    <EducationInput
                                        type="text"
                                        onChange={(e) => changeEducation(e, education.id)}
                                        placeholder="End Date"
                                        value={education.end}
                                        name="end-date"
                                        id="end-date" 
                                    />
                                    <textarea rows="2" 
                                        type="text"
                                        onChange={(e) => changeEducation(e, education.id)}
                                        placeholder="Desc"
                                        value={education.edudesc}
                                        name="edudesc"
                                        id="edudesc"
                                    >
                                    </textarea>
                                    <i className = "fas fa-trash" onClick={() => deleteEducation(education.id)}></i>                                         
                                </form>
                            )
                        })}
                        <button className="btn-add" onClick={(e) => addEducation(e)}>Add Education</button>
            </div>
        </div>
    )
}

export default Form