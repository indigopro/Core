import moment from 'moment'

export type DocumentDataService = {
  getDocument: (path: string) => Promise<DocumentEntry>
  getDocuments: (path: string, includeStream: boolean, includeSubFolder: boolean, includePhysicalPath: boolean) => Promise<Array<FolderEntry | DocumentEntry>>
  saveDocument: (path: string, fileName: string, base64: string) => Promise<boolean>
  documentExists: (path: string) => Promise<boolean>
  deleteDocument: (path: string) => Promise<boolean>
}

export const getExtensionDocument = (name: string) => {
  const re: any = /(?:\.([^.]+))?$/
  const ext = re.exec(name)[1]
  return ext ? ext : ''
}

export type Entry = {
  type: 'Document' | 'Folder'
  name?: string
  path: string
}

export type DocumentEntry = Entry & {
  extension?: string
  mimeType?: string
  lastModifiedDate?: any
  size?: number
  url?: string | null
  base64Stream?: string | null
}

export type FolderEntry = {
  entries?: Array<FolderEntry | DocumentEntry>
}

export interface UploadInfo {
  label?: string
  onLoad?(files: Array<DocumentEntry>): void
  style?: string | undefined
  accept?: string | undefined
  multiple?: boolean
  onError?: (message: string) => void
}

export const saveDocument = (mimeType: string, content: string, documentName?: string) => {
  let fileExtension = ''
  switch (mimeType.toLowerCase()) {
    case 'image/svg+xml':
      fileExtension = '.svg'
      break
  }

  const blob = new Blob([content], {type: mimeType})

  const link = document.createElement('a')
  if (documentName) {
    const date = new Date()
    const dateStringify = moment().format('yyyyMMDD@HHmm')
    link.download = `${documentName || 'export'}_${dateStringify}${getExtensionDocument(documentName) || fileExtension}`
  }
  link.href = window.URL.createObjectURL(blob)
  link.click()
}

export const makeBlob = (dataURI: string) => {
  const BASE64_MARKER = ';base64,'
  const parts = dataURI.split(BASE64_MARKER)
  const contentType = parts[0].split(':')[1]
  const raw = window.atob(parts[1])
  const rawLength = raw.length
  const uInt8Array = new Uint8Array(rawLength)

  for (let i = 0; i < rawLength; ++i) {
    uInt8Array[i] = raw.charCodeAt(i)
  }

  return new Blob([uInt8Array], {type: contentType})
}

export const openDocument = (documentEntry:DocumentEntry): void => {
  const blob = makeBlob(documentEntry.base64Stream!) 
  window.open( URL.createObjectURL(blob))
}
