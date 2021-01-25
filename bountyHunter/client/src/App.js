import React, { useEffect, useState } from "react"
import axios from "axios"
import Target from "./Target"
import Form from "./Form"
    function App(){
        const [hitList, sethitList] = useState([])
        const [count, setCount] = useState([0])

        useEffect(()=>{
            axios.get("/bounties")
                .then(response=> {
                    return(sethitList(response.data))})
        },[count])

        function addToList(targetObject){
            axios.post("/bounties", targetObject)
                .then(response=>console.log(response))
                setCount(1)

        }

        function deleteFromList(targetObjectId){
            axios.delete(`bounties/${targetObjectId}`)
                .then(response=>console.log(response))
                setCount(2)


        }

        function updateTarget(targetObject){
            axios.put(`bounties/${targetObject._id}`, targetObject)
                .then(response=>console.log(response))
                setCount(3)


        }

        const hitListComponent = hitList.map(target => <Target key = {target._id} target = {target} deleteFunction = {deleteFromList} editFunction = {updateTarget}/>)
        return(
            <div>
                <h3>Enter a new target </h3>
                <div className = 'form'>
                    <Form submitFunction = {addToList} 
                target = {        
                   { firstName :"",
                    lastName : "",
                    isAlive : true,
                    bountyAmount : 0,
                    image: ""}
                    }/> 
                </div>
                
                <h1>The List</h1>
                <div className = "gridContainer">
                    {hitListComponent}
                </div>
               

            </div>
            


        )
    }
export default App 