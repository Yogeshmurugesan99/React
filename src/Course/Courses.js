import React from "react";
import Course from './Course';

var courselist = [
    {
        Image: "https://i.udemycdn.com/course/240x135/1793828_7999.jpg",
        Title: "Docker and Kubernetes",
        Author: "Stephen Grinder"
    },
    {
        Image: "https://i.udemycdn.com/course/240x135/950390_270f_3.jpg",
        Title: "Machine leraning",
        Author: "Bret Fisher"
    },
    {
        Image: "https://i.udemycdn.com/course/240x135/1906852_93c6.jpg",
        Title: "Mango-DB",
        Author: "Author:maxmillan"
    }
]

class Courses extends React.Component {


    render() {
        
            let Courseslist = courselist.map(course => {
                return(
                <Course Image={course.Image} Title={course.Title} Author={course.Author} />);
            });
        
        return (
            <div>
                {Courseslist}
            </div>
        );
    }

}
export default Courses;
