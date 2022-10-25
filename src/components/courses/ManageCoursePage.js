import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { loadCourses, saveCourse } from "../../redux/actions/courseActions";
import { loadAuthors } from "../../redux/actions/authorActions";
import CourseForm from "./CourseForm";
import { newCourse } from "../../tools/mockData";

const ManageCoursePage = ({ authors, courses, loadCourses, loadAuthors, saveCourse, history, ...props }) => {
  const [course, setCourse] = useState({ ...props.course });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if(courses.length === 0) {
      loadCourses().catch(error => {
        alert("Loading courses failed " + error);
      });
    } else {
      setCourse({ ...props.course });
    }

    if(authors.length === 0) {
      loadAuthors().catch(error => {
        alert("Loading authors failed " + error);
      });
    }
  }, [props.course]);

  // Destructuring avoids the event getting gargbage collected so that it is available within nested setCourse callback.
  const handleChange = event => {
    const { name, value } = event.target;

    setCourse(prevCourse => ({
      ...prevCourse,
      [name]: name === "authorId" ? parseInt(value, 10) : value
    }));
  };

  const handleSave = event => {
    event.preventDefault();
    saveCourse(course).then(() => { // passed from props not from the above import (bound function in mapDispatchToProps)
      history.push("/courses");
    });
  };

  return (
    <CourseForm 
      course={ course } 
      errors={ errors } 
      authors={ authors } 
      onChange={ handleChange } 
      onSave={ handleSave }
    />
  );
};

// This function is called a selector because it selects data from Redux store.
export function getCourseBySlug(courses, slug) {
  return courses.find(course => course.slug === slug) || null;
}

// mapStateToProps runs every time the Redux store changes
// When data is available, getCourseBySlug will be called.
const mapStateToProps = (state, ownProps) => {
  const slug = ownProps.match.params.slug;
  const course = slug && state.courses.length > 0 ? getCourseBySlug(state.courses, slug) : newCourse;
  return {
    course,
    courses: state.courses,
    authors: state.authors
  };
}

const mapDispatchToProps = {
  loadCourses,
  loadAuthors,
  saveCourse // from above import
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
