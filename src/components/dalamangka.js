import React from "react"
import { useStaticQuery } from "gatsby"


const DalamAngka = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulScbDalamAngka {
        jumlahKelas
        jumlahSiswa
        prestasi
        jumlahTendikDanStaf
      }
    }
  `)
  return (
    <div id="scbdalamangka" className="container text-center my-5 py-5">
      <div className="lead bold">
        <h1
          style={{
            fontWeight: 100,
            fontSize: "1rem",
            letterSpacing: "15px",
          }}
        >
          JELAJAHI
        </h1>
      </div>

      <div className="display-4" style={{ marginBottom: "40px" }}>
        SCB dalam Angka{" "}
      </div>
      <div className="row py-4">
        <div className="col-lg-3 col-md-6 col-sm-12 pt-3">
          <div className="card text-center align-items-center bg-light" style={{ height: "180px" , borderRadius:'30px' }}>
            <div
              className="profile-img"
              style={{
                height: "90px",
                width: "90px",
                backgroundImage:
                  "url(" + "https://svgshare.com/i/LEz.svg" + ")",
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "absolute",
                top: "-45px",
                borderRadius: "40%",
              }}
            ></div>
            <div className="card-body">
              <div className="display-4 pt-4">
                <strong>{data.contentfulScbDalamAngka.jumlahKelas}</strong>
              </div>
              <p>Kelas tahun ini</p>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12 pt-3">
          <div className="card text-center align-items-center bg-light" style={{ height: "180px" , borderRadius:'30px' }}>
            <div
              className="profile-img"
              style={{
                height: "90px",
                width: "90px",
                backgroundImage:
                  "url(" + "https://svgshare.com/i/LEA.svg" + ")",
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "absolute",
                top: "-45px",
                borderRadius: "40%",
              }}
            ></div>
            <div className="card-body" style={{ height: "180px" }}>
              <div className="display-4 pt-4">
                <strong>{data.contentfulScbDalamAngka.jumlahSiswa}</strong>
              </div>
              <p>Siswa tahun ini</p>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12 pt-3">
          <div className="card text-center align-items-center bg-light" style={{ height: "180px" , borderRadius:'30px' }}>
            <div
              className="profile-img"
              style={{
                height: "90px",
                width: "90px",
                backgroundImage:
                  "url(" + "https://svgshare.com/i/LEi.svg" + ")",
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "absolute",
                top: "-45px",
                borderRadius: "40%",
              }}
            ></div>
            <div className="card-body" style={{ height: "180px" }}>
              <div className="display-4 pt-4">
                <strong>{data.contentfulScbDalamAngka.prestasi}</strong>
              </div>
              <p>Prestasi</p>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12 pt-3">
          <div className="card text-center align-items-center bg-light" style={{ height: "180px" , borderRadius:'30px' }}>
            <div
              className="profile-img"
              style={{
                height: "90px",
                width: "90px",
                backgroundImage:
                  "url(" + "https://svgshare.com/i/LFj.svg" + ")",
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "absolute",
                top: "-45px",
                borderRadius: "40%",
              }}
            ></div>
            <div className="card-body" style={{ height: "180px" }}>
              <div className="display-4 pt-4 ">
              <strong>{data.contentfulScbDalamAngka.jumlahTendikDanStaf}</strong>
              </div>
              <p>Tenaga Pendidik dan Staf</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DalamAngka
