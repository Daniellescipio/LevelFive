import React, { useState } from "react"

function Form(props){
    const [target, setTarget] = useState(
        {
        firstName : props.target.firstName,
        lastName : props.target.lastName,
        isAlive : props.target.isAlive,
        bountyAmount : props.target.bountyAmount,
        image : props.target.image,
        _id : props.target._id
        }
    )
    function handleChange(e){
        const{value, type, name} = e.target
        type === "radio"? setTarget(prevTarget =>({...prevTarget, [name]: value})) : setTarget(prevTarget=>({...prevTarget, [name]: value}))
    }
    
    return(
        <form onSubmit = {(e)=>{
            e.preventDefault()
            return(props.submitFunction(target))}}>
            <label for = "firstName"> First Name :</label>
            <input
            name = 'firstName'
            value = {target.firstName}
            type = 'text'
            onChange = {handleChange}
            id = "firstName"
            />
            <br/>
            <label for = "lastName"> Last Name:</label>
            <input
            name = 'lastName'
            value = {target.lastName}
            type = 'text'
            onChange = {handleChange}
            id = "lastName" 
            />
            <br/>
            <div>
            <label for = "Eliminated">D</label>
            <input
            name = 'isAlive'
            value = "false"
            checked = {target.isAlive === "false"}
            type = 'radio'
            onChange = {handleChange} 
            id = "Eliminated"
            />
            OR
            <label for = "Alive"> A</label>
            <input
            name = 'isAlive'
            value = "true"
            checked = {target.isAlive === "true"}
            type = 'radio'
            onChange = {handleChange} 
            id = "Alive"
            />
            </div>
            <label for = "price"> Amount:</label>
            <input
            name = 'bountyAmount'
            value = {target.bountyAmount}
            type = 'number'
            onChange = {handleChange}
            id = "price" 
            />
            <br/>
            <label for = "image"> Picture:</label>
            <input
            name = 'image'
            value = {target.image}
            type = 'text'
            onChange = {handleChange} 
            id = "image"
            />
            <br/>
            <button className = 'submit' onClick = {props.endEdit}>ENTER</button>

        </form>
    )
}


export default Form