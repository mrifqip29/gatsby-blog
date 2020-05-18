import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import { kebabCase } from 'lodash'

import blogStyles from "../pages/blog.module.scss"
import Pager from "../components/paginator"
import Kategori from "../components/kategori"
import Insta from "../components/insta"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { totalCount } = data.allContentfulBlogPost;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${tag}"`;
  return (
    <Layout>
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            
            <li className={blogStyles.post}>
              <Link to={`/kabarterkini/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <p>{edge.node.publishedDate}</p>
              </Link>
            </li>
          )     
        })}
        <Pager pageContext={pageContext} />
        
      </ol>
      <Kategori />
      <Insta />
    </Layout>
  );
};



export const tagQuery = graphql`
  query($tag: String) {
    allContentfulBlogPost(
      limit: 2000
      sort: {fields: publishedDate, order: DESC }
      filter: { tags: {in: [$tag]} }
    ) {
      totalCount
      edges {
        node {
            id
            title
            tags
            publishedDate
            slug
        }
      }
    }
  }
`;

export default Tags;