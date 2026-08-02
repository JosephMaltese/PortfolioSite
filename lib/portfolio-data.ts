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
    detail: string
}

export type Project = {
    name: string
    year: string
    description: string
    stack: string[]
}

export type Certification = {
    name: string
    issuer: string
    year: string
}

export const experience: Experience[] = [
    {
        role: 'Software Engineer Intern',
        company: 'Northline Systems',
        period: '2024 — Present',
        location: 'Toronto, ON',
        points: [
            'Built and shipped internal tooling used by 40+ operators, cutting manual reporting time by roughly 60%.',
            'Designed a typed API layer in TypeScript and Node, improving reliability across three client-facing services.',
            'Partnered with product and design to take features from spec to production on a two-week cadence.',
        ],
    },
    {
        role: 'Full-Stack Developer',
        company: 'McMaster Engineering Society',
        period: '2023 — 2024',
        location: 'Hamilton, ON',
        points: [
            'Led a small team building the society’s event platform serving 5,000+ students.',
            'Migrated a legacy PHP app to a modern Next.js and Postgres stack.',
        ],
    },
    {
        role: 'Teaching Assistant, Intro to Programming',
        company: 'McMaster University',
        period: '2023',
        location: 'Hamilton, ON',
        points: [
            'Mentored 120+ first-year students through weekly labs on data structures and algorithms.',
            'Authored supplementary notes adopted across multiple lab sections.',
        ],
    },
]

export const education: Education[] = [
    {
        program: 'B.A.Sc. Computer Science',
        school: 'McMaster University',
        period: '2021 — 2025',
        detail:
            'Focus on distributed systems, software design, and human–computer interaction. Dean’s Honour List.',
    },
]

export const projects: Project[] = [
    {
        name: 'Ledgerline',
        year: '2024',
        description:
            'A personal finance dashboard with real-time categorization and forecasting, built for speed and clarity.',
        stack: ['Next.js', 'TypeScript', 'Postgres', 'Tailwind'],
    },
    {
        name: 'Cadence',
        year: '2024',
        description:
            'A collaborative interval-training app with synchronized timers and shareable workout plans.',
        stack: ['React', 'Node', 'WebSockets'],
    },
    {
        name: 'Marginalia',
        year: '2023',
        description:
            'A distraction-free reading tool that turns long articles into annotated, revisitable notes.',
        stack: ['Next.js', 'Prisma', 'OpenAI'],
    },
]

export const certifications: Certification[] = [
    { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', year: '2024' },
    { name: 'Meta Front-End Developer', issuer: 'Meta', year: '2023' },
    { name: 'Google Data Analytics', issuer: 'Google', year: '2023' },
]
