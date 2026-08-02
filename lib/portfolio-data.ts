export type Experience = {
    role: string
    company: string
    period: string
    location: string
    points: string[]
}

export type Education = {
    program: string
    school: string
    period: string
    gpa: string
    awards: string
    coursework: string
}

export type Project = {
    name: string
    description: string
    stack: string[]
    link: string
}

export type Certification = {
    name: string
    issuer: string
    date: string
    topics: string[]
}

export const experience: Experience[] = [
    {
        role: 'Software Developer Intern',
        company: 'Soti',
        period: 'January 2026 — Present',
        location: 'Mississauga, ON',
        points: [
            'Worked on the Android For Work team to deliver a major feature for the MobiControl platform, developing frontend functionality in Angular and collaborating with engineers and product managers from implementation to release.',
            'Resolved high-priority backend issues in .NET through root cause analysis and targeted fixes.',
        ],
    },
    {
        role: 'Jr. VP Software Architecture',
        company: 'McMaster Start Coding Club',
        period: 'September 2025 - August 2026',
        location: 'Hamilton, ON',
        points: [
            'Worked alongside fellow executives to manage and organize the software architecture team, leading weekly scrum meetings, reviewing pull requests, driving project initiatives, and contributing to the full-stack development of the STaBL.rocks site.',
        ],
    },
    {
        role: 'Research & Development Intern',
        company: 'Fondation STaBL Foundation',
        period: 'April 2025 - August 2025',
        location: 'Hamilton, ON',
        points: [
            'Collaborated on Music Creator 2.0 under Dr. Christopher Anand (Department of Computing & Software, McMaster University), an accessible educational tool that teaches programming through music for visually impaired students.',
            'Contributed full-stack development using JavaScript for the frontend, Node.js for the backend, and PostgreSQL for data management.',
        ],
    },
    {
        role: 'Frontend Developer',
        company: 'Google Developer Student Club',
        period: 'January 2025 - April 2025',
        location: 'Hamilton, ON',
        points: [
            'Worked with a team of software developers and designers to build and maintain the club\'s new website for its 2025 rebranding.',
            'Used the Next.js framework to deliver a modern and performant web experience.',
        ],
    },
    {
        role: 'Full-Stack Developer',
        company: 'McMaster Start Coding Club',
        period: 'September 2024 - August 2025',
        location: 'Hamilton, ON',
        points: [
            'Worked with a team of software developers to maintain and develop the STaBL.rocks web application, which is used by McMaster Start Coding to teach over 50,000 K-PhD students the fundamentals of programming.',
            'Used the full-stack Haskell web framework, IHP.',
        ],
    },
    {
        role: 'Technical Mentor',
        company: 'HammerHacks Hackathon',
        period: 'November 23, 2024',
        location: 'Hamilton, ON',
        points: [
            'Helped students brainstorm creative project ideas which fit the theme of the hackathon. Gave suggestions for which technologies could help them achieve their goals.',
            'Assisted with any technical issues that students faced throughout the course of the competition.',
        ],
    },
]

export const education: Education[] = [
    {
        program: 'Bachelor of Applied Science - BASc, Computer Science (Co-op)',
        school: 'McMaster University',
        period: '2023 — 2027',
        gpa: '4.0/4.0',
        awards: 'Deans’ Honour List (2024-2025), Provost’s Honour List (2024-2025), H.L. Hooker Scholarship (2025)',
        coursework: 'Data Structures and Algorithms, Databases, Object-Oriented Programming, Operating Systems',
    },
]

export const projects: Project[] = [
    {
        name: 'FormTracker',
        description:
            'An AI-powered full-stack fitness platform that analyzes uploaded workout videos to estimate repetitions and evaluate exercise form using computer vision and pose estimation.',
        stack: ['React', 'TypeScript', 'Supabase', 'Tailwind', 'FastAPI', 'MediaPipe'],
        link: 'https://github.com/JosephMaltese/FormTracker'
    },
    {
        name: 'STaBL.rocks',
        description:
            'An online Elm IDE used by McMaster Start Coding (MSC) to teach over 50,000 students the fundamentals of programming. Developed in Haskell using the IHP full-stack framework alongside a team of volunteer software developers.',
        stack: ['Haskell', 'IHP', 'PostgreSQL', 'Bootstrap'],
        link: 'https://stabl.rocks/'
    },
    {
        name: 'GDSC McMaster U site',
        description:
            'The official site for McMaster\'s Google Developer Student Club (GDSC). Developed in NextJS alongside a team of Software Developers on the GDSC\'s Marketing & Branding Team.',
        stack: ['Next.js', 'TypeScript', 'Sanity CMS', 'Tailwind'],
        link: 'https://gdscmcmasteru.ca'
    },
    {
        name: 'Moodify',
        description:
            'Moodify is an AI-powered journaling platform developed at UofTHacks 12, designed to help users reflect, articulate their thoughts, and foster positive thinking. It uses generative AI technologies to summarize journal entries and offer unique perspectives.',
        stack: ['Next.js', 'TypeScript', 'OpenAI API', 'Prisma', 'PostgreSQL', 'Vercel'],
        link: 'https://github.com/JosephMaltese/Moodify'
    },
    {
        name: 'Wedding RSVP Site',
        description:
            'A full-stack web application made for my brother\'s wedding to monitor guest attendance and allow guests to RSVP virtually.',
        stack: ['React', 'TypeScript', 'MongoDB', 'Node.js', 'Express', 'Tailwind'],
        link: 'https://github.com/JosephMaltese/WeddingSite-Frontend'
    },
    {
        name: 'Sudoku Solver GUI',
        description:
            'A GUI developed in C using the GTK toolkit to create an interactive application that solves Sudoku puzzles using a recursive backtracking algorithm.',
        stack: ['C', 'Makefile', 'GTK Toolkit'],
        link: 'https://github.com/JosephMaltese/Sudoku-Solver'
    },
]

export const certifications: Certification[] = [
    { name: 'Angular Essential Training', issuer: 'LinkedIn Learning', date: 'June 2026', topics: ['Angular', 'TypeScript'] },
    { name: 'The Complete GitHub Actions & Workflows Guide', issuer: 'Udemy', date: 'May 2025', topics: ['CI/CD', 'Github Actions', 'YAML'] },
    { name: 'Machine Learning with NumPy, pandas, scikit-learn, and More', issuer: 'Educative', date: 'August 2025', topics: ['NumPy', 'pandas', 'scikit-learn', 'clustering', 'deep learning'] },
    { name: 'CS50\'s Introduction to Artificial Intelligence with Python', issuer: 'Harvard University', date: 'May 2024', topics: ['Search', 'optimization', 'probability', 'ML', 'neural nets'] },
    { name: 'Robot Framework Test Automation: Level 1 (Selenium)', issuer: 'LinkedIn Learning', date: 'April 2024', topics: [] }
]
