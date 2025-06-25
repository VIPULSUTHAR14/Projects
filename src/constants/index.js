import { FaReact } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiSocketdotio ,SiMongodb,SiExpress } from 'react-icons/si';
 
export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  
  export const myProjects = [
    {
      title: 'Mibby - Real-Time Chat App',
      desc: 'Mibby is a real-time chat app that allows users to chat with each other in real-time. It is built with React.js, Tailwind CSS, Socket.io',
      subdesc:
        'Built as a unique Software-as-a-Service app with Next.js 14, Tailwind CSS,Socket.io, Mibby is designed for optimal performance and scalability.',
      href: 'https://fullstack-realtime-chat-app-7.onrender.com/',
      texture: '/textures/project/project1.mp4',
      logo: '/assets/project-logo1.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          icon: FaReact,
        },
        {
          id: 2,
          name: 'TailwindCSS',
          icon: SiTailwindcss,
        },
        {
          id: 3,
          name: 'TypeScript',
          icon: SiTypescript,
        },
        {
          id: 4,
          name: 'Socket.io',
          icon: SiSocketdotio,
        },
        {
          id: 5,
          name: 'MongoDB',
          icon: SiMongodb,
        },
        {
          id: 7,
          name: 'Express.js',
          icon: SiExpress,
        }
      ],
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.9 : isMobile ? 1 : 1.47,
      deskPosition: isSmall ? [1, -2, 0]:isMobile ? [1.2, -2, 0] : [2, -4, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5, 0],
      reactLogoPosition: isSmall ? [11, -7.4 , -10] : isMobile ? [5, 4, 0] : isTablet ? [7.8, 1.4, 0] : [4.8, 1.4, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      HtmlPosition: isSmall ? [-20, -10.3, -10] : isMobile ? [0, -10, ] : isTablet ? [-20, 2, -10] : [-14, 2, -10],
      CssPosition: isSmall ? [-20, -10.3, -10] : isMobile ? [15, -10, -10] : isTablet ? [-20, -7, -10] : [-14, -7, -10],
      JavascriptLogoPosition: isSmall ? [11, -5, -10] : isMobile ? [5, 4, 0] : isTablet ? [7.8, -1.6, 0] : [5, -1.6, 0],
      // htmlscale: isSmall ? 0.5 : isMobile ? 0.8 : 0.01,
      // cssscale: isSmall ? 0.5 : isMobile ? 0.8 : 0.01,
      // javascriptscale: isSmall ? 0.5 : isMobile ? 0.8 : 0.01,
      // reactscale: isSmall ? 0.5 : isMobile ? 0.8 : 2,
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Framer',
      pos: 'Lead Web Developer',
      duration: '2022 - Present',
      title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
      icon: '/assets/framer.svg',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Figma',
      pos: 'Web Developer',
      duration: '2020 - 2022',
      title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
      icon: '/assets/figma.svg',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Notion',
      pos: 'Junior Web Developer',
      duration: '2019 - 2020',
      title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
      icon: '/assets/notion.svg',
      animation: 'salute',
    },
  ];