import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'
import tour5 from './images/tour-5.jpeg'
import tour6 from './images/tour-6.jpeg'

export const pageLinks = [
  {
    id: 1,
    href: '#home',
    text: 'home',
  },
  {
    id: 2,
    href: '#about',
    text: 'about',
  },
  {
    id: 3,
    href: '#services',
    text: 'services',
  },
  {
    id: 4,
    href: '#tours',
    text: 'tours',
  },
]

export const socialLinks = [
  { id: 1, href: 'https://github.com/luiznaiper', icon: 'fab fa-github' },
  {
    id: 2,
    href: 'https://www.linkedin.com/in/luis-olivarez/',
    icon: 'fab fa-linkedin',
  },
  {
    id: 3,
    href: 'https://www.facebook.com/luiznaiper',
    icon: 'fab fa-facebook',
  },
  { id: 4, href: 'https://twitter.com/LuizNaiper', icon: 'fab fa-twitter' },
]

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'Lorem ipsum dolor sita met consectetur adipisicing elit.Asperiores, officia. ',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: 'Lorem ipsum dolor sita met consectetur adipisicing elit.Asperiores, officia. ',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: 'Lorem ipsum dolor sita met consectetur adipisicing elit.Asperiores, officia. ',
  },
]

export const tours = [
  {
    id: 1,
    image: tour1,
    date: 'august 26th, 2020',
    title: 'Tibet Adventure',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'china',
    duration: 6,
    price: 2100,
  },
  {
    id: 2,
    image: tour2,
    date: 'august 26th, 2020',
    title: 'Yejah Adventure',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'usa',
    duration: 16,
    price: 4500,
  },
  {
    id: 3,
    image: tour3,
    date: 'august 26th, 2020',
    title: 'Adventure Patrics',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'mexico',
    duration: 6,
    price: 1223,
  },
  {
    id: 4,
    image: tour4,
    date: 'february 26th, 2023',
    title: 'Random Adventure',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'canada',
    duration: 4,
    price: 1500,
  },
  {
    id: 5,
    image: tour5,
    date: 'march 26th, 2023',
    title: 'Carnival',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'hong kong',
    duration: 6,
    price: 2100,
  },
  {
    id: 6,
    image: tour6,
    date: 'april 6th, 2025',
    title: 'Naiper Adventure',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'indonesia',
    duration: 6,
    price: 2100,
  },
]
