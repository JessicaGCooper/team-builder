import React,  { useState }  from 'react'

const Form = props => {

    console.log('props', props)

    const [formInput, setFormInput] = useState({
        name: '',
        email: '',
        role: ''
      });

    const changeHandler = event => {
        setFormInput({  
        ...formInput,
        [event.target.name]: event.target.value,
        })
    }

    const submitForm = event => {
        event.preventDefault();
        props.addNewMember(formInput);
        setFormInput({
            name: '',
            email: '',
            role: ''
        })
    }


    return (
        <div className='formContainer'>
            <form onSubmit={submitForm} className='form'>
                <label htmlFor='name'>Name:</label>
                <input 
                onChange={changeHandler} 
                type='text' 
                name='name' 
                placeholder='enter full name'
                max-length='30' 
                />
                <br />

                <label htmlFor='email'>Email:</label>
                <input 
                onChange={changeHandler} 
                type='text' 
                name='email' 
                placeholder='enter email'
                max-length='30'  
                />
                <br />

                <label htmlFor='role'>Role:</label>
                <select onChange={changeHandler}  name='role'>
                    <option />
                    <option>Front End Engineer</option>
                    <option>Back End Engineer</option>
                    <option>UX Designer</option>
                    <option>Public Relations Manager</option>
                    <option>Team Coordinator</option>
                </select>
                <br />

                <button>Add Team Member</button>
            </form>    
        </div>
    )
}

export default Form




