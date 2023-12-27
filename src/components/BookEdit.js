import React, { useState, useContext } from 'react'
import BooksContext from '../Context/books';

function BookEdit({ book, onSubmit}) {
  const { editBook } = useContext(BooksContext)
  const [Newtitle, setNewTitle] = useState(book.title);
  const handleChange = (event) => {
    setNewTitle(event.target.value)
  }
  
  const handleSave = (event) => {
    event.preventDefault();
    onSubmit();
    editBook(book.id, Newtitle);
  }

  return (
    <form onSubmit={handleSave} className='book-edit'>
      <label>Title</label>
      <input className='input' value={Newtitle} onChange={handleChange}/>
      <button className='button is-primary'>Save</button>
    </form>
  )
}

export default BookEdit;
