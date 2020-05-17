import React from "react"
import Image from "gatsby-image"
import useInstagram from "../hooks/use-instagram"
import InstagramUser from "../hooks/instagram-user"
import instaStyles from "./insta.module.scss"

const Insta = () => {
  const instaPhotos = useInstagram()
  const { username } = instaPhotos[0]
  const instaUser = InstagramUser()
  const { biography } = instaUser[0]

  return (
    <div className="container">
      <div className={instaStyles.insta1}>
        <div className="col-lg-4">
          <div className={instaStyles.rounded}> 
            <div className="h3 my-3 mx-3"> 
              Instagram Feeds 
            </div>

            <div className={instaStyles.username}> 
               @{username}
            </div>
            <div className={instaStyles.bio}> 
               {biography}
            </div>
            
            {instaPhotos.map(photo => (
              <div className="col-lg-4 col-md-4 mx-auto d-inline-flex">
                <a href={`https://instagram.com/p/${photo.id}/`}
                className={instaStyles.insta2}
                >
                  <Image
                    key={photo.id}
                    className={instaStyles.insta3}
                    fluid={photo.fluid}
                    alt={photo.caption}
                  />
                </a>
              </div>
            ))}

            <div className="container text-center">
              <a className={instaStyles.button} href={`https://instagram.com/${username}`}>
                Load More 
              </a>
            </div>
          </div>
        </div>
      </div>

      <a href={`https://instagram.com/${username}`}>
        See more on Instagram &rarr;
      </a>
    </div>
  )
}

export default Insta
