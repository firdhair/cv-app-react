const PersonalInfo = (props) => {
    console.log("ini form")
    const {personalDetails} = props

    console.log("ini personal info: ", personalDetails)

    return(
        <div>
            <div>
                <p>{personalDetails.name}</p>
                <p>{personalDetails.job}</p>
                <p>{personalDetails.number}</p>
                <p>{personalDetails.email}</p>
                <p>{personalDetails.location}</p>
                <p>{personalDetails.desc}</p>
            </div>
        </div>
    )
}

export default PersonalInfo