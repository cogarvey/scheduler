
# Interview Scheduler

A built and tested React application that allows users to book and cancel interviews. Combined a concise API with a WebSocket server to build a realtime experience.

## Installation

- Install dependencies with `npm install`.
- Fork and clone the [Scheduler API](https://github.com/lighthouse-labs/scheduler-api) project outside of the Scheduler project directory.

### Running Webpack Development Server

```sh
npm start
```

### Running Jest Test Framework

```sh
npm test
```

### Running Storybook Visual Testbed

```sh
npm run storybook
```

## Requirements

- Interviews can be booked between Monday and Friday.
- A user can switch between weekdays.
- A user can book an interview in an empty appointment slot.
- Interviews are booked by typing in a student name and clicking on an interviewer from a list of available interviewers.
- A user can cancel an existing interview.
- A user can edit the details of an existing interview.
- The list of days informs the user how many slots are available for each day.
- The expected day updates the number of spots available when an interview is booked or canceled.
- A user is presented with a confirmation when they attempt to cancel an interview.
- A user is shown an error if an interview cannot be saved or deleted.
- A user is shown a status indicator while asynchronous operations are in progress.
- When the user presses the close button of the error they are returned to the Form or Show view (skipping Status and Confirm).
- The application makes API requests to load and persist data. We do not lose data after a browser refresh.

## Dependancies

- axios: ^0.27.2,
- babel-loader: ^8.0.5,
- classnames: ^2.2.6,
- normalize.css: ^8.0.1,
- prop-types: ^15.8.1,
- react: ^16.9.0,
- react-dom: ^16.9.0,
- react-scripts: 3.4.4
- react-test-renderer: ^16.14.0,
- sass: ^1.53.0
- @babel/core: ^7.4.3,
- @storybook/addon-actions: ^5.0.10,
- @storybook/addon-backgrounds: ^5.0.10,
- @storybook/addon-links: ^5.0.10,
- @storybook/addons: ^5.0.10,
- @storybook/react: ^5.0.10,
- @testing-library/jest-dom: ^4.0.0,
- @testing-library/react: ^8.0.7,
- @testing-library/react-hooks: ^8.0.1,
## Screenshots

![Home Page](https://github.com/cogarvey/scheduler/blob/master/docs/images/Screen%20Shot%202022-07-20%20at%205.39.17%20PM.png?raw=true)
```sh
^Check out our Home Page^
```
![Create Appt](https://github.com/cogarvey/scheduler/blob/master/docs/images/Screen%20Shot%202022-07-20%20at%205.39.28%20PM.png?raw=true)
```sh
^Creating a new appt^
```
![Appt Error](https://github.com/cogarvey/scheduler/blob/master/docs/images/Screen%20Shot%202022-07-20%20at%205.39.41%20PM.png?raw=true)
```sh
^Oops! We forgot to pick an interviewer^
```
![Appt on Home Page](https://github.com/cogarvey/scheduler/blob/master/docs/images/Screen%20Shot%202022-07-20%20at%205.39.59%20PM.png?raw=true)
```sh
^Our appt on the Home Page, taking 1 appt slot^
```
![Delete Appt](https://github.com/cogarvey/scheduler/blob/master/docs/images/Screen%20Shot%202022-07-20%20at%205.40.07%20PM.png?raw=true)
```sh
^Appt delete confirmation message^
```
![Full Day](https://github.com/cogarvey/scheduler/blob/master/docs/images/Screen%20Shot%202022-07-20%20at%205.40.47%20PM.png?raw=true)
```sh
^Here's a full day of appts, no slots left^
```
## Created By
- Github: [@Colleen Garvey](https://github.com/cogarvey)