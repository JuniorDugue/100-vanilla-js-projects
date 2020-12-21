import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact Page" />
    <h1>Send me a message</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Contact
