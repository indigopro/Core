export type TenantDataService = {
    getTenant(): Promise<Tenant>;
};
export type Tenant = {
    uniqueIdentifier?: string;
    theme: string;
    name: string;
    domains: string;
    fullName: string | null;
    displayName: string | null;
    description: string | null;
    homeModule: string | null;
    sideMenuEnable: boolean;
    menuLauncherEnable: boolean;
    logo: string;
    monogram: string;
    symbol: string;
    emblem: string;
    welcomeSplash: string;
    tenantDefault: boolean;
    langCode: string;
};
export declare const DefaultTenant: Tenant;
