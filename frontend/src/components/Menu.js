
import {Link} from "react-router-dom";
import React from "react";
import '../App.css';
//import logout from '../App.js'



const MenuDiv = ({username, status, logout}) => {
    console.log('menu1',username,status)
//    if ( username === '_' && status ) {
//    username = 'unknown'}
//    console.log('menu2',username,status)
    return (
    <div className="Menu-div">
        <nav >
            <ul className="Menu-nav">
                <li className="Menu-li">
                              {/* <a href="/users" > Users</a> */}
                    {/* <Link to="/users" > Users</Link> */}
                    <Link to="/users" > Users</Link>

                </li>
                <li className="Menu-li">
                                {/* <a href="/projects" > Projects</a> */}
                      {/* <Link to="/projects" onClick={() => window.location.reload()}>Projects</Link> */}
                        <Link to="/projects" >Projects</Link>
                </li>
                <li className="Menu-li">
                     {/* <a href="/TODO" > TODO</a> */}
                     {/* <Link to="/TODO" onClick={() => window.location.reload()}>TODO</Link> */}
                     <Link to="/todos" > TODO</Link>
                </li>
            </ul>

        </nav>
        <nav>
             <ul className="Menu-nav">
                <li className="Menu-li">
                      { status? username:<p />  }
                </li>
                <li className="Menu-li">
                  {status? <button onClick={()=> logout()}>LogOut</button> :
                           <Link to='/login'>LogIn</Link>}
                </li>
             </ul>
        </nav>

    </div>

       )
    }


export default MenuDiv