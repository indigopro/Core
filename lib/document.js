"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.openDocument = exports.makeBlob = exports.saveDocument = exports.getExtensionDocument = void 0;
const moment_1 = __importDefault(require("moment"));
const getExtensionDocument = (name) => {
    const re = /(?:\.([^.]+))?$/;
    const ext = re.exec(name)[1];
    return ext ? ext : '';
};
exports.getExtensionDocument = getExtensionDocument;
const saveDocument = (mimeType, content, documentName) => {
    let fileExtension = '';
    switch (mimeType.toLowerCase()) {
        case 'image/svg+xml':
            fileExtension = '.svg';
            break;
    }
    const blob = new Blob([content], { type: mimeType });
    const link = document.createElement('a');
    if (documentName) {
        const date = new Date();
        const dateStringify = (0, moment_1.default)().format('yyyyMMDD@HHmm');
        link.download = `${documentName || 'export'}_${dateStringify}${(0, exports.getExtensionDocument)(documentName) || fileExtension}`;
    }
    link.href = window.URL.createObjectURL(blob);
    link.click();
};
exports.saveDocument = saveDocument;
const makeBlob = (dataURI) => {
    const BASE64_MARKER = ';base64,';
    const parts = dataURI.split(BASE64_MARKER);
    const contentType = parts[0].split(':')[1];
    const raw = window.atob(parts[1]);
    const rawLength = raw.length;
    const uInt8Array = new Uint8Array(rawLength);
    for (let i = 0; i < rawLength; ++i) {
        uInt8Array[i] = raw.charCodeAt(i);
    }
    return new Blob([uInt8Array], { type: contentType });
};
exports.makeBlob = makeBlob;
const openDocument = (documentEntry) => {
    const blob = (0, exports.makeBlob)(documentEntry.base64Stream);
    window.open(URL.createObjectURL(blob));
};
exports.openDocument = openDocument;
//# sourceMappingURL=document.js.map