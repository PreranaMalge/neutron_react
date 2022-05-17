import React from "react";
import withFilter from "./withFilter";

const state_List = ['Maharashtra','Delhi','Up','Mp','Uttarakhand','Harayana','J&k','Gujrat','AndraPradesh','Telangana']

const Hoc_State = (props)=>{
    return(
        <>
        {props.list && props.list.map((item)=>(
            <div>{item}</div>
        ))}
        </>
    )
}
export default withFilter(Hoc_State,state_List);