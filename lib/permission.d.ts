import type { ModuleDescriptor } from "./module";
import type { User } from "./user";
export declare enum PermissionLevel {
    Admin = 1,
    Supervisor = 2,
    Manager = 3,
    Leader = 4,
    Maker = 5,
    Inspector = 6,
    Reviewer = 7,
    Editor = 8,
    Contributor = 9,
    Requestor = 10,
    Guest = 98,
    None = 99
}
export declare enum PermissionBehavior {
    Access = 1,
    Visualization = 2
}
export type ModulePermission = {
    module: string;
    behavior: PermissionBehavior;
    level: PermissionLevel;
};
export type Permission = {
    isAdmin: boolean;
    isSupervisor: boolean;
    isManager: boolean;
    isLeader: boolean;
    isMaker: boolean;
    isInspector: boolean;
    isReviewer: boolean;
    isEditor: boolean;
    isContributor: boolean;
    isRequestor: boolean;
    isGuest: boolean;
    isNone: boolean;
};
export declare const hasPermission: (user: User, module: ModuleDescriptor, level: PermissionLevel) => boolean;
