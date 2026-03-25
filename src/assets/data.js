import React from "react";
import {
  FaAws,
  FaCode,
  FaDocker,
  FaJsSquare,
  FaLaravel,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaReact,
  FaVuejs,
} from "react-icons/fa";
import {
  DiDatabase,
  DiGo,
  DiMongodb,
  DiMysql,
  DiPostgresql,
} from "react-icons/di";
import TypescriptIcon from "../icons/typescript";
import NestJSIcon from "../icons/nestjs";
import ExpressJSIcon from "../icons/expressjs";
import NextJSIcon from "../icons/nextjs";
import ElasticsearchIcon from "../icons/elasticsearch";
import KubernetesJSIcon from "../icons/kubernetes";

const BOOTSTRAP_FOR_SKILL_ICON = "text-4xl mx-auto inline-block";
const data = {
  name: "R. Ilham Fadhilah I.",
  title: "Senior Full-stack Developer",
  social: {
    github: "https://github.com/ilhamfi27",
    email: "r.ilhamfadhilah@gmail.com",
  },
  about: {
    title: "Who am I?",
    description:
      "I’m a seasoned web developer and software engineer specializing in building scalable, high-quality applications across startups, enterprises, and government projects. I take ownership of critical features end-to-end, from design and development to deployment and production monitoring, focusing on reliability, performance, and maintainability. Experienced in handling complex systems and making pragmatic technical decisions, I work extensively with Laravel, Node.js, NestJS, Express.js, Python, FastAPI, Golang, and PHP for backend, along with Vue.js, React.js, and Next.js for frontend, and MySQL, PostgreSQL, MongoDB, and Elasticsearch for data. I also have hands-on experience with Docker, Kubernetes, and AWS in production environments. Fluent in Indonesian and English, I adapt quickly to evolving technologies and am passionate about clean code, problem-solving, and delivering software that scales.",
  },
  skills: [
    {
      skillName: "Laravel",
      skillIcon: <FaLaravel className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Node JS",
      skillIcon: <FaNodeJs className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Javascript",
      skillIcon: <FaJsSquare className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Typescript",
      skillIcon: (
        <TypescriptIcon className={`${BOOTSTRAP_FOR_SKILL_ICON} w-8`} />
      ),
    },
    {
      skillName: "Nest JS",
      skillIcon: <NestJSIcon className={`${BOOTSTRAP_FOR_SKILL_ICON} w-8`} />,
    },
    {
      skillName: "Express JS",
      skillIcon: (
        <ExpressJSIcon className={`${BOOTSTRAP_FOR_SKILL_ICON} w-20`} />
      ),
    },
    {
      skillName: "Python",
      skillIcon: <FaPython className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Vue JS",
      skillIcon: <FaVuejs className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "React JS",
      skillIcon: <FaReact className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Next JS",
      skillIcon: <NextJSIcon className={`${BOOTSTRAP_FOR_SKILL_ICON} w-8`} />,
    },
    {
      skillName: "Golang",
      skillIcon: <DiGo className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "PHP",
      skillIcon: <FaPhp className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "SQL",
      skillIcon: <DiDatabase className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "No SQL",
      skillIcon: <DiDatabase className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "MySQL",
      skillIcon: <DiMysql className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "PostgreSQL",
      skillIcon: <DiPostgresql className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "MongoDB",
      skillIcon: <DiMongodb className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Elasticsearch",
      skillIcon: (
        <ElasticsearchIcon className={`${BOOTSTRAP_FOR_SKILL_ICON} w-8`} />
      ),
    },
    {
      skillName: "DevOps",
      skillIcon: <FaCode className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Docker",
      skillIcon: <FaDocker className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Kubernetes",
      skillIcon: (
        <KubernetesJSIcon className={`${BOOTSTRAP_FOR_SKILL_ICON} w-8`} />
      ),
    },
    {
      skillName: "AWS",
      skillIcon: <FaAws className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
  ],
  experiences: [
    {
      title: "Senior Fullstack Developer",
      company: "Jitera",
      description:
        "Accelerate development and solve complex system challenges by leveraging AI-assisted workflows, improving performance, and designing scalable architectures. Deliver production-grade features end-to-end with a focus on reliability, maintainability, and efficient system design.",
      date: "April 2025 - Present",
    },
    {
      title: "Senior Software Engineer",
      company: "Boostbot.ai",
      description:
        "Led full-stack development with Next.js (TypeScript), Supabase, and integrations (Stripe, IQData, OpenAI).",
      date: "Feb 2024 - March 2025",
    },
    {
      title: "Senior Fullstack Developer",
      company: "PT. Telkom Indonesia",
      description:
        "Led end-to-end development of a user-friendly API marketplace using Kong, Next.js (typescript), NestJS, Elasticsearch, PostgreSQL, and Docker.",
      date: "Sep 2021 - Jan 2024",
    },
    {
      title: "Partime Mentor",
      company: "Productzilla Academy",
      description:
        "Mentored 26 students in a Node.js bootcamp, covering REST APIs, databases, real-time connections, Docker, CI/CD, and deployment.",
      date: "Jan 2023 - Dec 2023",
    },
    {
      title: "Fullstack Developer",
      company:
        "PT Telkom's Project With Ministry of Investment / Indonesia Investment Coordinating Board (BKPM)",
      description:
        "Developed Indonesia’s OSS for the Ministry of Investment, meeting a strict 6-month deadline.",
      date: "May 2022 - Jan 2023",
    },
    {
      title: "Fullstack Developer",
      company: "PT. Zapps",
      description:
        "Built user-friendly Laravel/CodeIgniter apps for Pertamina, speech-to-text apps, and a Laravel-based e-commerce platform.",
      date: "Aug 2020 - Aug 2021",
    },
    {
      title: "Fullstack Developer",
      company: "PT. LEN Industri",
      description:
        "Built a high-performance app using Python WebSocket, Django (REST API), and Vue.js, boosting scalability and user engagement.",
      date: "Jan 2020 - Aug 2021",
    },
    {
      title: "Backend Developer",
      company: "CV. Solusi Teknologi Kreatif",
      description:
        "Contributed in the development of web applications using Node JS, collaborating closely with the lead to translate client requirements into web app solutions",
      date: "Nov 2018 - Jan 2020",
    },
  ],
  projects: [
    {
      title: "React Better Utils",
      description:
        "ReactJS library to help you have a better, clean and readable code when it comes to iterating and conditioning things in your JSX or TSX file.",
      tags: ["reactjs", "utils"],
      link: "https://github.com/ilhamfi27/react-better-utils",
    },
  ],
};
export default data;
