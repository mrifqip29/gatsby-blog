import React from 'react';
import { Link, graphql } from 'gatsby';

import { kebabCase } from 'lodash';

import Layout from '../../components/layout';
const TagsPage = ({ data }) => {
  const allTags = data.allContentfulBlogPost.group;

  return (
    <Layout>
      <div>
        <h1>Ini semua tags lho Tags</h1>
        <ul>
          {allTags.map(tag => (
            <li key={tag.fieldValue}>
              <Link to={`kabarterkini/tag/${kebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default TagsPage;

export const pageQuery = graphql`
  query {
    allContentfulBlogPost(limit: 2000) {
      group(field: tags) {
        fieldValue
        totalCount
      }
    }
  }
`;