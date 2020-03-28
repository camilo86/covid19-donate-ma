import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <center>
        <h1>Page not found</h1>
        <Link className="btn btn-primary" style={{ color: "white" }} to="/">
          Return to map
        </Link>
      </center>
    </div>
  </Layout>
)

export default NotFoundPage
