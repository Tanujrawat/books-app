import React, { useState, useContext } from 'react';
import BookEdit from './BookEdit';
import BooksContext from '../Context/books';

function BookShow({ book }){
    const { deleteBook } = useContext(BooksContext)
    const [showEdit, setShowEdit] = useState(false);
    const handleDelete = () => {
        deleteBook(book.id);
    }
    const handleEdit = () => {
        setShowEdit(!showEdit);
    }
    const handleSubmit = () =>{
        setShowEdit(!showEdit);
    }

    let content = <h2>{book.title}</h2>
    if(showEdit){
        content = <BookEdit book={book} onSubmit={handleSubmit}/>;
    }
    return(
        <div className='book-show'>
            <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="bookImage"/>
            <div>{content}</div>
            <div className='actions'>
                <button className='delete' onClick={handleDelete}>Delete</button>
                <button className='edit' onClick={handleEdit}>Edit</button>
                {/* {showEdit && <BookEdit book={book} onEdit={onEdit} setShowEdit={setShowEdit}/>} */}
            </div>
        </div>
    )
}

export default BookShow;