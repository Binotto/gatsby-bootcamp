import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = () => {
    return (
        <Layout>
            <h1>Hello guys</h1>
            <p>I'm Matheus Binotto, a Full Stack Web Developer.</p>
            <p>Need a developer? <Link to="/contact">Contact Me.</Link></p>
        </Layout>
    )
}

export default IndexPage