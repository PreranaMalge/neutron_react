import React, { useContext } from 'react';
import { NameContext } from './Parent';


const ChildD = () =>{
    const temp = useContext(NameContext);
    return (
        <>
        child D Compoent
        <br></br>
        Name in D - {temp.name}
        <br></br>
        Count in D - {temp.count}
        <br></br>
        <button onClick={()=>temp.setName('New Mr.XYZ')}>Update Name</button>
        <br></br>
        <button onClick={()=>temp.setCount(temp.count + 1)}>Update Count</button>
        <br></br>
        <div>----------------------</div>

        </>
    )
}
export default ChildD;