// App.js
import React, { useState, useEffect } from 'react';
import SubjectInput from './components/SubjectInput';
import StudySchedule from './components/StudySchedule';
import './App.css';

function App() {
  const [subjects, setSubjects] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  // Load data from local storage on page load
  useEffect(() => {
    const storedSubjects = JSON.parse(localStorage.getItem('subjects')) || [];
    console.log('Loaded from local storage:', storedSubjects);
    setSubjects(
      storedSubjects.map((subject) => ({
        ...subject,
        originalHours: subject.studyHours, // Set originalHours to studyHours initially
      }))
    );
  }, []); // Empty dependency array ensures this runs only once on mount

  // Save data to local storage when subjects change
  useEffect(() => {
    localStorage.setItem('subjects', JSON.stringify(subjects));
    console.log('Saved to local storage:', subjects);
  }, [subjects]);

  const addSubject = (subject) => {
    // Check if the subject already exists
    if (subjects.some((existingSubject) => existingSubject.name === subject.name)) {
      setErrorMessage(`Subject "${subject.name}" already exists.`);
      return;
    }

    setSubjects([...subjects, { ...subject, originalHours: subject.studyHours }]);
    setErrorMessage(''); // Clear any previous error message
  };

  const removeSubject = (index) => {
    const updatedSubjects = [...subjects];
    updatedSubjects.splice(index, 1);
    setSubjects(updatedSubjects);
  };

  const updateStudyHours = (index, newHours) => {
    const updatedSubjects = [...subjects];
    updatedSubjects[index].studyHours = newHours;
    setSubjects(updatedSubjects);
  };

  const increaseStudyHours = (index) => {
    const updatedSubjects = [...subjects];
    updatedSubjects[index].studyHours += 1;
    setSubjects(updatedSubjects);
  };

  const decreaseStudyHours = (index) => {
    const updatedSubjects = [...subjects];
    if (updatedSubjects[index].studyHours > 0) {
      updatedSubjects[index].studyHours -= 1;
      setSubjects(updatedSubjects);
    }
  };

  return (
    <div className="container">
      <SubjectInput addSubject={addSubject} subjects={subjects} />
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <div className="study-schedule">
        <StudySchedule
          subjects={subjects}
          increaseStudyHours={increaseStudyHours}
          decreaseStudyHours={decreaseStudyHours}
          removeSubject={removeSubject}
          updateStudyHours={updateStudyHours}
        />
      </div>
    </div>
  );
}

export default App;
