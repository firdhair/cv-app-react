import React from 'react';
import PersonalInfoInput from './PersonalInfoInput'
const Form = (props) => {
    console.log("ini form")
    const {personalDetails, handleChange} = props

    console.log("form: ", personalDetails)
    // for(let i = 0; i < form.length; i++) {
    //     console.log(form[i]);
    // }

    return(
        <div className='form-container'>
            <div className='form-personal'>
                <h4>Personal Details</h4>
            <form>
                <PersonalInfoInput
                    type="text"
                    placeholder="Name"
                    value={personalDetails.name}
                    name="name"
                    id="name"
                    onChange={handleChange}
                />
                <PersonalInfoInput
                    type="text"
                    placeholder="Job"
                    value={personalDetails.job}
                    name="job"
                    id="job"
                    onChange={handleChange}
                />
                <PersonalInfoInput
                    type="text"
                    onChange={handleChange}
                    placeholder="Number"
                    value={personalDetails.number}
                    name="number"
                    id="number"
                />
                <PersonalInfoInput
                    type="text"
                    onChange={handleChange}
                    placeholder="Email"
                    value={personalDetails.email}
                    name="email"
                    id="email"
                />
                <PersonalInfoInput
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
        </div>
    )
}

export default Form