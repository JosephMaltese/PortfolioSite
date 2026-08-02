import {
    certifications,
    education,
    experience,
    projects,
} from '@/lib/portfolio-data'

function SectionHeading({ index, title }: { index: string; title: string }) {
    return (
        <div className="mb-10 flex items-baseline gap-4 border-b border-border pb-4">
            <span className="text-sm tracking-[0.3em] text-accent">{index}</span>
            <h2 className="font-serif text-3xl uppercase tracking-[0.18em] text-foreground sm:text-4xl">
                {title}
            </h2>
        </div>
    )
}

function Section({
                     id,
                     index,
                     title,
                     children,
                 }: {
    id: string
    index: string
    title: string
    children: React.ReactNode
}) {
    return (
        <section
            id={id}
            className="mx-auto w-full max-w-3xl scroll-mt-16 px-6 py-20 sm:py-24"
        >
            <SectionHeading index={index} title={title} />
            {children}
        </section>
    )
}

export function Portfolio() {
    return (
        <main className="paper-surface w-full border-t border-border">
            {/* Experience */}
            <Section id="experience" index="01" title="Experience">
                <div className="flex flex-col gap-12">
                    {experience.map((job) => (
                        <article key={`${job.company}-${job.role}`} className="flex flex-col gap-3">
                            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                                <h3 className="font-serif text-2xl text-foreground">{job.role}</h3>
                                <span className="text-sm tracking-[0.12em] text-muted-foreground">
                  {job.period}
                </span>
                            </div>
                            <p className="text-sm uppercase tracking-[0.18em] text-accent">
                                {job.company} &middot; {job.location}
                            </p>
                            <ul className="mt-1 flex flex-col gap-2">
                                {job.points.map((point) => (
                                    <li
                                        key={point}
                                        className="flex gap-3 text-[0.95rem] leading-relaxed text-muted-foreground"
                                    >
                                        <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </Section>

            {/* Education */}
            <Section id="education" index="02" title="Education">
                <div className="flex flex-col gap-10">
                    {education.map((edu) => (
                        <article key={edu.program} className="flex flex-col gap-2">
                            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                                <h3 className="font-serif text-2xl text-foreground">{edu.program}</h3>
                                <span className="text-sm tracking-[0.12em] text-muted-foreground">
                  {edu.period}
                </span>
                            </div>
                            <p className="text-sm uppercase tracking-[0.18em] text-accent">{edu.school}</p>
                            <p className="mt-1 text-[0.95rem] leading-relaxed text-muted-foreground">
                                {edu.detail}
                            </p>
                        </article>
                    ))}
                </div>
            </Section>

            {/* Projects */}
            <Section id="projects" index="03" title="Projects">
                <div className="flex flex-col gap-8">
                    {projects.map((project) => (
                        <article
                            key={project.name}
                            className="group rounded-sm border border-border bg-card/60 p-6 transition-colors hover:border-accent"
                        >
                            <div className="flex items-baseline justify-between gap-4">
                                <h3 className="font-serif text-2xl text-foreground">{project.name}</h3>
                                <span className="text-sm tracking-[0.12em] text-muted-foreground">
                  {project.year}
                </span>
                            </div>
                            <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">
                                {project.description}
                            </p>
                            <ul className="mt-4 flex flex-wrap gap-2">
                                {project.stack.map((tech) => (
                                    <li
                                        key={tech}
                                        className="border border-border px-2 py-0.5 text-xs uppercase tracking-[0.14em] text-muted-foreground"
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
            <Section id="certifications" index="04" title="Certifications">
                <ul className="flex flex-col">
                    {certifications.map((cert) => (
                        <li
                            key={cert.name}
                            className="flex flex-col justify-between gap-1 border-b border-border py-5 last:border-b-0 sm:flex-row sm:items-baseline"
                        >
                            <div className="flex flex-col gap-0.5">
                                <span className="font-serif text-xl text-foreground">{cert.name}</span>
                                <span className="text-sm uppercase tracking-[0.18em] text-accent">
                  {cert.issuer}
                </span>
                            </div>
                            <span className="text-sm tracking-[0.12em] text-muted-foreground">{cert.year}</span>
                        </li>
                    ))}
                </ul>
            </Section>

            <footer className="mx-auto w-full max-w-3xl px-6 pb-16 pt-4">
                <div className="border-t border-border pt-6 text-center">
                    <p className="font-serif text-lg tracking-[0.1em] text-foreground">Joseph Maltese</p>
                    <p className="mt-1 text-sm tracking-[0.12em] text-muted-foreground">
                        maltesj@mcmaster.ca &middot; Hamilton, Ontario
                    </p>
                </div>
            </footer>
        </main>
    )
}