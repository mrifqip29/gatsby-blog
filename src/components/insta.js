import React from "react"
import Image from "gatsby-image"
import useInstagram from "../hooks/use-instagram"
import instaStyles from "./insta.module.scss"

const Insta = () => {
  const instaPhotos = useInstagram()
  const { username } = instaPhotos[0]

  return (
    <>
      <h2>Instagram posts from @{username}</h2>
      <div className={instaStyles.insta1}>
        {instaPhotos.map(photo => (
          <a
            href={`https://instagram.com/p/${photo.id}/`}
            className={instaStyles.insta2}
          >
            <Image
              key={photo.id}
              className={instaStyles.insta3}
              fluid={photo.fluid}
              alt={photo.caption}
            />
          </a>
        ))}
      </div>
      <a href={`https://instagram.com/${username}`}>
        See more on Instagram &rarr;
      </a>
    </>
  )
}

export default Insta
