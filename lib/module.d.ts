import type { Authorization } from './authentication';
import { PermissionLevel } from './permission';
import type { Setting } from './setting';
export type ContextType = 'Module' | 'ModuleGroup';
export type ReleaseType = 'Deprecated' | 'Alpha' | 'Beta' | 'Release';
export type Visibility = 'Visible' | 'Hidden';
export type ModuleCatalogue = {
    [key: string]: {
        component: any;
    };
};
export type Tile = {
    caption: string;
    color: string;
    icon: string;
};
export type ModuleDescriptor = {
    uniqueIdentifier: string;
    authorization: Authorization;
    minimumAccessLevel: PermissionLevel;
    sequence: number;
    name: string;
    fullName: string | null;
    displayName: string | null;
    description: string | null;
    version: string;
    release: ReleaseType;
    tile: Tile | null;
    group: string;
    route: string;
    redirectLink: string;
    userGuideLink: string | null;
    isPublished: boolean;
    isHidden: boolean;
    isRedirectLink: boolean;
    hasSettings: boolean;
    settings: {
        [key: string]: Setting;
    };
};
export declare const DefaultModule: ModuleDescriptor;
export type ModuleGroup = {
    sequence: number;
    name: string;
    displayName: string;
    shortName: string;
};
export declare const moduleNormalization: (modules: Array<any>) => ModuleDescriptor[];
