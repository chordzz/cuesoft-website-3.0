import React from 'react'

function About({ darkMode }) {
    return (
        <div>
            <h1 style={{color: darkMode ? '#ffffff' : '#000000'}}>About Page</h1>
        </div>
    )
}

export default About;
