import React from "react";
import CoursesDisplay from "./CoursesDisplay";
import FrontBanner from "./FrontBanner";

export default function Main(props){
    const {banners, courses} = props;

    class FilteredCourses{
        constructor(id, name, img, language, users){
            this.id = id;
            this.name = name;
            this.img = img;
            this.language = language;
            this.users = users;
        }
    }

    const filterCourses = (languageToChoose) => {
        var filteredCoursesObj = [];
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

    const topCourses = () => {
        var topCoursesObj = [];
        var ids = [];
        for (const courseName in courses){
            ids.push(parseInt(courses[courseName]['users']));
        }
        ids.sort(function(a, b){return b-a});
        for (let i = 0; i < ids.length; i++){
            for (const courseName in courses){
                if (courses[courseName]['users'] === ids[i]){
                    topCoursesObj.push(new FilteredCourses(courses[courseName]['id'], 
                    courses[courseName]['name'], 
                    courses[courseName]['img'], 
                    courses[courseName]['language'], 
                    courses[courseName]['users']));
                    break;
                }
            }
        }
        return topCoursesObj

    }

    return (
        <div className="mainContainer">
            <FrontBanner banners={banners} courses={courses}></FrontBanner>
            <div className="headingText">
                <h1>Insert Marketing Text Here...</h1>
                <p></p>
            </div>
            <CoursesDisplay courses={topCourses()} displayTitle="Top Courses"></CoursesDisplay>
            <CoursesDisplay courses={filterCourses("French")} displayTitle="French Courses"></CoursesDisplay>
            <CoursesDisplay courses={filterCourses("German")} displayTitle="German Courses"></CoursesDisplay>
            <div className="promoContainer">Words words words words words
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <ul className="promoList">
                    <li>bark bark bark bark</li>
                    <li>woof woof woof woof</li>
                </ul>
            </div>
            <CoursesDisplay courses={filterCourses("Italian")} displayTitle="Italian Courses"></CoursesDisplay>
            <CoursesDisplay courses={filterCourses("Spanish")} displayTitle="Spanish Courses"></CoursesDisplay>
        </div>
    );
}