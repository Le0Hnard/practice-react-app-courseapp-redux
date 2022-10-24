import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";

class ManageCoursePage extends React.Component {
  componentDidMount() {
    const { authors, courses, loadCourses, loadAuthors } = this.props;
    if(courses.length === 0) {
      loadCourses().catch(error => {
        alert("Loading courses failed " + error);
      });
    }

    if(authors.length === 0) {
      loadAuthors().catch(error => {
        alert("Loading authors failed " + error);
      });
    }
  }

  render() {
    return (
      <>
        <h2>Manage Course</h2>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    courses: state.courses,
    authors: state.authors
  };
}

const mapDispatchToProps = {
  loadCourses: courseActions.loadCourses,
  loadAuthors: authorActions.loadAuthors
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
