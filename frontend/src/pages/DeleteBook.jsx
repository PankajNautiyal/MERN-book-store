import React, { useState } from 'react'
import BackButtom from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { enqueueSnackbar } from 'notistack'

const DeleteBook = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { id } = useParams()
  const handleDeleteBook = () => {
    setLoading(true)
    axios.delete(`https://mern-book-store-backend-7szf.onrender.com/books/${id}`)
    .then(() => {
      setLoading(false)
      enqueueSnackbar('Book Deleted successfully')
      navigate('/')
    }).catch((error)=>{
      setLoading(false)
      // alert('An error occured. Please check the console')
      enqueueSnackbar('Error', {variant:'error'})
      console.log(error)
    })
  }
  return (
    <div className='p-4'>
      <BackButtom/>
      <h1 className='text-3xl my-4'>Delete Book</h1>
      {loading ? <Spinner/> : ''}
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl lg:w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl'>Are You Sure You want to Delete this book ?</h3>

        <button className='p-4 bg-red-600 text-white m-8 w-full' onClick={handleDeleteBook}>Yes, Delete it</button>
      </div>
    </div>
  )
}

export default DeleteBook
