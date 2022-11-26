import React from "react";

const AuthorList = ({ authors }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Author</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {authors.map((author) => {
        return (
          <tr key={author.id}>
            <td>{author.name}</td>
            <td>
              <button className="btn btn-outline-danger">Delete</button>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

export default AuthorList;
