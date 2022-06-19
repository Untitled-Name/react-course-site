import React from 'react';
import { useState } from 'react';

export default function Header(props){
    const {courses} = props;
    const [loggedIn, setLoggedIn] = useState(false);

    var prevLang = "";

    const sortedCourses = [];
    const allCourses = [];
    var courseFound;
    for (let i = 0; i < courses.length; i++){
        if (i > 0){if (courses[i-1]['language'] != courses[i]['language']){
            for (let j = 0; j < allCourses.length; j++){
                if (courses[i]['language'] == allCourses[j]){
                    courseFound = true; break;
                }
            }
            if (!courseFound){
                allCourses.push(courses[i]['language']);
            }
        }} else{allCourses.push(courses[i]['language']);}
    }
    for (let i = 0; i < allCourses.length; i ++){
        for (let j = 0; j < courses.length; j++){
            if (allCourses[i] == courses[j]['language']){
                sortedCourses.push(courses[j]);
            }
        }
    }

    return (
        <div id='header-container' className='headerContainer row fixed'>

            <a href='#login-page' className='headerLink'>
                <div id='home-button' className='headerItems'>Coursology</div></a>

            <div className='dropdown'>
                <button className='dropdownLink'>Courses</button>
                <div className='dropdownMenu dropdownFlex'>
                        
                        
                        <div className={`${courses[i]['language']}SectionContainer sectionContainer`}>
                            {sortedCourses.map((course) =>(
                                prevLang != course.language 
                                ? (<>{!(prevLang = course.language)}
                                <div className='dropdownSectionHead'>{course.language}</div>
                                    <div key={course.id}>
                                        <a href={`#${course.name}`} className='courseDropdownLink'>{course.name}</a>
                                    </div>
                                </>)
                                : (<>
                                    <div key={course.id}>
                                        <a href={`#${course.name}`} className='courseDropdownLink'>{course.name}</a>
                                    </div>
                                </>)
                            ))}
                        </div>


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