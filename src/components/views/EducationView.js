const WorkExperiencesView = (props) => {
    //console.log("ini form")
    const {education} = props

    console.log("ini education view : ", education)

    return(
        <div>
            {education.map((education) => {
                return (
                    <div className="education" key={education.id}>
                        <p>{education.course}</p>
                        <p>{education.institution}</p>
                        <p>{education.year}</p>
                        <p>{education.end}</p>
                        <p>{education.edudesc}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default WorkExperiencesView