import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {Nav, Navbar} from 'react-bootstrap';

const Menubar = ()=>{
    return(
        <>
            <div className='row bg-info bg-opacity-75'>
            <div className='col-12 text-center'>
                <Navbar>
                    <Link to='/github' className='nav-link btn btn-outline-success'>Github</Link>
                    <Link to='/githubfn' className='nav-link btn btn-outline-success'>Github Fn</Link>
                    <Link to='/contactapp' className='nav-link btn btn-outline-success'>ContactApp</Link>
                    <Link to='/classcomp' className='nav-link btn btn-outline-success'>Class Comp</Link>
                    <Link to='/test' className='nav-link btn btn-outline-success'>Test</Link>
                    <Link to='/home' className='nav-link btn btn-outline-success'>Home</Link>
                    <Link to='/cricket' className='nav-link btn btn-outline-success'>Cricket</Link>
                    <Link to='/bollywood' className='nav-link btn btn-outline-success'>Bollywood</Link>
                    <Link to='/liftstate' className='nav-link btn btn-outline-success'>Lift State</Link>
                    <Link to='/emi' className='nav-link btn btn-outline-success'>EMI</Link>
                    <Link to='/refclass' className='nav-link btn btn-outline-success'>RefClass</Link>
                    <Link to='./reffn' className='nav-link btn btn-outline-success'>RefFn</Link>
                    <Link to='./formfn' className='nav-link btn btn-outline-success'>FormFn</Link>
                    <Link to='./formfnvalidation' className='nav-link btn btn-outline-success'>FormFnValidation</Link>
                    <Link to ='./hoccountry' className='nav-link btn btn-outline-success'>Hoc_Country</Link>
                    <Link to='./hocstate' className='nav link btn btn-outline-success'>Hoc_State</Link>
                    <Link to='./hoccity' className='nav link btn btn-outline-success'>Hoc_City</Link>
                    <Link to='./todo' className='nav link btn btn-outline-success'>ToDo</Link>
                    <Link to='./modal' className='nav link btn btn-outline-success'>Modal</Link>
                </Navbar>
            </div>
            </div>
        </>
    )
}

export default Menubar;