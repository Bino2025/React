import React from 'react'
import './service.css';
import { Link, Outlet } from 'react-router-dom';

const Service = () => {
  return (
    <div className='services-container'>
        <h2 className='services-title'>Our Services</h2>
        <p className='services subtitle'>choose one</p>
        <div className='services-links'>
            <Link to='/web-development' className='service-link web'>wrb development</Link>

            <Link to='/app-development' className='service-link app'>app development</Link>

            <Link to='/design' className='service-link design'>Design</Link>

        </div>
      <Outlet/>
    </div>
  )
}

export default Service
