import React from 'react'
import {Routes,Route} from 'react-router-dom'
import CreateBook from './pages/CreateBook'
import EditBook from './pages/EditBook'
import Home from './pages/Home'
import DeleteBook from './pages/DeleteBook'
import Showbook from './pages/Showbook'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/books/create' element={<CreateBook/>}/>
      <Route path='/books/details/:id' element={<Showbook/>}/>
      <Route path='/books/edit/:id' element={<EditBook/>}/>
      <Route path='/books/delete/:id' element={<DeleteBook/>}/>
    </Routes>
  )
}

export default App