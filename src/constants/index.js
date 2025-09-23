import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  mysql,
  php,
  git,
  docker,
  clouudSolutions,
  marterSolutions,
  mmRoute,
  gameInfo,
  portfolio,
  wallet,
  wordpress,
  reactNative,
  freelance,
  seo,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: wordpress,
  },
  {
    title: "React Native Developer",
    icon: reactNative,
  },
  {
    title: "Freelancer",
    icon: freelance,
  },
  {
    title: "SEO",
    icon: seo,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Php",
    icon: php,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Wordpress",
    icon: wordpress,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Student Internship",
    company_name: "Marter Solutions",
    icon: marterSolutions,
    iconBg: "#383E56",
    date: "Jul 2020 - Oct 2020",
    points: [
      "Joined as a student intern and learned programming and web development.",
      "Learned how to work as a team, and solve real world problems and challanges. ",
      "Worked as an assitant on a MRCCI project with the senior.",
    ],
  },
  {
    title: "Web Developement Internship",
    company_name: "Clouud Solutions",
    icon: clouudSolutions,
    iconBg: "#E6DEDD",
    date: "Dec 2021 - Feb 2022",
    points: [
      "Worked closely with team members to understand all the modules of the client CRM project. ",
      "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Worked as a junior full stack developer using technologies (Laravel, Vue.js, Inertia.js, MySQL, Tailwind Css). ",
    ],
  },
  {
    title: "Wordpress Developer",
    company_name: "mmRoute",
    icon: mmRoute,
    iconBg: "#383E56",
    date: "Oct 2022 - Dec 2023",
    points: [
      "Developed WordPress websites, responsive,mobile-friendly designs using PHP, HTML, CSS, and JavaScript.",
      "Optimized website performance and applied SEO best practices.",
      "Ensured site security with regular updates, backups, and fixes.",
      "Integrated third-party APIs, payment gateways, and tools.",
    ],
  },
  {
    title: "Freelancer",
    company_name: "Freelancer",
    icon: freelance,
    iconBg: "#E6DEDD",
    date: "Feb 2025 - Present",
    points: [
      "Built and Managed client’s WordPress websites and applied SEO to make it rank on search engines.",
      "Worked on a mobile app as a React-Native developer for a client’s personal inventory management app.",
    ],
  },
];

const projects = [
  {
    name: "Game Info Website",
    description:
      "A responsive web application that enables users to search and discover comprehensive game information, including genres, platforms, and release details, with a clean and intuitive interface.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
    ],
    image: gameInfo,
    source_code_link: "https://github.com/PrakashNpn/react-game-hub",
  },
  {
    name: "Personal Portfolio",
    description:
      "A modern and responsive portfolio website showcasing my skills, projects, and services as a web developer, React Native developer, and SEO freelancer, designed with a morder 3D UI and smooth user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/PrakashNpn/personal-portfolio",
  },
  {
    name: "Wallet App",
    description:
      "A cross-platform wallet application built with React Native that enables users to efficiently track income, expenses, and balances, with simple transaction tracking and an easy-to-understand financial overview.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "postgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
    ],
    image: wallet,
    source_code_link: "https://github.com/PrakashNpn/rn-wallet-mobile",
  },
];

const words = [
  { text: "Ideas", imgPath: "./src/assets/ideas.svg" },
  { text: "Concepts", imgPath: "./src/assets/concepts.svg" },
  { text: "Designs", imgPath: "./src/assets/designs.svg" },
  { text: "Code", imgPath: "./src/assets/code.svg" },
  { text: "Ideas", imgPath: "./src/assets/ideas.svg" },
  { text: "Concepts", imgPath: "./src/assets/concepts.svg" },
  { text: "Designs", imgPath: "./src/assets/designs.svg" },
  { text: "Code", imgPath: "./src/assets/code.svg" },
];

export { services, technologies, experiences, projects, words };
