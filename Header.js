import React from 'react';
import { useState } from 'react';

export default function Header(props){
    const {courses} = props;
    const [loggedIn, setLoggedIn] = useState(false);
    return (
        <div id='header-container' className='headerContainer row fixed'>
            <a href='#login-page' className='headerLink'>
                <div id='home-button' className='headerItems'>Coursology</div></a>
            
            <div className='dropdown'>
                <button className='dropdownLink'>Courses</button>
                <div className='dropdownMenu'>
                    {courses.map((course) =>(
                        <div key={course.id}>
                            <a href={`#${course.name}`}>{course.name}</a>
                        </div>
                    ))}
                </div>
            </div>

            {/*<a href='#login-page' className='headerLink'>
                <div id='courses-button' className='headerItems'>Courses</div></a>*/}
            {!loggedIn && (
                <div className='row right'>
                    <button className='headerLink button' onClick={() => setLoggedIn(true)}>
                        <div id='login-button' className='headerItems'>Log In</div></button>
                    <a href='#signup-page' className='headerLink'>
                        <div id='signup-button' className='headerItems'>Sign Up</div></a>
                </div>
            )}{loggedIn && (
                <div className='row right'>
                    <button className='headerLink button' onClick={() => setLoggedIn(false)}>
                    <div id='account-button' className='headerItems'>{'username'}</div></button>
                </div>
            )}
        </div>
    );
}