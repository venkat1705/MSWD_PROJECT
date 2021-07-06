import React from 'react';
import './Home.css';
import bookpg from '../../assets/img/book.jpg';
import videoSource from '../../assets/books.mp4';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className='Container'>
      <img src = 'https://www.teahub.io/photos/full/4-41820_2048x1365-amazing-4k-ultra-hd-doctors-pictures-backgrounds.jpg' alt = "image2"/>
      <div className='Content'>
        <div className='SubContent'>
          <h1>LEVI MEDICS</h1>
          <p>Medicines cure diseases,but only doctor can cure Patients </p>
          <button type='button' className='btn btn-outline-dark'>
            <Link to='/register'>Get started</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
