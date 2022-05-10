import React ,{useState} from "react";

const BollywoodChild = (props) => {
    const[count,setCount] = useState(0);
    // const[status,setStatus] = useState(true);
    // const[temp,setTemp] = useState('abc');
    // const[arr,setArr] = useState([1,2,3,4,5]);
    // const[obj,setObj] = useState(name:'abcs');

    //first is state variable ,second is method to update state variable
    //type definion and value inititlization
    //method will run in async mode

    const increase =()=> {
        //update count var
        console.log(count);
        setCount(count+1);
        console.log(count);
    }

    return(
        <>
        <div>Movie Name</div>
        <div>{props.temp}</div>

        <div>{count}</div>
        <button onClick={increase}>Increase</button>
        
        </>
    )
}

export default BollywoodChild;