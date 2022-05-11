import React,{useState} from "react";
import LiftStateChild from "./LiftStateChild";

const LiftState =()=>{
    const [country,setcountry] = useState('India');

    const updateCountry =(data)=>{
        console.log('parent compoent method clicked...',data);
        setcountry(data);
    }

    const updateCountryInput = (event) =>{
        console.log('input field function trigger....',event.target.value);
        setcountry(event.target.value);
    }
    return(
        <>
        <div className="row-bg-danger bg-opacity-50">
            <div className="col-12">
                Lift State
            </div>
        </div>

        <div className="row-bg-warning bg-opacity-50">
        <div className="col-12">
                <LiftStateChild country = {country} liftFn={updateCountry} handleChange={updateCountryInput}/>
            </div>
        </div>
        
        </>
    )
}
export default LiftState;