import React from 'react'

function Task({task}) {
  return (
    <div className='w-full bg-secondary p-3 rounded-lg'>{task.description}</div>
  )
}

export default Task