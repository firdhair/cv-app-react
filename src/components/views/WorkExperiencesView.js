const WorkExperiencesView = (props) => {
    //console.log("ini form")
    const {experiences} = props

    console.log("ini work experiences view : ", experiences)

    return(
        <div className="work-experiences-container">
           <div className="work-experiences-title">
                <h4>Experiences</h4>
           </div>
            <div className="work-experiences-list">
                {experiences.map((experience) => {
                    return (
                        <div className="experience-list" key={experience.id}>
                            <p className="job-position">{experience.position}</p>
                            <p className="job-company">{experience.company}</p>
                            <p className="job-year">{experience.year} - {experience.end}</p>
                            <p className="job-description">{experience.jobdesc}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default WorkExperiencesView