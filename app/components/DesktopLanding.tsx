import Image from "next/image";
import React from "react";

const DesktopLanding = ({ bio }: { bio: string }) => {
    return (
        <>
            <div className="pt-40 max-w-full">
                <div className="flex flex-row max-w-full justify-between pl-[7%] pr-[7%]">
                    <div>
                        <h1 className="text-7xl ser">Joseph</h1>
                        <h1 className="text-7xl ser">Maltese</h1>
                        <h2 className="mt-7">Software Engineer</h2>
                        <h2>Hamilton, ON</h2>
                    </div>
                    <div className="max-w-[40%] flex flex-col justify-between">
                        <p className="mt-auto">{bio}</p>
                        <div className="mt-3 flex w-full justify-between">
                            <a href="mailto:maltesj@mcmaster.ca"><p>maltesj@mcmaster.ca</p></a>
                            <div className="flex flex-row">
                                <p className="mr-3">Links:</p>
                                <div className="flex">
                                    <a href="https://github.com/JosephMaltese" target="_blank">
                                        <p className="inline-flex items-center gap-1">
                                            Github
                                            <Image
                                                src="/arrow.png"
                                                alt="arrow"
                                                width={10}
                                                height={10}
                                            />
                                        </p>
                                    </a>
                                    <a href="https://www.linkedin.com/in/josephmaltese/" target="_blank">
                                        <p className="inline-flex items-center gap-1 ml-5">
                                            LinkedIn
                                            <Image
                                                src="/arrow.png"
                                                alt="arrow"
                                                width={10}
                                                height={10}
                                            />
                                        </p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="w-[86%] m-auto mt-9 border-0 h-[2px] bg-zinc-300/80"/>
            </div>
        </>
    )
}

export default DesktopLanding;