export type Brand = {
    name: string;
    logo: any;
    monogram: any;
    symbol: any;
    emblem: any;
    templates?: {
        [key: string]: string;
    };
};
export declare const DefaultBrand: Brand;
