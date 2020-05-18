import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import {
  Button,
  Image,
  CardDeck,
  Card,
  Carousel,
  CarouselItem,
} from "react-bootstrap"
import Layout from "../components/layout"
import Jumbo from "../components/jumbo"
import Insta from "../components/insta"
import Kategori from "../components/kategori"

const Dummy = () => {
  return (
    <Layout>
      <Jumbo title="INI DUMMY" nav="Tentang Aku dan Kau" page="ini dummy" />

      <div className="container text-center my-4 py-4">
        <div className="row">
          <div
            className="col-lg-9 col-md-12 col-sm-12"
            style={{ background: "green", color: "white" }}
          >
            <h1>kabar terkini</h1>
          </div>
          <div
            className="col-lg-3 col-md-12 col-sm-12"
            style={{ background: "red", color: "white" }}
          >
            <div>
              <h1
                className=""
                style={{
                  background: "blue",
                }}
              >
                search bar
              </h1>
            </div>

            <div
              className=" mb-2"
              
            >
              {/* instagramnya belom bener */}
              <Kategori />
            </div>

              <div
              className=""
              style={{
                background: "yellow",
              }}
            >
              <Insta />
            </div>

            <div>
              <h1
                className=""
                style={{
                  background: "blue",
                }}
              >
                facebook
              </h1>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Dummy
