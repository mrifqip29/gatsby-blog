import React from "react"
import { useStaticQuery } from "gatsby"

import dalamAngkaStyles from "./dalamangka.module.scss"

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

      <div className="display-4">SCB dalam Angka </div>
      <div className="row py-4">
        <div className="col-lg-3 col-md-6 col-sm-12 pt-3">
          <div className="card text-center" style={{ height: "180px" }}>
            <div className="card-body">
              <div className="display-4 py-3">
                {data.contentfulScbDalamAngka.jumlahKelas}
              </div>
              <p>Kelas tahun ini</p>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12 pt-3">
          <div className="card text-center">
            <div className="card-body" style={{ height: "180px" }}>
              <div className="display-4 py-3">
                {data.contentfulScbDalamAngka.jumlahSiswa}
              </div>
              <p>Siswa tahun ini</p>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12 pt-3">
          <div className="card text-center">
            <div className="card-body" style={{ height: "180px" }}>
              <div className="display-4 py-3">
                {data.contentfulScbDalamAngka.prestasi}
              </div>
              <p>Prestasi</p>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12 pt-3">
          <div className="card text-center">
            <div className="card-body" style={{ height: "180px" }}>
              <div className="display-4 py-3">
                {data.contentfulScbDalamAngka.jumlahTendikDanStaf}
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
