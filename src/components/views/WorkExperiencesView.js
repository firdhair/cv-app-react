const WorkExperiencesView = (props) => {
    //console.log("ini form")
    const {experiences} = props

    console.log("ini work experiences view : ", experiences)

    return(
        <div className="work-experiences-container container">
           <div className="work-experiences-title title">
                <h4>Experiences</h4>
           </div>
            <div className="work-experiences-list list">
                {experiences.map((experience) => {
                    return (
                        <div className="experience-list" key={experience.id}>
                            <p className="job-position bold">{experience.position}</p>
                            <p className="job-company bold">{experience.company}</p>
                            <p className="job-year bold">{experience.year} - {experience.end}</p>
                            <p className="desc">{experience.jobdesc}</p>
                        </div>
                    )
                })}
            </div>
            <hr/>
        </div>
    )
}

export default WorkExperiencesView