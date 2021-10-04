import React, { Component } from "react";

class Education extends Component {
  render() {
    return (
      <div>
        <h1>Education: Academic</h1>
        <ul>
          College: {this.props.education.school1}
          <li>
            {this.props.education.start1} - {this.props.education.finish1}
          </li>
          <li>Major: {this.props.education.major}</li>
        </ul>
        <ul>
          High School: {this.props.education.school2}
          <li>
            {this.props.education.start2} - {this.props.education.finish2}
          </li>
        </ul>
        <h2>Education: Certifications</h2>
        <ul>
          Program: {this.props.education.certification1}
          <li>
            {this.props.education.start3} - {this.props.education.finish3}
          </li>
        </ul>
      </div>
    );
  }
}

export default Education;
