import React, {useState} from "react"
import Form from "./Form"
    function Target(props){
        const [edited, setEdited] = useState(false)
        const targetClassName = props.target.isAlive === 'true' ? 'alive' : 'eliminated'

        function setEdit(){
            setEdited(prevEdited=>(!prevEdited))
        }
        const alive = props.target.isAlive === "true" ? "false": "true"
        const back = !edited ? "back" : 'hidden'
        const editForm = edited ? "editForm" : 'hidden'
        const dOAButton = props.target.isAlive === 'true'?'Eliminated' : 'put out a hit'
        const deadClass = props.target.isAlive  === 'true'? 'hidden' : 'dead'
        const aliveClass = props.target.isAlive  !== 'true'? 'hidden' : 'alive'
        return(
            <div className = {`${targetClassName} container`}>
                <div className = "flipCard">
                    <div className = "front">
                        <p className = {deadClass}>x</p>
                        <img src = {props.target.image} alt = {props.target.firstName + props.target.lastName} width = '150px' height = '180px'/>
                    </div>
                    <div className = {back}>
                        <p>{props.target.firstName +" "+ props.target.lastName}</p>
                        <p className = {aliveClass}>Wanted For: {props.target.bountyAmount}</p>
                        <p className = {`bounty ${deadClass}`}>BOUNTY PAID</p>
                        <button onClick = {()=>props.editFunction({isAlive: alive, _id:props.target._id})}>{dOAButton}</button>
                        <button onClick = {()=>props.deleteFunction(props.target._id)}>Delete From List</button>
                        <button onClick = {setEdit}>Edit</button>
                    </div>
                    <div className = {editForm}>
                        <Form  target = {props.target} submitFunction = {props.editFunction} id = {props.target._id} endEdit = {setEdit}/>
                    </div>

                </div>

            </div>
        )
    }
export default Target 