import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/courses/";

export function getCourses() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function saveCourse(course) {
  return fetch(baseUrl + (course.id || ""), {
    method: course.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(course)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteCourse(courseId) {
  // to simulate error on delete
  return fetch(baseUrl + courseId, { method: "DELETE" })
  // return fetch(baseUrl + 10000, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
