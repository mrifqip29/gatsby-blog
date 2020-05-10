import { Link } from "gatsby"
import React from "react"
import { Carousel } from "react-bootstrap"

const Banner = () => (
  <Carousel>
    <Carousel.Item style={{ background: "grey" }} className="py-5">
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
              height="100px"
            />
          </div>
        </div>
      </div>
    </Carousel.Item>
    <Carousel.Item style={{ background: "grey" }} className="py-5">
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
              height="100px"
            />
          </div>
        </div>
      </div>
    </Carousel.Item>
  </Carousel>
)

export default Banner
