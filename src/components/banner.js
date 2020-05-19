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
    <Carousel className="col-lg-12 col-md-12 col-sm-12 px-0">
      {data.allContentfulBannerBeranda.edges.map(edge => {
        return (
          <Carousel.Item
            style={{ background: "#005131" }}
            className="pt-4 pb-5 text-center"
          >
            <div
              className="container px-5 col align-items-center"
              style={{
                width: "1659px",
                height: "580px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="row align-items-center">
                <div className="col-lg-5 col-md-12 col-sm-12">
                  <div
                    className="vw-auto text-center pb-2"
                    style={{
                      fontWeight: "bold",
                      color: "white",
                      fontSize: "4vw",
                    }}
                  >
                    {edge.node.teks}
                  </div>
                </div>

                <div className="col-lg-7 col-md-12 col-sm-12">
                  <img src={edge.node.gambar.fixed.srcWebp} class="img-fluid" />
                </div>
              </div>
            </div>
          </Carousel.Item>
        )
      })}
    </Carousel>
  )
}

export default Banner
