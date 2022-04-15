const PersonalInfoInput = (props) => {
    console.log("ini personal info input")
    const {type, onChange, placeholder, value, name, id} = props

    return(
            <input 
                    type={type}
                    onChange={onChange}
                    placeholder={placeholder}
                    value={value}
                    name={name}
                    id={id}
            ></input>
    )
}

export default PersonalInfoInput