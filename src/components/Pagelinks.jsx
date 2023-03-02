import { pageLinks } from '../data'
import Links from './Links'

const Pagelinks = ({ parentClass, idClass, linkClass }) => {
  return (
    <ul className={parentClass} id={idClass}>
      {pageLinks.map((link) => {
        return (
          <Links key={link.id} link={link} linkClass={linkClass} />
          //   <li key={link.id}>
          //     <a href={link.href} className={linkClass}>
          //       {link.text}
          //     </a>
          //   </li>
        )
      })}
    </ul>
  )
}

export default Pagelinks
