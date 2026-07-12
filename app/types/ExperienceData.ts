export class ExperienceData {
    organizationName: string;
    role: string;
    description: string;
    date: string;
    imageName: string;

    public constructor(organizationName: string, role: string, description: string, date: string, imageName: string) {
        this.organizationName = organizationName;
        this.role = role;
        this.description = description;
        this.date = date;
        this.imageName = imageName;
    }
}