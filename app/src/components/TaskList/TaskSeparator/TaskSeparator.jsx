import React from 'react'

function TaskSeparator({text}) {
  return (
    <div className="flex items-center gap-5 my-4">
            <div className="h-[1px] border border-base-100 w-full"></div>
            <div className="w-6/12">
            {text}
            </div>
            <div className="h-[1px] border border-base-100 w-full"></div>
          </div>
  )
}

export default TaskSeparator