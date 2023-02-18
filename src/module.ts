import type { Authorization } from './authentication'
import {PermissionLevel} from './permission'
import type {Setting} from './setting'

export type ContextType = 'Module' | 'ModuleGroup'

export type ReleaseType = 'Deprecated' | 'Alpha' | 'Beta' | 'Release'

export type Visibility = 'Visible' | 'Hidden'

export type ModuleCatalogue = { [key: string]: { component: any } }

export type Tile = {
  caption: string
  color: string
  icon: string
}

export type ModuleDescriptor = {
  uniqueIdentifier: string
  authorization: Authorization
  minimumAccessLevel: PermissionLevel
  sequence: number
  name: string
  fullName: string | null
  displayName: string | null
  description: string | null
  version: string
  release: ReleaseType
  tile: Tile | null
  group: string
  route: string
  redirectLink: string
  userGuideLink: string | null
  isPublished: boolean
  isHidden: boolean
  isRedirectLink: boolean
  hasSettings: boolean
  settings: {[key: string]: Setting}
}

export const DefaultModule: ModuleDescriptor = {
  uniqueIdentifier: '',
  authorization: 'Authorize',
  minimumAccessLevel: PermissionLevel.Guest,
  sequence: 0,
  name: '',
  fullName: null,
  displayName: null,
  description: null,
  version: '1.0',
  release: 'Alpha',
  tile: null,
  group: '',
  route: '',
  redirectLink: '',
  userGuideLink: null,
  isPublished: false,
  isHidden: false,
  isRedirectLink: false,
  hasSettings: false,
  settings: {},
}

export type ModuleGroup = {
  sequence: number
  name: string
  displayName: string
  shortName: string
}

export const moduleNormalization = (modules: Array<any>) => {
  return modules.map((o) => {
    const module: ModuleDescriptor = {
      uniqueIdentifier: o.uniqueIdentifier,
      authorization: (o.authorization as Authorization) || 'Authorize',
      group: o.moduleGroupName,
      route: o.route || `/${o.name}`,
      redirectLink: o.redirectLink,
      name: o.name,
      displayName: o.displayName || o.name,
      fullName: o.fullName || o.displayName,
      description: o.description,
      version: o.version || '1.0',
      release: (o.release as ReleaseType) || 'Alpha',
      tile: {
        caption: o.tileCaption || o.displayName || o.fullName,
        color: o.tileColor,
        icon: o.icon,
      },
      userGuideLink: o.userGuideLink,
      isPublished: o.isPublished,
      isHidden: o.isHidden,
      isRedirectLink: o.isRedirectLink,
      sequence: o.sequence || 0,
      hasSettings: false,
      settings: {},
      minimumAccessLevel: PermissionLevel[o.minimumAccessLevel as keyof typeof PermissionLevel] || PermissionLevel.Guest,
    }

    return module
  })
}
