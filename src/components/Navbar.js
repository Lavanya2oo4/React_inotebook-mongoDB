import React, { useEffect } from 'react'
import {
    Link,
    useLocation
} from "react-router-dom";





const Navbar = () => {
    let location = useLocation()

    useEffect(() => {
        // console.log(location)

    })
    return (
        <>

            <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src="/logo.png" style={{ height: "6vh", margin: "0 1vh" }} />

                        <small>ï</small><big>Notebook</big>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location === "/about" ? "active" : ""}`} to="/about">About</Link>
                            </li>


                        </ul>
                        <form className="d-flex mx-5">
                            <Link className='btn btn-light mx-1' to="/login">Login</Link>
                            <Link className='btn btn-light mx-1' to="/signup">SignUp</Link>
                        </form>

                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar



