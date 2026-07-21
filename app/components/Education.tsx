import Image from 'next/image'
import HorizontalRule from "@/app/components/HorizontalRule";
const Education = () => {
    const awards = "Deans’ Honour List (2024-2025), Provost’s Honour List (2024-2025), H.L. Hooker Scholarship (2025)";
    return(
        <div className="pl-[7%] pr-[7%] mt-6" id="education">
            <h2 className="font-bold text-xl md:text-2xl mb-3">Education</h2>
            <div className="flex flex-col items-start md:flex-row md:items-center mb-6">
                <Image src="/mcmaster-logo.jpg" alt="McMaster University" width={100} height={100}/>
                <div className="md:ml-5">
                    <h3 className="md:text-md text-sm mt-2 md:mt-0 font-bold">McMaster University</h3>
                    <h4 className="md:text-md text-sm">Bachelor of Applied Science - BASc, Computer Science (Co-op)</h4>
                    <p className="md:text-md text-sm">2023 - 2027</p>
                    <p className="md:text-md text-sm"><span className="font-bold">CGPA:</span> 4.0 / 4.0</p>
                    <p className="md:text-md text-sm"><span className="font-bold">Honors & Awards:</span> {awards}</p>
                    <p className="md:text-md text-sm"><span className="font-bold">Relevant Coursework:</span> Data Structures and Algorithms, Databases, Object-Oriented Programming, Operating Systems</p>
                </div>
            </div>
            <HorizontalRule />
        </div>
    );
}

export default Education;