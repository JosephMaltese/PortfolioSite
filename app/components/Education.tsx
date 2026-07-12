import Image from 'next/image'
import HorizontalRule from "@/app/components/HorizontalRule";
const Education = () => {
    const awards = "Deans’ Honour Lists (2024-2025), Provost’s Honour List (2024-2025), H.L. Hooker Scholarship (2025)";
    return(
        <div className="pl-[7%] pr-[7%] mt-6" id="education">
            <h2 className="font-bold text-2xl mb-3">Education</h2>
            <div className="flex flex-row items-center">
                <Image src="/mcmaster-logo.jpg" alt="McMaster University" width={100} height={100} />
                <div className="ml-5">
                    <h3>McMaster University</h3>
                    <h4>Bachelor of Applied Science - BASc, Computer Science (Co-op)</h4>
                    <p>2023 - 2027</p>
                    <p>CGPA: 4.0 / 4.0</p>
                    <p>Honors & Awards: {awards}</p>
                    <p>Relevant Coursework: Data Structures and Algorithms, Databases, Object-Oriented Programming, Operating Systems</p>
                </div>
            </div>
            <HorizontalRule />
        </div>
    );
}

export default Education;