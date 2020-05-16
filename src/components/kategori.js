import React from "react"

import kategoriStyles from "./kategori.module.scss"




const Kategori = () => {
  return (
    <div>
      <div className={kategoriStyles.halo} style={{ width: "50%" }}>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
      
      <div className="w3-container">
        
          <header className="w3-container w3-white">
            <h1>Kategori</h1>
          </header>
          <input
            className={"w3-input w3-border w3-padding"}
            style={{width: "60%"}}
            type="text"
            placeholder="Cari..."
            id="myInput"
            onkeyup="myFunction"
          />
          <div className={kategoriStyles.he}>
            <ul className="w3-ul w3-margin-top" id="myUL">
                <label className={kategoriStyles.container}>
                  <input type="radio" checked="checked" name="radio" /> Asrama
                  <span className={kategoriStyles.checkmark}> </span>
                </label>
            
                <label className={kategoriStyles.container}>
                  <input type="radio" checked="checked" name="radio" /> Event
                  Tahunan
                  <span className={kategoriStyles.checkmark}> </span>
                </label>
              
              
                <label className={kategoriStyles.container}>
                  <input type="radio" checked="checked" name="radio" /> Kabar
                  Seputar SCB
                  <span className={kategoriStyles.checkmark}> </span>
                </label>
              
              
                <label className={kategoriStyles.container}>
                  <input type="radio" checked="checked" name="radio" /> Karir
                  <span className={kategoriStyles.checkmark}> </span>
                </label>
              
              
                <label className={kategoriStyles.container}>
                  <input type="radio" checked="checked" name="radio" />{" "}
                  Kesiswaan
                  <span className={kategoriStyles.checkmark}> </span>
                </label>
              
              
                <label className={kategoriStyles.container}>
                  <input type="radio" checked="checked" name="radio" />{" "}
                  Penerimaan Peserta Didik Baru
                  <span className={kategoriStyles.checkmark}> </span>
                </label>
              
              
                <label className={kategoriStyles.container}>
                  <input type="radio" checked="checked" name="radio" /> Prestasi
                  <span className={kategoriStyles.checkmark}> </span>
                </label>
              
              
                <label className={kategoriStyles.container}>
                  <input type="radio" checked="checked" name="radio" /> School
                  Social Responsibility
                  <span className={kategoriStyles.checkmark}> </span>
                </label>
              
              
                <label className={kategoriStyles.container}>
                  <input type="radio" checked="checked" name="radio" /> Zakuma
                  <span className={kategoriStyles.checkmark}> </span>
                </label>
              
            </ul>
          </div>
          <div className="w3-container"></div>
        </div>
      </div>
      <kategoriStyles/>
    </div>
  )
}

export default Kategori