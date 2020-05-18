import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { kebabCase } from 'lodash';

import listKategori from "../hooks/cat-list"
import catStyles from "./kategori.module.scss"


const Kategori = () => {
  const kategori = listKategori()
  const data = useStaticQuery(graphql`
    query{
      allContentfulBlogPost(
      limit: 10
      sort: {fields: tags, order: ASC} )
      {
        group(field: tags) {
          fieldValue
          totalCount
        }
      }
    }
  `)
  const allTags = data.allContentfulBlogPost.group;
  


  return (
    <div className="container">
      <div className={catStyles.box}>
        <div className="col-20">
          <div className={catStyles.rounded}>
            <div className="h3 m-3">Kategori</div>
                {allTags.map(tag => (
                <div className=" col-4 d-inline-flex">
                  <Link to={`kabarterkini/tag/${kebabCase(tag.fieldValue)}/`} className={catStyles.list}> 
                    <div className={catStyles.listName}>
                      {tag.fieldValue}
                    </div>
                  </Link>
                </div>
                ))}
                <div className="container text-center">
                <Link to="/kabarterkini/tags" className={catStyles.button}>
                 More Category
                </Link>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Kategori
