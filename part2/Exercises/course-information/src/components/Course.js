import React from 'react'

const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Total = ({ course }) => {
  const sum = course.parts.map(course => course.exercises)
  console.log({sum});
  return(
    <p>Number of exercises {sum.reduce((s, p) => s + p)}</p>
  ) 
}

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>    
  )
}

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises} />)}
    </div>
  )
}

const Course = (props) => {

  return (
    <div>
      <Header course={props.course} />
      <Content course={props.course} />
      <Total course={props.course} />
    </div>
  )
}

export default Course