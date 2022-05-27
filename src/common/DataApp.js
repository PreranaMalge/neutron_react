import React, { createContext, useEffect, useState } from "react";

const DataAppContext = createContext();

const  DataApp = (props) =>{
    const [isLoggedIn,setLogin] = useState(true);
    const [userName,setuserName] = useState('Newton School');
    const [bgColor,setBgColor] = useState('white');

    useEffect(()=>{
        console.log('isLoggedIn',isLoggedIn);
        console.log('userName',userName);
        console.log('bgColor',bgColor);
    })

    return(
        <>
        <DataAppContext.Provider value={{isLoggedIn,setLogin,userName,setuserName,bgColor,setBgColor}}>
        <div className="app-main" style={{background:bgColor}}>
            <div className="container">
                {props.children}
                </div>
        </div>
        </DataAppContext.Provider>
        
        </>
    )
}
export default DataApp;
export {DataAppContext};

//limitation if context -api =>

// all components using context variables will re-render
// all data have to be stored in single context component
// if api calls, store all on that single object
// component ot component data sharing is not possible

//solution is REDUX