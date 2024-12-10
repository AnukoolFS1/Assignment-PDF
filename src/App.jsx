import { useState, useEffect } from 'react'
import Cards from './components/Card';
import ViewPdf from './components/Viewpdf';
import Search from './components/Search';


function App() {
  const [books, setBooks] = useState([]);
  const [storeBooks, setStoreBooks] = useState([])


  useEffect(() => {
    async function fetchBooks() {

      try{
        const response = await fetch('https://api.npoint.io/dee51ea017d20efdfcc8');
        const book = await response.json();
        setBooks(book);
        setStoreBooks(book)
      }catch(err){
        console.error(err)
      }
    }
    fetchBooks()

  }, [])
  return (
    <section>
      <nav className='nav'>
      <h1>PDF Assignment</h1>
      <Search setBooks={setBooks} storeBooks={storeBooks} />
      </nav>
      <div className='books'>
        {books.length > 0 ?
          books?.map((book, i) => {
            return (<Cards key={book.author + i} book={book} />)
          }) :
          <Cards book={""} />
        }
      </div>
      <ViewPdf book={books[0]?.link} />
    </section>
  )
}

export default App
