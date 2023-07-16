import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/home.css'

const Home = () => {
  return (
    <>
      <div className="main">    <nav className="navbar navbar-expand-lg " style={{ background: 'black' }}>
        <div className="container-fluid">
          <a className="navbar-brand" style={{ color: 'whitesmoke' }}>WELCOME!!</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={'/'} style={{ textDecoration: 'none' }}> <a className="nav-link active mx-2" aria-current="page" style={{ color: 'whitesmoke' }}>Home</a></Link>
              </li>
              <li className="nav-item">
                <Link to={'/About'} style={{ textDecoration: 'none' }}> <a className="nav-link active mx-3" aria-current="page" style={{ color: 'whitesmoke' }}>About</a></Link>
              </li>
              <li className="nav-item">
                <Link to={'/Contact'} style={{ textDecoration: 'none' }}> <a className="nav-link active mx-3" aria-current="page" style={{ color: 'whitesmoke' }}>Contact</a></Link>
              </li>
              <li className="nav-item">
                <Link to={'/Api'} style={{ textDecoration: 'none' }}> <a className="nav-link active mx-3" aria-current="page" style={{ color: 'whitesmoke' }}>Api</a></Link>
              </li>
              <li className="nav-item">
                <Link to={'/Todo'} style={{ textDecoration: 'none' }}> <a className="nav-link active mx-3" aria-current="page" style={{ color: 'whitesmoke' }}>Todo</a></Link>
              </li>
              <li className="nav-item">
                <Link to={'/Shopping'} style={{ textDecoration: 'none' }}> <a className="nav-link active mx-3" aria-current="page" style={{ color: 'whitesmoke' }}>Shopping-Cart</a></Link>
              </li>


            </ul>

          </div>
        </div>
      </nav>


    <div className="container shadow">
        <p className="welcome " >Welcome to our website!

          We're thrilled to have you here. Whether you're a first-time visitor or a returning user, we want to extend a warm welcome and thank you for choosing to explore our online space.

           We strive to create an engaging and valuable experience for every individual who interacts with our platform. Our goal is to provide you with the information, services, or products you need, all while ensuring your satisfaction and convenience.</p>
          </div>
      </div>

    </>
  )
}

export default Home