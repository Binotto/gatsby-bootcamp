import React from 'react'
import { Link } from 'gatsby'

const IndexPage = () => {
    return (
        <div>
            <h1>Hello guys</h1>
            <p>I'm Matheus Binotto, a Full Stack Web Developer.</p>
            <p>Need a developer? <Link to="/contact">Contact Me.</Link></p>
        </div>
    )
}

export default IndexPage