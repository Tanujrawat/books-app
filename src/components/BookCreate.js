import React, { useState } from 'react'
import { useContext } from 'react'
import BooksContext from '../Context/books'

function BookCreate() {
  const { createBook } = useContext(BooksContext)
  const [bookName, setBookName] = useState("")
  
  const handleChange = (event) => {
    setBookName(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    createBook(bookName);
    setBookName('');
  }

  return (
    <div className='book-create'>
      <h3>Add a book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={bookName} onChange={handleChange}/>
        <button className="button" type='submit'>Create Book</button>
      </form>
    </div>
  )
}

export default BookCreate
