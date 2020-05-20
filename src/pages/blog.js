import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import PropTypes from "prop-types"
import Layout from "../components/layout"

import blogStyles from "./blog.module.scss"
import Pager from "../components/paginator"
import Kategori from "../components/kategori"

const Blog = ({ data, pageContext }) => {
  return (
    <Layout>
      <SEO title="Blog Posts" />
      <div>
      <Kategori />
      </div>

      
    </Layout>
  )
}

Blog.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
}

export default Blog


