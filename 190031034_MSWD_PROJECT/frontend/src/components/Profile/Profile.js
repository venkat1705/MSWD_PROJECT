import React, { useEffect } from 'react';
import './Profile.css';
import pic from '../../assets/img/bookpic.jpg';
import { useSelector, useDispatch } from 'react-redux';
import { getUserProfile } from '../../redux/actions/users/userActions';
import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom';

const Profile = ({ history }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch, history]);
  //Check if user is login otherwise redirect
  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {
    if (userInfo === null) history.push('/login');
  }, [userInfo, history]);

  //Get user Profile
  const userProfile = useSelector(state => state.userProfile);
  const { loading, user } = userProfile;

  const books = userProfile.user && userProfile.user.books;
  

  const renderTable = () => {
    if (books) {
      return (
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
                      </tr>
                    );
                  })}
              </tbody>
        </table>
      );
    } else {
      return (
        <>
          <h1>You don't have any Appointments.</h1>
          <Link>Start Booking your Appointments</Link>
        </>
      );
    }
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col mt-5'>
          {loading && !user ? (
            <Loading />
          ) : (
            <div className='card m-auto ' style={{ width: '50%' }}>
              <img src={pic} className='card-img-top' alt='...' />
              <div className='card-body'>
                <h5 className='card-title'>{user && user.email}</h5>
                <p className='card-text'>{user && user.name}</p>
                <Link to='/user-update' className='btn btn-primary'>
                  Update your profile
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className='row'>
        <div className='col'>{renderTable()}</div>
      </div>
    </div>
  );
};

export default Profile;
