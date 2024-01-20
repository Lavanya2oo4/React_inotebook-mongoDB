import React from 'react'

const Footer = () => {
    return (
        <div className="fixed-bottom" >
            <nav style={{ color: "white", marginTop: "3vh", padding: "1vh", maxWidth: "100%" }} className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
                <span>&copy; copyright</span>
                <span>Current-version: v2.3.2.</span>

            </nav>

        </div>
    )
}

export default Footer
