// StudyHoursInput.js
import React, { useState } from 'react';

const StudyHoursInput = ({ index, studyHours, updateStudyHours }) => {
  const [hours, setHours] = useState(studyHours);

  const handleAdjustHours = (increment) => {
    const newHours = hours + increment;
    if (newHours >= 0) {
      setHours(newHours);
      // Call the parent component's function to update study hours
      updateStudyHours(index, newHours);
    }
  };

  return (
    <div>
      <span>Study Hours: {hours}</span>
      <button onClick={() => handleAdjustHours(1)}>+</button>
      <button onClick={() => handleAdjustHours(-1)}>-</button>
    </div>
  );
};

export default StudyHoursInput;
