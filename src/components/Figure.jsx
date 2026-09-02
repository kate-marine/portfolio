import './Figure.css'

/**
 * An image with a caption, styled like a figure in a paper.
 * `src` should point at a file in /public (e.g. /images/projects/foo.svg).
 */
export default function Figure({ src, alt, caption }) {
  return (
    <figure className="figure">
      <img className="figure__img" src={src} alt={alt} loading="lazy" />
      {caption && <figcaption className="figure__caption">{caption}</figcaption>}
    </figure>
  )
}
