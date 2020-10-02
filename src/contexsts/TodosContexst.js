import React, { createContext,  useState } from 'react'

export const TodosContext = createContexst()

const TodosContextProvider = (props) => {
  return (
    <TodosContext.Provider>
      {props.children}
    </TodosContext.Provider>
  )
}

export default TodosContextProvider