import React from 'react';
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
} from 'react-icons/fa';
import {
  DiDatabase,
  DiGo,
  DiMongodb,
  DiMysql,
  DiPostgresql,
} from 'react-icons/di';
import TypescriptIcon from '../icons/typescript';
import NestJSIcon from '../icons/nestjs';
import ExpressJSIcon from '../icons/expressjs';
import NextJSIcon from '../icons/nextjs';
import ElasticsearchIcon from '../icons/elasticsearch';
import KubernetesJSIcon from '../icons/kubernetes';

const BOOTSTRAP_FOR_SKILL_ICON = 'text-4xl mx-auto inline-block';
const data = {
  name: 'R. Ilham Fadhilah I.',
  title: 'Full-stack Developer',
  social: {
    github: 'https://github.com/ilhamfi27',
    email: 'r.ilhamfadhilah@gmail.com',
  },
  about: {
    title: 'Who am I?',
    description:
      'I am a seasoned web developer and software engineer with experience working in startups, enterprises, and government projects. Proficient at developing efficient, scalable, and maintainable solutions with modern frameworks, I also thrive well in a collaborative environment, filling the gap in both technical and cultural divides as a fluent communicator in Indonesian and English. Proficient in agile methodologies, I always deliver quality while staying up to date with the latest emerging technologies and integrating legacy systems. I pay extra attention to clean code, details, and proactive problem-solving to drive results with impact, innovative solutions that enable business and user experiences.',
  },
  skills: [
    {
      skillName: 'Laravel',
      skillIcon: <FaLaravel className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: 'Node JS',
      skillIcon: <FaNodeJs className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: 'Javascript',
      skillIcon: <FaJsSquare className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: 'Typescript',
      skillIcon: (
        <TypescriptIcon className={`${BOOTSTRAP_FOR_SKILL_ICON} w-8`} />
      ),
    },
    {
      skillName: 'Nest JS',
      skillIcon: <NestJSIcon className={`${BOOTSTRAP_FOR_SKILL_ICON} w-8`} />,
    },
    {
      skillName: 'Express JS',
      skillIcon: (
        <ExpressJSIcon className={`${BOOTSTRAP_FOR_SKILL_ICON} w-20`} />
      ),
    },
    {
      skillName: 'Python',
      skillIcon: <FaPython className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: 'Vue JS',
      skillIcon: <FaVuejs className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: 'React JS',
      skillIcon: <FaReact className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: 'Next JS',
      skillIcon: <NextJSIcon className={`${BOOTSTRAP_FOR_SKILL_ICON} w-8`} />,
    },
    {
      skillName: 'Golang',
      skillIcon: <DiGo className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: 'PHP',
      skillIcon: <FaPhp className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: 'SQL',
      skillIcon: <DiDatabase className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: 'No SQL',
      skillIcon: <DiDatabase className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: 'MySQL',
      skillIcon: <DiMysql className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: 'PostgreSQL',
      skillIcon: <DiPostgresql className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: 'MongoDB',
      skillIcon: <DiMongodb className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: 'Elasticsearch',
      skillIcon: (
        <ElasticsearchIcon className={`${BOOTSTRAP_FOR_SKILL_ICON} w-8`} />
      ),
    },
    {
      skillName: 'DevOps',
      skillIcon: <FaCode className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: 'Docker',
      skillIcon: <FaDocker className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: 'Kubernetes',
      skillIcon: (
        <KubernetesJSIcon className={`${BOOTSTRAP_FOR_SKILL_ICON} w-8`} />
      ),
    },
    {
      skillName: 'AWS',
      skillIcon: <FaAws className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
  ],
  experiences: [
    {
      title: 'Senior Software Engineer',
      company: 'Boostbot.ai',
      description:
        'Led full-stack development with Next.js (TypeScript), Supabase, and integrations (Stripe, IQData, OpenAI).',
      date: 'Feb 2024 - Present',
    },
    {
      title: 'Senior Fullstack Developer',
      company: 'PT. Telkom Indonesia',
      description:
        'Led end-to-end development of a user-friendly API marketplace using Kong, Next.js (typescript), NestJS, Elasticsearch, PostgreSQL, and Docker.',
      date: 'Sep 2021 - Jan 2024',
    },
    {
      title: 'Partime Mentor',
      company: 'Productzilla Academy',
      description:
        'Mentored 26 students in a Node.js bootcamp, covering REST APIs, databases, real-time connections, Docker, CI/CD, and deployment.',
      date: 'Jan 2023 - Dec 2023',
    },
    {
      title: 'Fullstack Developer',
      company:
        "PT Telkom's Project With Ministry of Investment / Indonesia Investment Coordinating Board (BKPM)",
      description:
        'Developed Indonesia’s OSS for the Ministry of Investment, meeting a strict 6-month deadline.',
      date: 'May 2022 - Jan 2023',
    },
    {
      title: 'Fullstack Developer',
      company: 'PT. Zapps',
      description:
        'Built user-friendly Laravel/CodeIgniter apps for Pertamina, speech-to-text apps, and a Laravel-based e-commerce platform.',
      date: 'Aug 2020 - Aug 2021',
    },
    {
      title: 'Fullstack Developer',
      company: 'PT. LEN Industri',
      description:
        'Built a high-performance app using Python WebSocket, Django (REST API), and Vue.js, boosting scalability and user engagement.',
      date: 'Jan 2020 - Aug 2021',
    },
    {
      title: 'Backend Developer',
      company: 'CV. Solusi Teknologi Kreatif',
      description:
        'Contributed in the development of web applications using Node JS, collaborating closely with the lead to translate client requirements into web app solutions',
      date: 'Nov 2018 - Jan 2020',
    },
  ],
  projects: [
    {
      title: 'React Better Utils',
      description:
        'ReactJS library to help you have a better, clean and readable code when it comes to iterating and conditioning things in your JSX or TSX file.',
      tags: ['reactjs', 'utils'],
      link: 'https://github.com/ilhamfi27/react-better-utils',
    },
  ],
};
export default data;
