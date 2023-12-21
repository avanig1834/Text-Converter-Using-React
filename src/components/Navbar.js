import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {
  let Mystyle = {
    border: '1px solid white'
  }
  let btn_style = {
    border: '1px solid white',
    backgroundColor: '#f8f9fa',
    marginTop: '6px'
  }
  return (
  <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} style={Mystyle}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">{props.AboutText}</a>
        </li>
        <li>
          <button style={btn_style} onClick={props.toggleMode1}>change mode</button>
        </li>
      </ul>

      <div className={`form-check form-switch text-${props.dark}`}>
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.BtnMode}</label>
      </div>
    </div>
  </div>
</nav>
  )
}

// we define the datatpe of each prop beforehand, it ensures that any other datatype is used
// isrequired is used to throw an error if prop is not passed.  

Navbar.propTypes = {title: PropTypes.string.isRequired,
                    AboutText: PropTypes.string}

// we can set default values to the props as follows, it ensures that if prop values are not passed then these values will be set automatically
Navbar.defaultProps = {
    title: 'set your title',
    AboutText: 'enter text'
}