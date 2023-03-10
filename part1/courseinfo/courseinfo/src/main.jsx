import React from 'react';
import ReactDOM from 'react-dom/client';

const Header = ({course}) => {
  return (
    <h1>{course}</h1>
  );
}

const Content = ({parts, exercises}) => {
  return (
    <div>
      <Part part={parts.part1} exercise={exercises.exercises1}/>
      <Part part={parts.part2} exercise={exercises.exercises2}/>
      <Part part={parts.part3} exercise={exercises.exercises3}/>
    </div>
  );
}

const Part = ({part, exercise}) => {
  return (
    <p>
      {part} {exercise}
    </p>
  );
}

const Total = ({total}) => {
  return (
    <p>Number of exercises {total}</p>
  );
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const totalExercises = exercises1 + exercises2 + exercises3;

  return (
    <div>
      <Header course={course}/>

      <Content parts={{part1, part2, part3}} exercises={{exercises1, exercises2, exercises3}}/>

      <Total total={totalExercises}/>

    </div>
  );
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);