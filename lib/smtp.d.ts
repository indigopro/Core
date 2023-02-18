export type SMTPSettings = {
    enabled: boolean;
    host: string;
    port: number;
    auth?: {
        user: string;
        pass: string;
    };
    noReplyEmail: string;
    bccDefaultEmailAddress: string;
    secure?: boolean;
    ignoreTLS?: boolean;
};
export type EmailParameters = {
    from?: string;
    to?: string | Array<string>;
    cc?: string | Array<string>;
    bcc?: string | Array<string>;
    subject?: string;
    content?: string;
    isHtml?: boolean;
    attachments?: any[];
};
