import React from "react";

export default function CoursesDisplay(props){
    const {courses, displayTitle} = props
    return (
        <div className="courseDisplayContainer">
            <h2>{displayTitle}</h2>
            <hr></hr>
            <div className="courseDisplayFlex row">
                {courses.map((course) =>(
                    <div className="courseCardContainer">
                        <img key={course.id} src={course.img} className='courseImg'></img>
                        <p key={course.name} className="courseTitle">{course.name}</p>
                        <a key={course.language} className="courseLanguage" href={`#${course.language}`}>{course.language}</a>
                        <p key={course.users} className="courseUserCount">{course.users.toLocaleString("en-US")} users</p>
                    </div>
                ))}
            </div>
        </div>
    )
}