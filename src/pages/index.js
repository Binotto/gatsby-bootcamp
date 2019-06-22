import React from 'react'
import { Link } from 'gatsby'
import Footer from '../components/footer'
import Header from '../components/header'

const IndexPage = () => {
    return (
        <div>
            <Header />
            <h1>Hello guys</h1>
            <p>I'm Matheus Binotto, a Full Stack Web Developer.</p>
            <p>Need a developer? <Link to="/contact">Contact Me.</Link></p>
            <Footer />
        </div>
    )
}

export default IndexPage