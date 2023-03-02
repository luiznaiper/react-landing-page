import { socialLinks } from '../data'
import Pagelinks from './Pagelinks'

const Footer = () => {
  return (
    <footer className="section footer">
      <Pagelinks parentClass="footer-links" linkClass="footer-link" />
      {/* <ul className="footer-links">
        {pageLinks.map((link) => {
          const { id, href, text } = link
          return (
            <li key={id}>
              <a href={href} className="footer-link">
                {text}
              </a>
            </li>
          )
        })}
      </ul> */}
      <ul className="footer-icons">
        {socialLinks.map((link) => {
          const { id, href, icon } = link
          return (
            <li key={id}>
              <a
                href={href}
                target="_blank"
                className="footer-icon"
                rel="noreferrer"
              >
                <i className={icon}></i>
              </a>
            </li>
          )
        })}
      </ul>
      <p className="copyright">
        copyright &copy;{' '}
        <a href="https://www.luisolivarez.dev">Luis Olivárez</a>
        <a href="https://www.plusmarketing.mx">Plus Marketing</a> |
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  )
}

export default Footer
