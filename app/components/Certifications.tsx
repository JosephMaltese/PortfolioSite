import {CertificationData} from "@/app/types/CertificationData";

const certificationList: CertificationData[] = [
    new CertificationData(
        'Angular Essential Training',
        'LinkedIn Learning',
        'June 2026',
        'Angular, TypeScript'
    ),
    new CertificationData(
        'The Complete GitHub Actions & Workflows Guide',
        'Udemy',
        'May 2025',
        'CI/CD, Github Actions, YAML'
    ),
    new CertificationData(
        'Machine Learning with NumPy, pandas, scikit-learn, and More',
        'Educative',
        'August 2025',
        'NumPy, pandas, scikit-learn, clustering, deep learning',
    ),
    new CertificationData(
        'CS50\'s Introduction to Artificial Intelligence with Python',
        'Harvard University',
        'May 2024',
        'Search, optimization, probability, ML, neural nets'
    ),
    new CertificationData(
        'Robot Framework Test Automation: Level 1 (Selenium)',
        'LinkedIn Learning',
        'April 2024',
        ''
    )
]
const Certifications = () => {
    return (
        <div className="pl-[7%] pr-[7%] mt-6" id="certifications">
            <h2 className="font-bold text-xl md:text-2xl mb-5">Certifications & Courses</h2>
            <ul>
                {certificationList.map((certification, index) => {
                    return (
                        <li key={index} className="flex flex-row justify-between mb-5">
                            <div>
                                <h3 className="font-bold md:text-md text-sm">{certification.name}</h3>
                                <p className="md:text-md text-sm">{certification.organizationName}</p>
                                {certification.topics && <p className="md:text-md text-sm">Topics: {certification.topics}</p>}
                            </div>
                            <p className="md:text-md text-sm ml-3 max-w-12 md:max-w-full">{certification.date}</p>
                        </li>);
                })}
            </ul>
        </div>
    );
}

export default Certifications;