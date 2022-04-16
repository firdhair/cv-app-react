const WorkExperiencesView = (props) => {
    //console.log("ini form")
    const {education} = props

    console.log("ini education view : ", education)

    return(
        <div className="education-container container">
            <div className="education-title title">
                <h4>Education</h4>
            </div>
            <div className="education-list list">
                {education.map((education) => {
                return (
                    <div className="education" key={education.id}>
                        <p className="education-course bold">{education.course}</p>
                        <p className="education-institution bold">{education.institution}</p>
                        <p className="education-year bold">{education.year} - {education.end}</p>
                        <p className="desc">{education.edudesc}</p>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default WorkExperiencesView