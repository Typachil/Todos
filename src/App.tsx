import { Box } from '@mui/material'
import React from 'react'
import TodosForm from './components/TodoForm'

export default function App() {
  return (
    <Box className="todos">
        <h1>todos</h1>
        <TodosForm />
    </Box>
  )
}
