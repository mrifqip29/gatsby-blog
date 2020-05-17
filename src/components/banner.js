import { Link, useStaticQuery } from "gatsby"
import React from "react"
import { Carousel } from "react-bootstrap"

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBannerBeranda {
        edges {
          node {
            teks
            gambar {
              fixed(quality: 50, height: 580, resizingBehavior: PAD) {
                srcWebp
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
            className="pt-4 pb-5 text-center"
          >
            <div
              className="container px-5 col-12 align-items-center"
              style={{
                width: "1659px",
                height: "580px",
              }}
            >
              <div className="row align-items-center">
                <div className="col text-center">
                  <div className="display-3 text-left"
                  style={{ fontWeight: "bold", }}>{edge.node.teks}</div>
                </div>
                <div className="col text-center">
                  <img
                    src={edge.node.gambar.fixed.srcWebp}
                    style={{
                      maxWidth: "700px",
                      maxHeight: "580px",
                      minWidth: "700px",
                      minHeight: "580px",
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
