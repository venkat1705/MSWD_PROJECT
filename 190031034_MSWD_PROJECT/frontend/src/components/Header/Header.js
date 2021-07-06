import React from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/actions/users/userActions';

const Header = () => {
  const dispatch = useDispatch();

  const history = useHistory();
  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;

  //logout handler

  const logoutHandler = () => {
    dispatch(logoutUser());
    history.push('/');
  };
  return (
    <header>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <Link className='navbar-brand' to='/'>
          LEVIMEDICS
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarColor01'
          aria-controls='navbarColor01'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarColor01'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item active'>
              <Link className='nav-link' to='/'>
                Home <span className='sr-only'>(current)</span>
              </Link>
            </li>
            

            {userInfo ? (
              <>
                <li className='nav-item'>
                  <Link className='nav-link' to='/books'>
                    AllAppointments
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/addbook'>
                    Book Appointment
                  </Link>
                </li>

                <li className='nav-item'>
                  <Link className='nav-link' to='/users'>
                    Users
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    className='nav-link'
                    to='/login'
                    onClick={() => dispatch(logoutUser())}>
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className='nav-item'>
                  <Link className='nav-link' to='/login'>
                    Login
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/register'>
                    Register
                  </Link>
                </li>
              </>
            )}

            {/* Drop dowm */}
            {userInfo ? (
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle btn-dark'
                  data-toggle='dropdown'
                  href='/'
                  role='button'
                  aria-haspopup='true'
                  aria-expanded='false'>
                  {userInfo.name}
                </a>
                <div className='dropdown-menu'>
                  <Link className='dropdown-item' to='/profile'>
                    Profile
                  </Link>
                  <Link className='dropdown-item' to='/addbook'>
                    Book Appointment
                  </Link>
                  <Link className='dropdown-item' to='/books'>
                    MyAppointments
                  </Link>

                  <div className='dropdown-divider'></div>
                  <button onClick={logoutHandler} className='dropdown-item'>
                    Logout
                  </button>
                </div>
              </li>
            ) : (
              ''
            )}
          </ul>
          
        </div>
      </nav>
    </header>
  );
};

export default Header;
