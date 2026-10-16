import {
    certifications,
    education,
    experience,
    projects,
} from '@/lib/portfolio-data'
import Image from 'next/image'

function SectionHeading({ title }: { title: string }) {
    return (
        <div className="mb-8 flex items-baseline gap-4 border-b border-border pb-4 sm:mb-10">
            <h2 className="font-serif text-xl font-medium uppercase tracking-[0.1em] text-foreground sm:text-3xl sm:tracking-[0.18em] lg:text-4xl">
                {title}
            </h2>
        </div>
    )
}

function Section({
    id,
    title,
    children,
}: {
    id: string
    title: string
    children: React.ReactNode
}) {
    return (
        <section
            id={id}
            className="mx-auto w-full max-w-3xl scroll-mt-16 px-8 py-14 sm:px-6 sm:py-24"
        >
            <SectionHeading title={title} />
            {children}
        </section>
    )
}

export function Portfolio() {
    return (
        <main className="paper-surface w-full border-t border-border">
            {/* Education */}
            <Section id="education" title="Education">
                <div className="flex flex-col gap-10">
                    {education.map((edu) => (
                        <article key={edu.program} className="flex flex-col gap-2">
                            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                                <h3 className="font-serif text-xl text-foreground sm:text-2xl">{edu.program}</h3>
                                <span className="text-[0.8rem] tracking-[0.08em] text-muted-foreground sm:text-sm sm:tracking-[0.12em]">
                                    {edu.period}
                                </span>
                            </div>
                            <p className="text-xs uppercase tracking-[0.12em] text-accent sm:text-sm sm:tracking-[0.18em]">{edu.school}</p>
                            <p className="mt-1 text-base leading-7 text-muted-foreground sm:text-[0.95rem] sm:leading-relaxed">
                                CGPA: {edu.gpa}
                            </p>
                            <p className="text-base leading-7 text-muted-foreground sm:text-[0.95rem] sm:leading-relaxed">
                                Honors & Awards: {edu.awards}
                            </p>
                            <p className="mt-1 text-base leading-7 text-muted-foreground sm:text-[0.95rem] sm:leading-relaxed">
                                Relevant Coursework: {edu.coursework}
                            </p>
                        </article>
                    ))}
                </div>
            </Section>

            {/* Experience */}
            <Section id="experience" title="Experience">
                <div className="flex flex-col gap-12">
                    {experience.map((job) => (
                        <article key={`${job.company}-${job.role}`} className="flex flex-col gap-3">
                            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                                <h3 className="font-serif text-xl text-foreground sm:text-2xl">{job.role}</h3>
                                <span className="text-[0.8rem] tracking-[0.08em] text-muted-foreground sm:text-sm sm:tracking-[0.12em]">
                                    {job.period}
                                </span>
                            </div>
                            <p className="text-xs uppercase tracking-[0.12em] text-accent sm:text-sm sm:tracking-[0.18em]">
                                {job.company} &middot; {job.location}
                            </p>
                            <ul className="mt-1 flex flex-col gap-3 sm:gap-2">
                                {job.points.map((point) => (
                                    <li
                                        key={point}
                                        className="flex gap-3 text-base leading-7 text-muted-foreground sm:text-[0.95rem] sm:leading-relaxed"
                                    >
                                        <span aria-hidden className="mt-[0.7rem] h-1 w-1 shrink-0 rounded-full bg-accent" />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </Section>

            {/* Projects */}
            <Section id="projects" title="Projects">
                <div className="flex flex-col gap-6 sm:gap-8">
                    {projects.map((project) => (
                        <article
                            key={project.name}
                            className="group rounded-sm border border-border bg-card/60 p-5 transition-colors hover:border-accent sm:p-6"
                        >
                            <div className="flex items-baseline justify-between gap-4">
                                <h3 className="font-serif text-xl text-foreground sm:text-2xl">{project.name}</h3>
                                <a href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`}>
                                    <Image src="/arrow.png" alt="" width={10} height={10} />
                                </a>
                            </div>
                            <p className="mt-2 text-base leading-7 text-muted-foreground sm:text-[0.95rem] sm:leading-relaxed">
                                {project.description}
                            </p>
                            <ul className="mt-4 flex flex-wrap gap-2">
                                {project.stack.map((tech) => (
                                    <li
                                        key={tech}
                                        className="border border-border px-2 py-0.5 text-xs uppercase tracking-[0.1em] text-muted-foreground sm:tracking-[0.14em]"
                                    >
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </Section>

            {/* Certifications */}
            <Section id="certifications" title="Certifications & Courses">
                <ul className="flex flex-col">
                    {certifications.map((cert) => (
                        <li
                            key={cert.name}
                            className="flex flex-col justify-between gap-2 border-b border-border py-5 last:border-b-0 sm:flex-row sm:items-baseline"
                        >
                            <div className="flex flex-col gap-1">
                                <a className="hover:underline" target="_blank" rel="noreferrer" href={cert.link}>
                                    <span className="font-serif text-lg text-foreground sm:text-xl">{cert.name}</span>
                                </a>
                                <span className="text-xs uppercase tracking-[0.12em] text-accent sm:text-sm sm:tracking-[0.18em]">
                                    {cert.issuer}
                                </span>
                                {cert.topics.length > 0 && (
                                    <span className="text-sm leading-6 text-muted-foreground sm:text-base">
                                        Topics: {cert.topics.join(', ')}
                                    </span>
                                )}
                            </div>
                            <span className="text-[0.8rem] tracking-[0.08em] text-muted-foreground sm:text-sm sm:tracking-[0.12em]">{cert.date}</span>
                        </li>
                    ))}
                </ul>
            </Section>

            <footer className="mx-auto w-full max-w-3xl px-8 pb-12 pt-4 sm:px-6 sm:pb-16">
                <div className="border-t border-border pt-6 text-center">
                    <p className="font-serif text-base tracking-[0.06em] text-foreground sm:text-lg sm:tracking-[0.1em]">Joseph Maltese</p>
                    <p className="mt-1 text-xs tracking-[0.08em] text-muted-foreground sm:text-sm sm:tracking-[0.12em]">
                        maltesj@mcmaster.ca &middot; Hamilton, Ontario
                    </p>
                </div>
            </footer>
        </main>
    )
}