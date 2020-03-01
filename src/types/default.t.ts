export interface Mail {
    from: string;
    to: string[];
    date: string;
    attachments: string[];
    subject: string;
    content: string;
}