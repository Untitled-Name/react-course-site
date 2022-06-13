import React from "react";
import CoursesDisplay from "./CoursesDisplay";
import FrontBanner from "./FrontBanner";

export default function Main(props){
    const {banners, courses} = props;

    const filterCourses = (languageToChoose) => {
        class FilteredCourses{
            constructor(id, name, img, language, users){
                this.id = id;
                this.name = name;
                this.img = img;
                this.language = language;
                this.users = users;
            }
        }
        var filteredCoursesObj = []
        let i = 0;
        for (const courseName in courses){
            if (courses[courseName]['language'] === languageToChoose){
                filteredCoursesObj[i] = new FilteredCourses(courses[courseName]['id'], 
                courses[courseName]['name'], 
                courses[courseName]['img'], 
                courses[courseName]['language'], 
                courses[courseName]['users']);;
                i++;
            }
        }
        return filteredCoursesObj;
    }

    return (
        <div className="mainContainer">
            <FrontBanner banners={banners} courses={courses}></FrontBanner>
            <div className="headingText">
                <h1>Some heading text blah blah blah</h1>
            </div>
            <CoursesDisplay courses={courses} displayTitle="Top Courses"></CoursesDisplay>
            <CoursesDisplay courses={filterCourses("French")} displayTitle="French Courses"></CoursesDisplay>
            <CoursesDisplay courses={filterCourses("German")} displayTitle="German Courses"></CoursesDisplay>
            <CoursesDisplay courses={filterCourses("Italian")} displayTitle="Italian Courses"></CoursesDisplay>
            <CoursesDisplay courses={filterCourses("Spanish")} displayTitle="Spanish Courses"></CoursesDisplay>
        </div>
    );
}