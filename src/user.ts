import type {ModuleDescriptor, ModuleGroup} from './module'
import type {ModulePermission, PermissionLevel} from './permission'
import type { SessionState } from './session'

export type UserDataService = {
  getUser(): Promise<User>
}

export type User = {
uniqueIdentifier?: string

accountType: string
samAccountName: string
expiryDate?: Date
isDisabled: boolean
periodicalPasswordResetRequired: boolean

domain?: string
userName?: string
email?: string

firstName?: string
lastName?: string
fullName?: string
displayName?: string

isAuthenticated: boolean
isAdmin: boolean
isServiceUser: boolean
isInternalUser: boolean
isDeveloper: boolean
isDebugger: boolean

internalPhone?: string
supplierId?: number
supplierName?: string
employeeId?: number
description?: string
groups?: string

permissions: Array<ModulePermission>
allowedModuleGroups: Array<ModuleGroup>
allowedModules: Array<ModuleDescriptor>

twoFactorAuthEnabled: boolean
twoFactorAuthenticated: boolean
twoFactorAuthTimeout?: number
twoFactorAuthCode?: string
twoFactorAuthExpireDate?: Date

sessionState?: SessionState
sessionExpireDate?: Date

createdByUser?: string
creationDate?: Date
modifiedByUser?: string
modificationDate?: Date

langCode?:string
}


export const DefaultUser: User = {
  isAuthenticated: false,
  isAdmin: false,
  isServiceUser: false,
  isInternalUser: false,
  isDeveloper: false,
  isDebugger: false,
  allowedModules: [],
  allowedModuleGroups: [],
  permissions: [],
  twoFactorAuthEnabled: false,
  twoFactorAuthenticated: false,
  accountType: '',
  samAccountName: '',
  isDisabled: false,
  periodicalPasswordResetRequired: false,
}
