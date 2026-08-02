export function BusinessCard() {
    const PROGRAM_DETAILS = 'Computer Science | GPA: 4.0/4.0'
    return (
        <section
            aria-label="Introduction"
            className="paper-surface relative flex min-h-[100svh] w-full flex-col overflow-hidden px-[7vw] pt-[8vh] pb-[16vh]"
        >
            {/* Top row: phone left, affiliation right */}
            <div className="flex items-start justify-between gap-4">
                <p className="engraved smallcaps font-bold tracking-[0.1em] text-card-foreground">
                    <span className="text-[clamp(0.75rem,1.5vw,1.15rem)] align-top">
                        905
                    </span>
                    <span className="ml-1 text-[clamp(1.15rem,2vw,1.5rem)] align-baseline relative -top-[0.05em]">
                        512 4184
                    </span>
                </p>

                <div className="text-right leading-[1.1]">
                    <p className="engraved smallcaps text-[clamp(1rem,2.2vw,1.7rem)] font-semibold tracking-[0.04em] text-card-foreground">
                        McMaster University
                    </p>
                    <p className="engraved smallcaps text-[clamp(0.65rem,1.2vw,0.95rem)] tracking-[0.08em] text-card-foreground/80 font-medium mt-[0.15em]">
                        {PROGRAM_DETAILS}
                    </p>
                </div>
            </div>

            {/* Center: name + title */}
            <div className="flex flex-1 flex-col items-center justify-center">
                <h1 className="engraved smallcaps text-center text-[clamp(1.9rem,4vw,4.5rem)] font-semibold leading-[0.95] tracking-[0.025em] text-card-foreground">
                    Joseph Maltese
                </h1>

                <p className="engraved smallcaps mt-[0.25em] text-center text-[clamp(1.15rem,2.4vw,2.4rem)] font-medium leading-none tracking-[0.035em] text-card-foreground">
                    Software Engineer
                </p>
            </div>

            {/* Bottom: address / contact line */}
            <p className="engraved smallcaps text-center text-[clamp(0.7rem,1.5vw,1.15rem)] tracking-[0.06em] text-card-foreground font-bold">
                Hamilton, Ontario | Software Developer Intern at Soti | <a href="mailto:maltesj@mcmaster.ca" className="hover:underline">maltesj@mcmaster.ca</a> | <a href="https://github.com/JosephMaltese" className="hover:underline" target="_blank">Github</a> | <a href="https://www.linkedin.com/in/josephmaltese/" className="hover:underline" target="_blank">LinkedIn</a>
            </p>
        </section>
    )
}
