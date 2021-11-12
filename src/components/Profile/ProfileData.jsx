import React from 'react';
import "./Profile.css";

function ProfileData(props) {
    return (
        <div className='header'>
            <h1 className="profile"><em>{`Your Employee Code is : ${props.employee.id}`}</em></h1>
        </div>
    )
}

export default ProfileData;
