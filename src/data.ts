// src/data.ts
export const cv = {
  education: [
    {
      title: 'Master in Cybersecurity: From Design to Operation',
      institution: 'University of Bologna (UNIBO)',
      year: '2025 – Present',
      description: 'Focusing on Cloud Security, DevOps automation, defensive perimeters, and advanced cryptography architectures. GPA: 29/30',
      icon: '/img/cv_logos/alma-mater-studiorum-seeklogo.png',
    },
    {
      title: "Bachelor's Degree in Computer Science",
      institution: 'University of Bologna (UNIBO)',
      year: '2022 – 2025',
      description: 'Core focus on mathematics, systems programming, databases, and networks. Specialized electives in Security Lab and Mobile Applications Lab.',
      icon: '/img/cv_logos/alma-mater-studiorum-seeklogo.png',
    },
    {
      title: 'Technical High School Diploma (ITIS "Giorgi")',
      institution: 'ITIS Giorgi, Brindisi',
      year: '2017 – 2022',
      description: 'Graduated with 100/100. Awarded a certificate of merit for outstanding extracurricular achievements (in tech and also other fields).',
      icon: '/img/cv_logos/itt_giorgi.png',
    },
    {
        title: 'Introduction to Cybersecurity',
        institution: 'Cisco Networking Academy',
        year: '2026',
        description: '',
        icon: '/img/cv_logos/cisco-png-logo-3765.png',
    },
    {
        title: 'Entrepreneurship',
        institution: 'Cisco Networking Academy',
        year: '2021',
        description: '',
        icon: '/img/cv_logos/cisco-png-logo-3765.png',
    },
    {
      title: 'Cisco IoT Certification',
      institution: 'Cisco Networking Academy',
      year: '2021',
      description: 'Foundational architecture, telemetry routing, and system node interaction.',
      icon: '/img/cv_logos/cisco-png-logo-3765.png',  
    },
    {
      title: 'Cisco IT Essentials Certification',
      institution: 'Cisco Networking Academy',
      year: '2020',
      description: 'Hardware orchestration, lower-level software baselines, and diagnostics.',
      icon: '/img/cv_logos/cisco-png-logo-3765.png',  
    }
  ],
  experience: [
    {
        role: 'Intern',
        company: 'CRIF',
        period: '2026 – Present', 
        description: 'Focused on multi-cloud perimeter security. Designed and implemented automated testing frameworks for benchmarking, vulnerability assessment, and compliance verification of deployed Web Application Firewalls (WAF).'
    },
    {
        role: 'Private Tutor',
        company: 'Self-employed',
        period: '2024 – 2026',
        description: 'Delivered tailored private tutoring sessions to high school and university students in core computer science disciplines, including Computer Architecture, OS Internals, Databases (SQL), Networks, Algorithms & Data Structures, Numerical Computation, and programming languages (Python, Java, C++). Mentored high school students for the 2026 Italian State Exam (Esame di Stato) in Computer Science, specifically preparing them for the "Sistemi e Reti" track.'
    },
    {
        role: "University Intern",
        company: "University of Bologna (UNIBO)",
        period: "2025 ",
        description: "Developed an automated Deep Learning framework for masonry crack detection to replace costly structural inspections. This included on-site field collection and pixel-wise annotation of a novel dataset across Emilia-Romagna. Optimized segmentation models using advanced loss functions, culminating in a custom architecture (MurCrackNet) that achieved an impressive 0.874 F1-score."
    },
    {
        role: 'Private Tutor',
        company: 'Self-employed',
        period: '2020 – 2022',
        description: 'Delivered foundational computer science instruction to high school and first-year university students, structuring fast-track exam preparation modules.'
    }
  ],
  softSkills: [
    'Time Management ',
    'Problem Solving',
    'Adaptability',
    'Technical Communication'
  ]
};

