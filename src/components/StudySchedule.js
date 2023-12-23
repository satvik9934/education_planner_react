// StudySchedule.js
import React from 'react';
import './StudySchedule.css'; // Import the CSS file

const StudySchedule = ({ subjects, increaseStudyHours, decreaseStudyHours, removeSubject }) => {
  return (
    <div className="study-schedule">
      <div className="grid-header">
        <div>Subject</div>
        <div>Original Hours</div>
        <div>Amended Hours</div>
        <div>Actions</div>
      </div>
      {subjects.map((subject, index) => (
        <div key={index} className="subject-item">
          <div className="subject-name">{subject.name}</div>
          <div>{subject.originalHours}</div>
          <div>{subject.studyHours}</div>
          <div className="actions">
            <button onClick={() => increaseStudyHours(index)}>+</button>
            <button onClick={() => decreaseStudyHours(index)}>-</button>
            <button onClick={() => removeSubject(index)}>Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudySchedule;
