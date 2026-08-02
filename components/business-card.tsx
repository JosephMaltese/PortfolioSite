export function BusinessCard() {
    const PROGRAM_DETAILS = 'Computer Science | GPA: 4.0/4.0'
    return (
        <section
            aria-label="Introduction"
            className="paper-surface relative flex min-h-[100svh] w-full flex-col overflow-hidden px-[7vw] pt-[8vh] pb-[16vh]"
        >
            {/* Top row: phone left, affiliation right */}
            <div className="flex items-start justify-between gap-4">
                <p className="engraved smallcaps text-[clamp(0.75rem,1.5vw,1.15rem)] tracking-[0.1em] text-card-foreground">
                    905 512 4184
                </p>

                <div className="text-right">
                    <p className="engraved smallcaps text-[clamp(0.95rem,2vw,1.6rem)] font-semibold tracking-[0.06em] text-card-foreground">
                        McMaster University
                    </p>
                    <p className="engraved smallcaps text-[clamp(0.7rem,1.3vw,1rem)] tracking-[0.06em] text-muted-foreground">
                        {PROGRAM_DETAILS}
                    </p>
                </div>
            </div>

            {/* Center: name + title */}
            <div className="flex flex-1 flex-col items-center justify-center">
                <h1 className="engraved smallcaps text-center text-[clamp(2.25rem,9vw,6.5rem)] font-semibold leading-none tracking-[0.04em] text-card-foreground">
                    Joseph Maltese
                </h1>
                <p className="engraved smallcaps mt-[3vh] text-center text-[clamp(1rem,3vw,2rem)] tracking-[0.08em] text-card-foreground">
                    Software Engineer
                </p>
            </div>

            {/* Bottom: address / contact line */}
            <p className="engraved smallcaps text-center text-[clamp(0.7rem,1.5vw,1.15rem)] tracking-[0.06em] text-muted-foreground">
                Hamilton, Ontario &nbsp; Email maltesj@mcmaster.ca &nbsp; Tel 905 512 4184
            </p>


        </section>
    )
}
