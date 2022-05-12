import React,{createRef} from "react";

class RefClass extends React.Component{
    constructor(){
        super();
        this.inputRef1 = createRef();
        this.inputRef2 = React.createRef();
        this.outRef1 = React.createRef();

    }
    handleSubmit = ()=>{
        console.log('handle submit triggered...');
        console.log(this.inputRef1.current.value);
        console.log(this.inputRef2.current.value);
        this.outRef1.current.innerHTML = this.inputRef1.current.value + this.inputRef2.current.value;
        //call api
    }
    render(){
        return(
            <>
            <br></br><br></br>
            <h2>Login Form</h2>
            <br></br><br></br>
            UserName:
            <input type="text" ref={this.inputRef1}/>
            <br></br><br></br>
            Password:
            <input type="password" ref={this.inputRef2}/>
            <br></br><br></br>
            <button onClick={this.handleSubmit}>Login</button>
            <br></br><br></br>
            
            
            </>
        )
        
    }
}
export default RefClass


//uncontrolled Compoent
//controlled compoent