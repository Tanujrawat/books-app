import { createContext, useState } from "react";
import axios from 'axios';

const BooksContext = createContext();

function Provider({ children }){
    const [books, setBooks] = useState([])

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books')
        setBooks(response.data);
    }

    const createBook = async (bookTitle) => {
        const response = await axios.post('http://localhost:3001/books', {
          title:bookTitle,
        })
    
        const updatedBooks = [...books, response.data]
        setBooks(updatedBooks)
    };
    
    const deleteBook = async (bookId) => {
        await axios.delete(`http://localhost:3001/books/${bookId}`)
    
        const updatedBooks = books.filter((book)=>{
          return book.id !== bookId;
        })
        
        setBooks(updatedBooks);
    };
    
    const editBook = async (bookId, Newtitle) => {
        const response = await axios.put(`http://localhost:3001/books/${bookId}`, {
          title:Newtitle,
        })
        const updatedBooks = books.map((book)=>{
          if(book.id === bookId){
            return {...book, ...response.data};
          }
          return book;
        })
        setBooks(updatedBooks);
    };
    // if u use a different name after colon, then make sure to use that name whereever you import ur context
    const valueToShare = {
        fetchBooks:fetchBooks,
        createBook:createBook,
        deleteBook:deleteBook,
        editBook:editBook,
        books:books,
    }

    return(
        <BooksContext.Provider value={valueToShare}>
            {children}
        </BooksContext.Provider>
    )
}
export { Provider }; //named export 
export default BooksContext; // default export