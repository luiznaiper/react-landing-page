const Links = ({ link, linkClass }) => {
  return (
    <li key={link.id}>
      <a href={link.href} className={linkClass}>
        {link.text}
      </a>
    </li>
  )
}

export default Links
