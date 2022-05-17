import React from "react";
import withFilter from "./withFilter";

const country_list = ['India','USA','Ukrain','Sri Lanka','Nepal','Pakistan','UK','Poland','UAE'];

class Hoc_Country extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
            {this.props.list && this.props.list.map((item)=>(
                <div>{item}</div>
            ))}
            </>
        )
    }
}
export default withFilter(Hoc_Country,country_list);