import React from 'react'

const Header = ({ courseName }) => {
  return <h1>{courseName}</h1>
}

const Total = ({ parts }) => {
  const sum = parts.reduce((total, part) => total + part.exercises, 0)
  return <p>Number of exercises {sum}</p>
}

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  )
}


const Course = ({ course }) => {
  return (
    <div>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default Course
