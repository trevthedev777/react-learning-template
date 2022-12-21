import React from 'react';
import Book from './Book';

function RenderingLists() {
    const bookList = [
        'to kill a mockingbird',
        'the great gatsby',
        'the catcher in the rye'
    ]

    const books = [
        {
            title: 'to kill a mockingbird',
            author: 'Harper Lee',
            pages: 201
        },
        {
            title: 'the great gatsby',
            author: 'F. Scott Fitzgerald',
            pages: 238
        }
    ];

  return (
    <div>
        {/* curly braces indicate we are about to use some JS */}
        {bookList.map((book) => {
            return (
                // Key can be anything you want as it needs to be unique, usually indexing will work best
                <h2 key={book}>{book}</h2>
            )
        })};
        <hr />
        {books.map((book) => {
            return (
                <div key={book.title}>
                    {/* <h2>Remember to define the properties w/ dot notation</h2> */}
                    <h5>Title: {book.title}</h5>
                    <p>Author: {book.author}</p>
                    <p>Pages: {book.pages}</p>
                </div>
            )
        })}
        <hr />
        {/* From the imported component, set it as props in the new component */}
        {
            books.map(book => {
                return <Book key={book.title} book={book} />
            })
        }
    </div>
  ) 
}

export default RenderingLists
