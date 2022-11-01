import React from "react";
import CourseForm from "./CourseForm";
import renderer from "react-test-renderer";
import { courses, authors } from "../../tools/mockData";

it("sets submit button label 'Saving...' when saving is true", () => {
  // renderer returns a tree (an object that represesnts the output of the React component)
  // jest.fn() creates an empty mock function
  // For a boolean prop, it suffices to declare only the prop without the value. This defaults to true.
  const tree = renderer.create(
    <CourseForm 
      course={ courses[0] }
      authors={ authors }
      onSave={ jest.fn() }
      onChange={ jest.fn() }
      saving
    />
  );

  expect(tree).toMatchSnapshot();
});

it("sets submit button label 'Save' when saving is false", () => {
  // renderer returns a tree (an object that represesnts the output of the React component)
  // jest.fn() creates an empty mock function
  // For a boolean prop, it suffices to declare only the prop without the value. This defaults to true.
  const tree = renderer.create(
    <CourseForm 
      course={ courses[0] }
      authors={ authors }
      onSave={ jest.fn() }
      onChange={ jest.fn() }
      saving={ false }
    />
  );

  expect(tree).toMatchSnapshot();
});
