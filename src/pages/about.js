import React from 'react'
import { Link } from 'gatsby'

const AboutPage = () => {
    return (
        <div>
            <h1>About Me</h1>
            <p>I currently studying all new technologies, to adapt and always provide a fast and efficient system.</p>
            <p><Link to="/contact">Want to work with me? Reach out.</Link></p>
        </div>
    )
}

export default AboutPage