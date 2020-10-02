import React, { createContexst,  useState } from 'react'

export const TodosContext = createContexst()

const TodoContexstProvider = (props) => {
  return (
    <TodosContext.Provider>
      {props.children}
    </TodosContext.Provider>
  )
}

export default TodoContexstProvider