import React from "react";

export default function CoursesDisplay(props){
    const {courses, displayTitle} = props
    return (
        <div className="courseDisplayContainer">
            <h2 className="displayTitleText">{displayTitle}</h2>
            <hr></hr>
            <div className="courseDisplayFlex row">
                {courses.map((course) =>(
                    <div className="courseCardContainer">
                        <img key={course.id} src={course.img} className='courseImg'></img>
                        <h3 key={course.name} className="courseTitle">{course.name}</h3>
                        <a key={course.language} className="courseLanguage" href={`#${course.language}`}>{course.language}</a>
                        <p key={course.users} className="courseUserCount">{course.users.toLocaleString("en-US")} users</p>
                    </div>
                ))}
            </div>
        </div>
    )
}