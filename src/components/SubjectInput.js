// SubjectInput.js
import React, { useState, useEffect } from 'react';
import './SubjectInput.css';

const SubjectInput = ({ addSubject, subjects = [] }) => {
  const [subject, setSubject] = useState('');
  const [studyHours, setStudyHours] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Check if the entered subject name already exists
    const isDuplicate = subjects.some(
      (existingSubject) => existingSubject.name === subject
    );
    if (isDuplicate) {
      setErrorMessage(`Subject "${subject}" already exists.`);
    } else {
      setErrorMessage('');
    }
  }, [subjects, subject]);

  const handleSubjectChange = (event) => {
    const newSubject = event.target.value;
    setSubject(newSubject);

    // Logging to verify subjects being compared
    console.log('Current Subject:', newSubject);
    console.log('Existing Subjects:', subjects.map((s) => s.name));
  };

  const handleStudyHoursChange = (event) => {
    setStudyHours(parseInt(event.target.value, 10));
  };

  const handleAddSubject = () => {
    addSubject({ name: subject, studyHours });
    setSubject('');
    setStudyHours(0); // Reset studyHours to 0
    setErrorMessage(''); // Clear any previous error message
  };

  return (
    <div className="subject-input">
      <div className="input-container">
        <span>Subject Name:</span>
        <input
          type="text"
          placeholder="Enter subject name"
          value={subject}
          onChange={handleSubjectChange}
        />
      </div>
      <div className="input-container">
        <span>Study Hours: </span>
        <input
          type="number"
          min={0}
          value={studyHours}
          onChange={handleStudyHoursChange}
        />
      </div>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <button className="add-button" onClick={handleAddSubject}>
        Add Subject
      </button>
    </div>
  );
};

export default SubjectInput;
