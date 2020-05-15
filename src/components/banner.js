import { Link, useStaticQuery } from "gatsby"
import React from "react"
import { Carousel } from "react-bootstrap"

import bannerStyles from "./banner.module.scss"

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBannerBeranda {
        edges {
          node {
            teks
            gambar {
              fixed(quality: 50, height: 580, resizingBehavior: FILL) {
                src
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Carousel
      prevIcon={
        <span
          aria-hidden="true"
          className="carousel-control-prev-icon"
          style={{
            color: "#000",
          }}
        />
      }
      nextIcon={
        <span
          aria-hidden="true"
          className="carousel-control-next-icon"
          style={{
            color: "#000",
          }}
        />
      }
    >
      {data.allContentfulBannerBeranda.edges.map(edge => {
        return (
          <Carousel.Item
            style={{ background: "grey", height: "652px" }}
            className="pt-4 pb-5 "
          >
            <div
              className="container px-5 col-12 align-items-center"
              style={{
                width: "1659px",
                height: "580px",
              }}
            >
              <div className="row  align-items-center">
                <div className="col ">
                  <div className="display-3">{edge.node.teks}</div>
                </div>
                <div className="col text-center">
                  <img
                    src={edge.node.gambar.fixed.src}
                    style={{
                      maxWidth: "800px",
                    }}
                  />
                </div>
              </div>
            </div>
          </Carousel.Item>
        )
      })}

      {/* <Carousel.Item style={{ background: "grey" }} className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col">
              <div className="display-3">
                Selamat Datang di Sekolah Cendekia Baznas
              </div>
            </div>
            <div className="col text-center">
              <img
                src="https://www.cendekiabaznas.sch.id/wp-content/uploads/2017/12/Logo-SCB_Hitam.png"
                alt=""
                height="558px"
              />
            </div>
          </div>
        </div>
      </Carousel.Item> */}
    </Carousel>
  )
}

export default Banner
