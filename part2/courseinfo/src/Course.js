import React from 'react'

const Header = ({ name }) => {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}

const Part = ({ part }) => {
  return (
    <div>
      <p>
        {part.name} {part.exercises}
      </p>
    </div>
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

const Total = ({ parts }) => {
  const total = parts.reduce((acc, current) => {
    return acc + current.exercises
  }, 0)

  return (
    <div>
      <p>
        <b>total of {total} exercises</b>
      </p>
    </div>
  )
}

const Course = ({ course: { name, parts } }) => {
  return (
    <div>
      <Header name={name} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default Course
