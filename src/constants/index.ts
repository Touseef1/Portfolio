// Contains constant data for using in website
// ! Don't remove anything from here if not sure

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
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Js Developer",
    icon: mobile,
  },
  {
    title: "Vue Js Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Shopify Custom Developer",
    company_name: "Shopify",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jan 2023 - March 2023",
    points: [
      "Develop and maintain Shopify-based web applications, ensuring optimal performance and user experience.",
      "Collaborate with designers, product managers, and other developers to translate business requirements into functional Shopify solutions.",
      "Implement responsive design principles to ensure a seamless shopping experience across various devices.",
    ],
  },
  {
    title: "Figma to HTML/CSS",
    company_name: "Web Developement",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "March 2023 - Jun 2023",
    points: [
      "Converting Figma designs into high-quality HTML/CSS code, ensuring fidelity to the original design and pixel-perfect precision.",
      "Working closely with cross-functional teams, including designers, product managers, and developers, to bring Figma designs to life and create visually stunning web applications.",
      "Implementing responsive design principles to guarantee a seamless user experience across various devices and screen sizes.",
    ],
  },
  {
    title: "Vue Js Developer",
    company_name: "Web Developement",
    icon: shopify,
    iconBg: "#383E56",
    date: "July 2023 - Dec 2023",
    points: [
      "Develop and maintain web applications using Vue.js and related technologies.",
      "Implement responsive design, ensure cross-browser compatibility, and contribute to API implementation and usage.",
      "Collaborate across teams to create high-quality products, integrating API functionality seamlessly.",
    ],
  },
  {
    title: "React Js Developer",
    company_name: "Web Developement",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "It was impossible to make a website as beautiful as our product, but Touseef proved me wrong.",
    name: "Sara Lee",
    designation: "Client",
    company: "Acme Co",
    image: user1,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Touseef does.",
    name: "Chris Brown",
    designation: "Sr Developer",
    company: "DEF Corp",
    image: user2,
  },
  {
    testimonial:
      "After Touseef optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "Client",
    company: "456 Enterprises",
    image: user3,
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "Astrounts UXD",
    description:
      "Astronuts, the esteemed digital VP of Engineering, adeptly elevates team productivity, minimizes bugs, and accelerates engineering velocity with finesse.",
    tags: [
      {
        name: "figma",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    live_site_link: "https://touseef1.github.io/Asrtonuts-Bootstrap-Theme/",
  },
  {
    name: "Fevor seo",
    description:
      "Maximize SEO potential with our comprehensive website optimization services, tailored to boost your online visibility and rankings",
    tags: [
      {
        name: "figma",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    live_site_link: "https://touseef1.github.io/Fervor-SEO-Bootstrap-Theme-/",
  },
  {
    name: "After Sales",
    description:
      "Visit the Toyota post-sale website for comprehensive support, resources, and solutions, ensuring a smooth and satisfying ownership experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restful api",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    live_site_link: "https://dev.aftersales.otifcrew.com/",
  },
  {
    name: "TikTok Clone",
    description:
      "A Next JS Web Application that enables users to upload videos of any length and size, create accounts and connect with other people just like any other social media.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: project4,
    live_site_link: "https://tiktok-clone-react.vercel.app/",
  },
] as const;

export const SOCIALS = [
  // {
  //   name: "YouTube",
  //   icon: youtube,
  //   link: "#",
  // },
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/touseef-ahmad-7967551b0/",
  },
  {
    name: "Twitter",
    icon: twitter,
    link: "https://www.upwork.com/freelancers/~01a073e232259efafa",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/Touseef1",
  },
] as const;
