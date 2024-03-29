import React, { useEffect } from 'react'
import {
    Link,
    useLocation,
    useNavigate
} from "react-router-dom";
import user from "../images/user.png"



const Navbar = () => {
    let location = useLocation()
    let navigate = useNavigate()

    // useEffect(() => {
    // console.log(location)

    // })

    let handleLogout = () => {
        localStorage.removeItem("authToken")
        navigate("/login")
    }
    let showUser=()=>{
        navigate("/user")
    }

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

                        {!localStorage.getItem("authToken") ?
                            <form className="d-flex mx-5">

                                <Link className='btn btn-light mx-1' to="/login">Login</Link>
                                <Link className='btn btn-light mx-1' to="/signup">SignUp</Link>
                            </form> : <>
                                <button className='btn btn-light mx-1' onClick={handleLogout}>Logout</button>
                                <img src={user} style={{maxHeight:"3em"}} onClick={showUser} title='User'  className='mx-3'/>
                                

                            </>
                        }

                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar



