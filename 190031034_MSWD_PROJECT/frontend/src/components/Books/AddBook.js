import React, { useState } from 'react';
import { createBook } from '../../redux/actions/books/bookActions';
import { useDispatch, useSelector } from 'react-redux';
const Login = () => {
  return (
    <div>
      <h1>Login</h1>
    </div>
  );
};



const AddBook = ({ history }) => {
  const[username,setUsername] = useState('');
  const [gender, setGender] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [doctor, setDoctor] = useState('');
  const [hospital, setHospital] = useState('');
  const [dob, setDob] = useState('');

  //Get the user id from store

  const userLogin = useSelector(state => state.userLogin);

  const { userInfo } = userLogin;
  console.log(userInfo._id);
  //dispatch action
  const dispatch = useDispatch();

  const formSubmitHandler = e => {
    const data = {
      username,
      email,
      gender,
      address,
      phonenumber,
      time,
      date,
      doctor,
      hospital,
      dob,
      createdBy: userInfo && userInfo._id,
    };
    e.preventDefault();
    dispatch(createBook(data));
    history.push('/books');
  };
  return (
    <div className='row container-height'>
      <div className='col-lg-6 col-md-6 m-auto'>
        <div className='container'>
          <button
            type='button'
            className='btn btn-primary'
            data-toggle='modal'
            data-target='#exampleModal'>
            create Appointment
          </button>

          <div
            className='modal fade'
            id='exampleModal'
            tabIndex='-1'
            aria-labelledby='exampleModalLabel'
            aria-hidden='true'>
            <div className='modal-dialog'>
              <div className='modal-content'>
                <div className='modal-header'>
                  <h5 className='modal-title' id='exampleModalLabel'>
                     Book Appointment
                  </h5>
                  <button
                    type='button'
                    className='close'
                    data-dismiss='modal'
                    aria-label='Close'>
                    <span aria-hidden='true'>&times;</span>
                  </button>
                </div>
                <div className='modal-body'>
                  <h1 className='text-center'>Book your Appointment</h1>
                  <form onSubmit={formSubmitHandler}>
                    <fieldset>
                    <div className='form-group'>
                        <label htmlFor='exampleInputPassword1'>Patient Name</label>
                        <input
                          value={username}
                          onChange={e => setUsername(e.target.value)}
                          type='text'
                          className='form-control'
                          id='exampleInputPassword1'
                          placeholder='patient name'
                        />
                      </div>

                      <div className='form-group'>
                      <label htmlFor='exampleInputPassword1'>Gender</label>
                        <select
                          value={gender}
                          onChange={e => setGender(e.target.value)}
                          id='exampleInputPassword1'
                          className='custom-select'>
                          <option defaultValue='select'>
                            select
                          </option>
                          <option value='male'>Male</option>
                          <option value='female'>Female</option>

                        </select>
                      </div>
                      <div className='form-group'>
                        <label htmlFor='exampleInputEmail1'>email </label>
                        <input
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                          type='email'
                          className='form-control'
                          id='exampleInputEmail1'
                          aria-describedby='emailHelp'
                          placeholder='email'
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='exampleInputPassword1'>address</label>
                        <input
                          value={address}
                          onChange={e => setAddress(e.target.value)}
                          type='text'
                          className='form-control'
                          id='exampleInputPassword1'
                          placeholder='Permenet Address'
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='exampleInputPassword1'>Phone number</label>
                        <input
                          value={phonenumber}
                          onChange={e => setPhonenumber(e.target.value)}
                          type='number'
                          className='form-control'
                          id='exampleInputPassword1'
                          placeholder='Phone number of patient'
                        />
                      </div>
                      <div className='form-group'>
                      <label htmlFor='exampleInputPassword1'>Time</label>
                        <select
                          value={time}
                          onChange={e => setTime(e.target.value)}
                          id='exampleInputPassword1'
                          className='custom-select'>
                          <option defaultValue='select'>
                            select
                          </option>
                          <option value='8:00am- 10:00am'>8:00am- 10:00am</option>
                          <option value='10:00am- 12:00pm'>10:00am- 12:00am</option>
                          <option value='2:00pm- 4:00pm'>2:00pm- 4:00pm</option>
                          <option value='4:00pm- 6:00pm'>4:00pm- 6:00pm</option>
                        </select>
                      </div>
                      <div className='form-group'>
                        <label htmlFor='exampleInputPassword1'>Date</label>
                        <input
                          value={date}
                          onChange={e => setDate(e.target.value)}
                          type='date'
                          className='form-control'
                          id='exampleInputPassword1'
                          placeholder='Date of appointment'
                        />
                      </div>
                      <div className='form-group'>
                      <label htmlFor='exampleInputPassword1'>Doctor</label>
                        <select
                          value={doctor}
                          onChange={e => setDoctor(e.target.value)}
                          id='exampleInputPassword1'
                          className='custom-select'>
                         
                          <option defaultValue='select doctor'>
                            select doctor
                          </option>
                          <option value='Madhu sudhan'>Dr.Madhu sudhan</option>
                          <option value='jhon'>Dr.Jhon</option>
                          <option value='hemsworth'>Dr.Hemsworth</option>
                          <option value='harry'>Dr.Harry</option>
                        </select>
                      </div>
                      <div className='form-group'>
                      <label htmlFor='exampleInputPassword1'>Hospital</label>
                        <select
                          value={hospital}
                          onChange={e => setHospital(e.target.value)}
                          id='exampleInputPassword1'
                          className='custom-select'>
                          <option defaultValue='select'>
                            select
                          </option>
                          <option value='manipal'>Manipal Hospital</option>
                          <option value='Apollo'>Apollo Hospital</option>
                          <option value='kims'>Kims Hospital</option>
                          <option value='Govt'>Govt hospital</option>
                        </select>
                      </div>
                      <div className='form-group'>
                        <label htmlFor='exampleInputPassword1'>Dob</label>
                        <input
                          value={dob}
                          onChange={e => setDob(e.target.value)}
                          type='date'
                          className='form-control'
                          id='exampleInputPassword1'
                          placeholder='Date of Birth'
                        />
                      </div>
                      <button type='submit' className='btn btn-warning m-auto'>
                        Create Appointment
                      </button>
                    </fieldset>
                  </form>
                </div>
                <div className='modal-footer'>
                  <button
                    type='button'
                    className='btn btn-danger'
                    data-dismiss='modal'>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
