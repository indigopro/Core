import type { PermissionLevel } from './permission'

export type SettingLevel = 'Portal' | 'Module' | 'User'

export type Setting = {
  contextLevel: SettingLevel
  userUniqueIdentifier?: string // used when user sets the private setting
  moduleName?: string // no set this property because the setting depends from AvailableApps assign process
  permissionLevel: PermissionLevel // determines which variable (see below in the object) level the user can view and modify
  description: string
  readonly: boolean // use true when the setting depends directly from GUI of module
  valueKey?: string // no set this property because the setting depends from AvailableApps assign process
  valueType: string
  defaultValue: string
}
