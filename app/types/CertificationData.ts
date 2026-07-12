export class CertificationData {
    name: string;
    organizationName: string;
    date: string;
    topics: string;

    public constructor(name: string, organizationName: string, date: string, topics: string) {
        this.name = name;
        this.organizationName = organizationName;
        this.date = date;
        this.topics = topics;
    }
}