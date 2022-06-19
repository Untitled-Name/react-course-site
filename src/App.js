import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import data from './data';
import {useState} from 'react';

function App() {
  const {banners, courses} = data;

  class FilteredCourses{
    constructor(id, name, img, language, users){
        this.id = id;
        this.name = name;
        this.img = img;
        this.language = language;
        this.users = users;
    }
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
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@500&display=swap" rel="stylesheet"></link>
      </head>
      <div className="App">
        <Header courses={topCourses()}></Header>
        <Main banners={banners} courses={topCourses()}></Main>
      </div>
    </>
  );
}

export default App;
