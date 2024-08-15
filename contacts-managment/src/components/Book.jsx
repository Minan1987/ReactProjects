import React from 'react'
import { useParams } from 'react-router-dom'
import { getBook } from '../data/data'

const Book = () => {
    const params = useParams()
    console.log(params)
    const book = getBook(parseInt(params.bookId))
    if (book) {
        return (
            <div className="col-lg-8">
                <p className='border-bottom mb-3 pb-2'>مشخصات کتاب با شناسه {book.number}:</p>
                <table className='table'>
                    <tr>
                        <td>نام کتاب:</td>
                        <td>{book.name}</td>
                    </tr>
                    <tr>
                        <td> تاریخ انتشار:</td>
                        <td>{book.due}</td>
                    </tr>
                    <tr>
                        <td>قیمت کتاب:</td>
                        <td>{book.amount}</td>
                    </tr>
                </table>
            </div>
        )
    } else {
        return (
            <div className="col-lg-8">کتاب مورد نظر شما یافت نشد!</div>
        )
    }

}

export default Book
