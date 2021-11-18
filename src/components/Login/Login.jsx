import React, { useState } from 'react';
import './Login.css'
import {BrowserRouter as Router, Link} from 'react-router-dom';

export default function Login({getId}) {
    // const [id, getId] = useState();
    
    return (        
        <div className='parent-container'>
            <div className='cont'>
                <div className='eid'>
                    <input type='text' name='employeeId' placeholder='Enter employee ID' onChange={(e) => getId(e)}  required/>
                </div>
                
            <div>
               <Link to='/home'> <button className='Login_button ideas-button'>Login</button></Link>
             </div>   
            </div>
        </div>
    )
}
