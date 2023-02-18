import type { PermissionLevel } from './permission';
export type SettingLevel = 'Portal' | 'Module' | 'User';
export type Setting = {
    contextLevel: SettingLevel;
    userUniqueIdentifier?: string;
    moduleName?: string;
    permissionLevel: PermissionLevel;
    description: string;
    readonly: boolean;
    valueKey?: string;
    valueType: string;
    defaultValue: string;
};
