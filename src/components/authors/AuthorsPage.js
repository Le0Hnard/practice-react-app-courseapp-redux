import React, { useEffect } from "react";
import { connect } from "react-redux";
import AuthorList from "./AuthorList";
import Spinner from "../common/Spinner";
import * as authorActions from "../../redux/actions/authorActions";

const AuthorsPage = ({ authors, loadAuthors, loading }) => {
  useEffect(() => {
    if (authors.length === 0) {
      loadAuthors().catch((error) => {
        alert("Loading authors failed " + error);
      });
    }
  }, []);

  return (
    <>
      <h2>Authors</h2>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <AuthorList authors={authors} />
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    authors: state.authors,
    loading: state.apiCallsInProgress > 0,
  };
};

const mapDispatchToProps = {
  loadAuthors: authorActions.loadAuthors,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthorsPage);
