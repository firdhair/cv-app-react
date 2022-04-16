const WorkExperiencesView = (props) => {
    //console.log("ini form")
    const {experiences} = props

    console.log("ini work experiences view : ", experiences)

    return(
        <div>
            {experiences.map((experience) => {
                return (
                    <div className="work-experience" key={experience.id}>
                        <p>{experience.company}</p>
                        <p>{experience.position}</p>
                        <p>{experience.year}</p>
                        <p>{experience.end}</p>
                        <p>{experience.jobdesc}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default WorkExperiencesView