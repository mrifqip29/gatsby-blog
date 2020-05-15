import React from "react"

import kategoriStyles from "./kategori.module.scss"

const Kategori = () => {
  return (
    <div>
      <div className={kategoriStyles.w3Container}>
        <div className={kategoriStyles.card} style={{ width: "50%" }}>
          <header className={kategoriStyles.w3Container W3White}>
            <h1>Kategori</h1>
          </header>
          <input
            className={kategoriStyles.w3Input w3Border w3Padding}
            type="text"
            placeholder="Cari..."
            id="myInput"
            onkeyup="myFunction()"
          />
          <div className={kategoriStyles.he}>
            <ul className={kategoriStyles.w3Ul w3MarginTop} id="myUL">
              <li>
                <label className={kategoriStyles.container}>
                  <input type="radio" checked="checked" name="radio" /> Asrama
                  <span className={kategoriStyles.checkmark}> </span>
                </label>
              </li>
              <li>
                <label className={kategoriStyles.container}>
                  <input type="radio" checked="checked" name="radio" /> Event
                  Tahunan
                  <span className={kategoriStyles.checkmark}> </span>
                </label>
              </li>
              <li>
                <label className={kategoriStyles.container}>
                  <input type="radio" checked="checked" name="radio" /> Kabar
                  Seputar SCB
                  <span className={kategoriStyles.checkmark}> </span>
                </label>
              </li>
              <li>
                <label className={kategoriStyles.container}>
                  <input type="radio" checked="checked" name="radio" /> Karir
                  <span className={kategoriStyles.checkmark}> </span>
                </label>
              </li>
              <li>
                <label className={kategoriStyles.container}>
                  <input type="radio" checked="checked" name="radio" />
                  Kesiswaan
                  <span className={kategoriStyles.checkmark}> </span>
                </label>
              </li>
              <li>
                <label className={kategoriStyles.container}>
                  <input type="radio" checked="checked" name="radio" />{" "}
                  Penerimaan Peserta Didik Baru
                  <span className={kategoriStyles.checkmark}> </span>
                </label>
              </li>
              <li>
                <label className={kategoriStyles.container}>
                  <input type="radio" checked="checked" name="radio" /> Prestasi
                  <span className={kategoriStyles.checkmark}> </span>
                </label>
              </li>
              <li>
                <label className={kategoriStyles.container}>
                  <input type="radio" checked="checked" name="radio" /> School
                  Social Responsibility
                  <span className={kategoriStyles.checkmark}> </span>
                </label>
              </li>
              <li>
                <label className={kategoriStyles.container}>
                  <input type="radio" checked="checked" name="radio" /> Zakuma
                  <span className={kategoriStyles.checkmark}> </span>
                </label>
              </li>
            </ul>
          </div>
          <div className={kategoriStyles.w3Container}></div>
        </div>
      </div>
      <kategoriStyles/>
    </div>
  )
}

export default Kategori