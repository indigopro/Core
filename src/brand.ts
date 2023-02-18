
export type Brand = {
  name: string;
  logo: any;
  monogram: any;
  symbol: any;
  emblem: any;
  templates?: { [key: string]: string; };
}

export const DefaultBrand: Brand = {
  name: '',
  logo: null,
  monogram: null,
  symbol: null,
  emblem: null,
}

