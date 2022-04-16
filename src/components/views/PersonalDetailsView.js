const PersonalInfo = (props) => {
    //console.log("ini form")
    const {personalDetails} = props

    //console.log("ini personal info: ", personalDetails)

    return(
            <div className="personal-details-container">
                <div className="personal-details">
                    <div className="personal-details__left">
                        <h3 className="personal-name">{personalDetails.name}</h3>
                        <p>{personalDetails.job}</p>
                    </div>
                    <div className="personal-details__right">
                        <p>Mobile: {personalDetails.number}</p>
                        <p>Email: {personalDetails.email}</p>
                        <p>City: {personalDetails.location}</p>
                    </div>
                </div>
                <div className="personal-bio">
                    <h4>Bio</h4>
                    <p className="personal-desc">{personalDetails.desc}</p>
                </div>
            </div>
    )
}

export default PersonalInfo