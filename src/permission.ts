import type { ModuleDescriptor } from './module'
import type { User } from './user'

export enum PermissionLevel {
  Admin = 1, // Manage everything
  Supervisor = 2,
  Manager = 3, // Manage most aspects of the part of site
  Leader = 4,
  Maker = 5, // Write important content
  Inspector = 6,
  Reviewer = 7,
  Editor = 8, // Scheduling and managing content
  Contributor = 9,
  Requestor = 10,
  Guest = 98,
  None = 99,
}

export enum PermissionBehavior {
  Access = 1,
  Visualization = 2,
}

export type ModulePermission = {
  module: string
  behavior: PermissionBehavior
  level: PermissionLevel
}

export type Permission = {
  isAdmin: boolean
  isSupervisor: boolean
  isManager: boolean
  isLeader: boolean
  isMaker: boolean
  isInspector: boolean
  isReviewer: boolean
  isEditor: boolean
  isContributor: boolean
  isRequestor: boolean
  isGuest: boolean
  isNone: boolean
}

export const hasPermission = (user: User, module: ModuleDescriptor, level: PermissionLevel): boolean => {
  if (user.isAdmin) {
    return true
  } else {
    const permission = user.permissions.find((permission: ModulePermission) => permission.module === module.uniqueIdentifier)
    return permission ? level >= permission.level : false
  }
}
