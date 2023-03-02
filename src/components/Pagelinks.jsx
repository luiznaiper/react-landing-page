import { pageLinks } from '../data'

const Pagelinks = ({ parentClass, idClass, linkClass }) => {
  return (
    <ul className={parentClass} id={idClass}>
      {pageLinks.map((link) => {
        return (
          <li key={link.id}>
            <a href={link.href} className={linkClass}>
              {link.text}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default Pagelinks
