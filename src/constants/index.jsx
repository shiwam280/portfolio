import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";

import projectImage1 from "../assets/project1.png";
import projectImage2 from "../assets/project2.png";
import projectImage3 from "../assets/project3.png";
import projectImage4 from "../assets/project4.png";

import { RiReactjsLine } from "react-icons/ri";
import { SiExpress, SiJavascript, SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  // { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "SHIWAM SINGH",
  greet: "Hello there! 👋🏻",
  description:
    "I am a passionate frontend developer with a knack for creating beautiful and functional user interfaces. I like transforming ideas into engaging web experiences for over a decade.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Hirrd - Job Portal",
    description:
      "Architected and developed a scalable job portal application using React JS for front-end development, Tailwind CSS for responsive styling, and Supabase as a backend-as-a-service for real-time data management and storage.",
    image: projectImage1,
    githubLink: "https://github.com/shiwam280/hirrd",
    live: "https://hirrd-rho.vercel.app",
  },
  {
    id: 2,
    name: "Airbnb",
    description:
      "Developed a full-stack Airbnb clone using React JS and Tailwind CSS for a dynamic and responsive front-end, Engineered a robust backend with Express.js and MongoDB, incorporating JWT for secure authentication.",
    image: projectImage2,
    githubLink: "https://github.com/shiwam280/booking-app",
    live: "https://shiwam-booking-app.vercel.app",
  },
  {
    id: 3,
    name: "BlogIt",
    description:
      "Developed a full-stack blogging application using the MERN stack, featuring a responsive front end with React JS and Tailwind CSS. The backend is powered by Express.js and MongoDB for efficient CRUD operations and real-time content updates.",
    image: projectImage3,
    githubLink: "https://github.com/shiwam280/BlogIt",
    live: "https://github.com/shiwam280/BlogIt",
  },
  {
    id: 6,
    name: "Chat Application",
    description:
      "Built a full-stack real-time chat application using the MERN stack with React JS and Tailwind CSS for a dynamic front end, and Express.js, MongoDB, and Socket.io for real-time messaging and data synchronization.",
    image: projectImage4,
    githubLink: "https://github.com/shiwam280/Snappy",
    live: "https://github.com/shiwam280/Snappy",
  },
];

export const BIO = [
  "Hi there! 👋 I'm Shiwam Singh, a Full-Stack developer with a passion for technology and innovation. With a Master’s degree in Computer Applications, I am eager to dive deep into the ever-evolving tech landscape and contribute through creative problem-solving and cutting-edge development.",
  "I have hands-on experience in both frontend and backend development, specializing in building user-friendly, responsive web applications using technologies like React, Tailwind CSS, and JavaScript. My backend skills include Node.js and Express.js, where I create scalable and efficient server-side solutions. I’m also proficient in managing databases like MongoDB, SQL, and Supabase, ensuring secure and efficient data handling.",
  "My technical knowledge is complemented by a solid understanding of core computer science principles such as Object-Oriented Programming, Data Structures, and Networking. I am committed to crafting high-quality digital experiences that blend performance, design, and functionality.",
  "Beyond coding, I am driven by a curiosity to learn and grow. I believe in continuous self-improvement, both professionally and personally. When I’m not developing, you can find me reading, exploring new technologies, or engaging with like-minded tech enthusiasts.",
  "Excited to connect with professionals and collaborate on innovative projects that push the boundaries of what’s possible in tech! 🚀",
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "1+ years",
  },
  {
    icon: <SiJavascript className="text-4xl text-yellow-400 lg:text-5xl" />,
    name: "JavaScript",
    experience: "1.5+ years",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "1+ years",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "1+ years",
  },
  {
    icon: <SiExpress className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Express",
    experience: "1+ years",
  },
  {
    icon: <BiLogoPostgresql className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "PostgreSQL",
    experience: "2+ months",
  },
];

export const EXPERIENCES = [
  {
    title: "Lead Frontend Developer",
    company: "Innovative Tech Solutions",
    duration: "July 2020 - Present",
    description:
      "As the Lead Frontend Developer, I spearheaded the development of advanced web applications using cutting-edge technologies like React, Redux, and TypeScript. I worked closely with cross-functional teams, including designers, product managers, and backend developers, to deliver seamless and high-performance user experiences.",
  },
  {
    title: "Frontend Engineer",
    company: "Digital Creations",
    duration: "February 2016 - June 2020",
    description:
      "At Digital Creations, I focused on building highly interactive and responsive web interfaces using HTML, CSS, JavaScript, and modern libraries like React. I collaborated closely with UX/UI designers to implement design changes that enhanced user engagement and satisfaction. My role involved optimizing website performance, ensuring cross-browser compatibility, and implementing SEO best practices. ",
  },
  {
    title: "Junior Web Developer",
    company: "Bright Future Technologies",
    duration: "August 2014 - January 2016",
    description:
      "In my role as a Junior Web Developer, I assisted in the development and maintenance of various web applications. I gained hands-on experience in utilizing HTML, CSS, and JavaScript to create user-friendly interfaces. I actively participated in team meetings, contributed to project planning, and collaborated with senior developers to implement new features.",
  },
];

export const EDUCATION = [
  {
    degree: "Masters of Computer Applications",
    institution: "Pranveer Singh Institute of Technology",
    duration: "June 2022 - June 2024",
    description:
      "In my MCA program at Pranveer Singh Institute of Technology, I gained advanced knowledge in software development, focusing on programming languages, data structures, and algorithms. This education equipped me with the skills to tackle complex software challenges and fostered my ability to work collaboratively in teams.",
  },
  {
    degree: "Bachelor of Computer Applications",
    institution: "Dr. Virendra Swarup Institute of Computer Studies",
    duration: "August 2018 - August 2021",
    description:
      "During my BCA at Dr. Virendra Swarup Institute of Technology, I developed a strong foundation in front-end technologies, including HTML, CSS, and JavaScript. This program emphasized practical application through projects, enhancing my coding skills and preparing me for a career in software development.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/shivam_singh44",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/shiwam280",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/shiwamsingh280",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
