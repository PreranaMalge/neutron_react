import React, { createContext, useState } from "react";
import ChildA from "./ChildA";

const NameContext = createContext();

const Parent = ()=>{
    const [name,setName] = useState('Mr.Abc');
    const [count,setCount] = useState(0);

    return(
        <>
        Parent Compoent
        <div>-------------</div>
        <br></br>

        <NameContext.Provider value={{name,setName,count,setCount}}>
            <ChildA />
            </NameContext.Provider>
                
        </>
    )
}
export default Parent;
export {NameContext};