const WorkExperiencesView = (props) => {
    //console.log("ini form")
    const {experiences} = props

    console.log("ini work experiences view : ", experiences)

    return(
        <div>
                {/* <p>{personalDetails.name}</p>
                <p>{personalDetails.job}</p>
                <p>{personalDetails.number}</p>
                <p>{personalDetails.email}</p>
                <p>{personalDetails.location}</p>
                <p>{personalDetails.desc}</p> */}
            {experiences.map((experience) => {
                return (
                    <div className="task" key={experience.id}>
                        <p>{experience.company}</p>
                        <p>{experience.position}</p>
                        <p>{experience.year}</p>
                        <p>{experience.status}</p>
                        <p>{experience.jobdesc}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default WorkExperiencesView