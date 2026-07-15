import Image from "next/image";
import React from "react";
import HorizontalRule from "@/app/components/HorizontalRule";

const MobileLanding = ({ bio }: { bio: string }) => {
    return (
        <>
            <div className="pt-28 max-w-full">
                <div className="flex flex-col max-w-full pl-[7%] pr-[7%]">
                    <div>
                        <h1 className="text-5xl ser">Joseph</h1>
                        <h1 className="text-5xl ser">Maltese</h1>
                        <h2 className="mt-7 text-md">Software Engineer</h2>
                        <h2 className="mb-3">Hamilton, ON</h2>
                        <a href="mailto:maltesj@mcmaster.ca">
                            <p className="mb-3">maltesj@mcmaster.ca</p>
                        </a>
                    </div>
                    <HorizontalRule/>
                    <div className="flex flex-col justify-between mt-3">
                        <p className="mt-auto text-sm">{bio}</p>
                        <div className="mt-3 flex flex-row items-center">
                            <p className="mr-3 text-sm">Links:</p>

                            <a
                                href="https://github.com/JosephMaltese"
                                target="_blank"
                                className="inline-flex items-center gap-1 text-sm"
                            >
                                Github
                                <Image src="/arrow.png" alt="" width={7} height={7} />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/josephmaltese/"
                                target="_blank"
                                className="ml-5 inline-flex items-center gap-1 text-sm"
                            >
                                LinkedIn
                                <Image src="/arrow.png" alt="" width={7} height={7} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MobileLanding;