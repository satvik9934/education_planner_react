# Education Planner

The Education Planner is a simple React application to help users manage their study schedule by adding subjects, allocating study hours, and making adjustments to their study plan.

# Hosted Link
https://educationplanner.netlify.app/

## Project Setup

To set up the project, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory in the terminal.
3. Run `npm install` to install the necessary dependencies.
4. Run `npm start` to start the development server.

## User Interface Design

The user interface includes sections for adding subject names, allocating study hours, and displaying the study schedule. The design aims to be intuitive and visually appealing.

## Subject Management

Users can add subject names and allocate study hours using the provided input fields. The React `useState` hook is utilized to manage and update subject data in real time.

## Local Storage Integration

The application uses local storage to persist subject names and study hours data across sessions. The data is retrieved from local storage on page load.

## Adjustable Study Hours

Users can easily adjust study hours for each subject using the plus and minus buttons. React's `useState` hook is employed to update study hours dynamically.

## Usage

1. Enter a subject name and allocate study hours.
2. Click the "Add Subject" button to add the subject to the study schedule.
3. Adjust study hours using the plus and minus buttons.
4. The study schedule is displayed in a grid format, allowing users to see subject details and make further adjustments.
5. Subject data is stored in local storage and retrieved on page load.

Feel free to customize and extend the functionality based on your project requirements.

Happy studying!
