import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Books from './components/Books.jsx'
import About from './components/About.jsx'
import Book from './components/Book.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/about' element={<About />} />
          <Route path='/books' element={<Books />} >
            <Route path=':bookId' element={<Book />} />
          </Route>
          <Route path='*' element= {
            <main>
              <p>صفحه مورد نظر یافت نشد!</p>
            </main>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
