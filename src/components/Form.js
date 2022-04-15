import React from 'react';
const Form = (props) => {
    console.log("ini form")
    const {form, handleChange} = props

    console.log("form: ", form)
    // for(let i = 0; i < form.length; i++) {
    //     console.log(form[i]);
    // }

    return(
        <div>
            <form>
                <input 
                    type="text"
                    onChange={handleChange}
                    placeholder="Name"
                    value={form.name}
                    name="name"
                    id="name"
                >
                </input>
                <input 
                    type="text"
                    onChange={handleChange}
                    placeholder="Job"
                    value={form.job}
                    name="job"
                    id="job"
                >
                </input>
                <input 
                    type="text"
                    onChange={handleChange}
                    placeholder="Number"
                    value={form.number}
                    name="number"
                    id="number"
                >
                </input>
                <input 
                    type="text"
                    onChange={handleChange}
                    placeholder="Email"
                    value={form.email}
                    name="email"
                    id="email"
                >
                </input>
                <input 
                    type="text"
                    onChange={handleChange}
                    placeholder="Location"
                    value={form.location}
                    name="location"
                    id="location"
                >
                </input>
                <input 
                    type="text"
                    onChange={handleChange}
                    placeholder="Desc"
                    value={form.desc}
                    name="desc"
                    id="desc"
                >
                </input>
                {/* <button type="submit">Submit</button> */}
            </form>
            <div>
                <p>{form.name}</p>
                <p>{form.job}</p>
                <p>{form.number}</p>
                <p>{form.email}</p>
                <p>{form.location}</p>
                <p>{form.desc}</p>
            </div>
        </div>
    )
}

export default Form