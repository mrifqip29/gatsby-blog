import React from 'react';
import { Link, graphql } from 'gatsby';

import { kebabCase } from 'lodash';

import Layout from '../../components/layout';
import Jumbo from "../../components/jumbo";
import tagsStyle from "./tags.module.scss"

const TagsPage = ({ data }) => {
  const allTags = data.allContentfulBlogPost.group;
    return (
      <Layout>
        <Jumbo
          title="Semua Kategori"
          nav="Informasi"
          nav2="Kabar Terkini"
          page="Kategori"
          image={data.contentfulJumbotronHalaman.jumbotronGambar.fixed.srcWebp}
        />

        <div className="container text-center">
          <div className={tagsStyle.title}> Semua Kategori </div>
          <div className=" col-12 ">
            {allTags.map(tag => {
              return (
                <Link to={`kabarterkini/tag/${kebabCase(tag.fieldValue)}/`}>
                  <div key={tag.fieldValue} className={tagsStyle.box}>                
                    <div className={tagsStyle.boxTitle}>
                      {tag.fieldValue}
                    </div>
                    <div className={tagsStyle.boxNumber}>
                     [{tag.totalCount}]
                    </div>
                  </div>  
                </Link>
              )
            })}
          </div>
        </div>
      </Layout>
    )
}

export const pageQuery = graphql`
  query {
    allContentfulBlogPost(
    sort: {fields: tags, order: ASC}) {
      group(field: tags) {
        fieldValue
        totalCount
      }
    }
    contentfulJumbotronHalaman(
      jumbotronHalaman: { eq: "Halaman Kabar Terkini" }
    ) {
      jumbotronHalaman
      jumbotronGambar {
        fixed {
          srcWebp
        }
      }
    }
  }
`

export default TagsPage;