/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author

  return (
    <div className="bio">
      <div className="flex-row">
        <StaticImage
          className="bio-avatar"
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="https://storage.googleapis.com/support-forums-api/avatar/profile-82939246-10154479357538749704.jpg"
          width={50}
          height={50}
          quality={95}
          alt="Profile picture"
        />
      </div>
      <div className="flex-column">
        <p className="greeting">¡Bienvenido👋!</p>
        {author?.name && (
          <p className="about-avatar">
            En este blog vas a encontrar apuntes sobre Google Fotos.
            {` `}
          </p>
        )}
      </div>
    </div>
  )
}

export default Bio
