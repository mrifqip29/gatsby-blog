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
            style={{ background: "#004547" }}
            className="pt-4 pb-5 text-center"
          >
            <div
              className="container px-5 col align-items-center d-none d-xl-block"
              style={{
                width: "100%",
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

            <div
              className="container px-5 col align-items-center d-none d-lg-block d-xl-none"
              style={{
                width: "100%",
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

            <div
              className="container px-5 col align-items-center d-none d-md-block d-lg-none"
              style={{
                width: "100%",
                height: "480px",
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

              <div
              className="container px-5 col align-items-center d-none d-sm-block d-md-none"
              style={{
                width: "100%",
                height: "330px",
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

            <div
              className="container px-5 col align-items-center d-block d-sm-none"
              style={{
                width: "100%",
                height: "250px",
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
