import React from "react";
import { Link,NavLink } from "react-router-dom";
import { Nav,Navbar } from "react-bootstrap";

const Menubar =()=>{
    return(
        <>
        <div className="row-bg-success bg-opacity-75">
            <div className="col-12 text-center">
                <Navbar>
                    <Link to='/test' className="nav-link-btn btn-outLine-success">Test</Link>
                    <Link to='/home' className="nav-link-btn btn-outLine-success">Home</Link>
                    <Link to='/cricket' className="nav-link-btn btn-outLine-success">Cricket</Link>
                    <Link to='/bollywood' className="nav-link-btn btn-outLine-success">Bollywood</Link>
                    <Link to='/liftstate' className="nav-link-btn btn-outLine-success">LiftState</Link>
                </Navbar>
            </div>
        </div>
        
        </>
    )
}
export default Menubar;