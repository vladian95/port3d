import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  marusya,
  eshop,
  klassov,
  tripguide,
  threejs,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
  },
  {
    id: 'work',
  },
  {
    id: 'contact',
  },
];

const services = [
  {
    id: 'dev',
    icon: mobile,
  },
  {
    id: 'sites',
    icon: backend,
  },
  {
    id: 'app',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
];

const projects = [
  {
    id: 'land',
    name: 'Landing page',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'emailjs',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: marusya,
    source_code_link: 'https://github.com/vladian95/marusya_look',
  },
  {
    id: 'ecomm',
    name: 'E-commerce App',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongoDB',
        color: 'green-text-gradient',
      },
      {
        name: 'styledComponents',
        color: 'pink-text-gradient',
      },
    ],
    image: eshop,
    source_code_link: 'https://github.com/vladian95/eco-shop-react',
  },
  {
    id: 'control',
    name: 'Control service',
    tags: [
      {
        name: 'gulp',
        color: 'blue-text-gradient',
      },
      {
        name: 'emailjs',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: klassov,
    source_code_link: 'https://github.com/vladian95/klassov_Quality',
  },
];

export { services, technologies, projects };