export const projects = [
  {
    title: 'Deep Learning for Crack Detection in Masonry (Bachelor Thesis)',
    description:
      'Code and experiments for a UNIBO bachelor thesis: semantic segmentation models trained and fine-tuned on an original NonOrtho/UniBo masonry dataset. Includes data preprocessing, loss comparison.',
    image: '/img/project_image/crackdetection.png',
    link: 'https://github.com/aNdReA9111/deep-crack-detection',
  },
  {
    title: 'µPandOS',
    description:
      'µPandOS is an educational microkernel operating system developed as part of an academic project. It implements core OS functionalities such as process management and inter-process communication. Written in C.',
    image: '/img/project_image/pandos.png',
    link: 'https://github.com/aNdReA9111/PandOS',
  },
  {
    title: '1 vs All-phabet',
    description:
      'A group project implementing a terminal game using the ncurses library in C++. The player progresses through levels by collecting coins while avoiding or defeating enemies (monsters and turrets) represented by letters. Includes shooting mechanics and distinct enemy behaviors.',
    image: '/img/project_image/1VSalphabet.png',
    link: 'https://github.com/aNdReA9111/1-VS-All-phabet',
  },
  {
    title: 'Tetris',
    description:
      'Simple implementation of the classic game “Tetris” using C++ and the ncurses TUI library. Focused on game logic, piece rotation, collision handling, and terminal-based rendering.',
    image: '/img/project_image/tetris.png',
    link: 'https://github.com/aNdReA9111/tetris',
  },
  {
    title: 'Nand2Tetris',
    description:
      'Personal implementation of the Nand2Tetris project for the “Computer Architecture” course at the University of Bologna (2022/2023). The project builds a computer from logic gates to a full working OS and compiler.',
    image: '/img/project_image/nand2tetris.png',
    link: 'https://github.com/aNdReA9111/NandToTetris',
  },
  {
    title: 'AFLP - Connect X',
    description:
      'Development of an intelligent player for the generalized version of the Connect 4 game (Connect X) using the Alpha-Beta Pruning algorithm in Java. Implements a heuristic evaluation function for efficient decision-making.',
    image: '/img/project_image/connectx.png',
    link: 'https://github.com/aNdReA9111/connectx',
  },
  {
    title: 'PC Components Store',
    description:
      'Database design project for a PC components retail chain. Models stores, warehouses, staff, products, suppliers, customers, orders, invoices, and returns. Focused on data consistency and relational integrity. (Note: no payment system implemented; educational purpose only.)',
    image: '/img/project_image/noimage.png',
    link: 'https://github.com/aNdReA9111/prog_database',
  },
  {
    title: 'Selfie',
    description:
      'Web app designed to manage the social, private, and academic life of university students. Built as part of the course “88566 - Tecnologie Web” (2023/2024). Developed with a strong focus on usability.',
    image: '/img/project_image/selfie.png',
    link: 'https://github.com/aNdReA9111/Selfie',
  },
  {
    title: 'Tradisk',
    description:
      'Full-Stack Web App allowing EVE Online players to explore the financial markets of the game. Built with Agile practices.',
    image: '/img/project_image/tradisk.png',
    link: '#',
  },
  {
    title: 'Travel Companion App',
    description:
      'Android app to create and manage travel photo collections with geolocation, timestamps, and labeling features. Built in Kotlin using Android Studio.',
    image: '/img/project_image/travel_companion.jpg',
    link: 'https://github.com/aNdReA9111/Travel_Companion',
  },
  {
    title: 'CIFAR10 Classification',
    description:
      'Neural network that predicts the two original classes from an averaged pair of CIFAR-10 images, split into two category groups.',
    image: '/img/project_image/cifar10classification.png',
    link: 'https://github.com/aNdReA9111/Intro_MachineLearning/blob/main/Esame_Gennaio_2025/cifar_10_separation_FiorellinoAndrea_1089150.ipynb',
  }
];

export const contact = {
  email: 'andrea.fiorellino@studio.unibo.it',
  github: 'https://github.com/aNdReA9111',
  linkedin: 'https://www.linkedin.com/in/andrea-fiorellino-7b34523aa/',
};