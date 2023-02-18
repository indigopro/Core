export type DocumentDataService = {
    getDocument: (path: string) => Promise<DocumentEntry>;
    getDocuments: (path: string, includeStream: boolean, includeSubFolder: boolean, includePhysicalPath: boolean) => Promise<Array<FolderEntry | DocumentEntry>>;
    saveDocument: (path: string, fileName: string, base64: string) => Promise<boolean>;
    documentExists: (path: string) => Promise<boolean>;
    deleteDocument: (path: string) => Promise<boolean>;
};
export declare const getExtensionDocument: (name: string) => any;
export type Entry = {
    type: 'Document' | 'Folder';
    name?: string;
    path: string;
};
export type DocumentEntry = Entry & {
    extension?: string;
    mimeType?: string;
    lastModifiedDate?: any;
    size?: number;
    url?: string | null;
    base64Stream?: string | null;
};
export type FolderEntry = {
    entries?: Array<FolderEntry | DocumentEntry>;
};
export interface UploadInfo {
    label?: string;
    onLoad?(files: Array<DocumentEntry>): void;
    style?: string | undefined;
    accept?: string | undefined;
    multiple?: boolean;
    onError?: (message: string) => void;
}
export declare const saveDocument: (mimeType: string, content: string, documentName?: string) => void;
export declare const makeBlob: (dataURI: string) => Blob;
export declare const openDocument: (documentEntry: DocumentEntry) => void;
