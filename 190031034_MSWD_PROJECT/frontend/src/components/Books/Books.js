import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBooks, deleteBook } from '../../redux/actions/books/bookActions';
import Loading from '../Loading/Loading';

const Books = ({ history }) => {
  //Fetch books
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  const bookslist = useSelector(state => state.booksList);
  const { books, loading } = bookslist;
  // End of fetch books

  //Delete book handler
  const handlerDeleteBook = id => {
    dispatch(deleteBook(id));
    history.push('/books');
  };
  return (
    <div>
      {loading && <Loading />}
      {books !== undefined && books.length === 0 ? (
        'No'
      ) : (
        <div className='row'>
          <div className='col'>
            <table className='table table-hover'>
              <thead>
                <tr>
                  <th scope='col'>Username</th>
                  <th scope='col'>email</th>
                  <th scope='col'>gender</th>
                  <th scope='col'>address</th>
                  <th scope='col'>phonenumber</th>
                  <th scope='col'>time</th>
                  <th scope='col'>date</th>
                  <th scope='col'>doctor</th>
                  <th scope='col'>hospital</th>
                  <th scope='col'>Action</th>
                </tr>
              </thead>
              <tbody>
                {books &&
                  books.map(book => {
                    return (
                      <tr className='table-dark' key={book._id}>
                        <th scope='row'>{book.username}</th>
                        <td>{book.email}</td>
                        <td>{book.gender}</td>
                        <td>{book.address}</td>
                        <td>{book.phonenumber}</td>
                        <td>{book.time}</td>
                        <td>{book.date}</td>
                        <td>{book.doctor}</td>
                        <td>{book.hospital}</td>
                        <td>
                          <i
                            onClick={() => handlerDeleteBook(book._id)}
                            className='fas fa-trash '
                            style={{ color: 'red', cursor: 'progress' }}></i>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Books;
