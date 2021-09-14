declare const module: any;
declare const global: any;

declare type Env = 'local' | 'dev' | 'prod' | 'test';
declare const env: () => Env;
declare const __PROD__: boolean;
declare const __DEV__: boolean;
declare const __TEST__: boolean;
declare const __LOCAL__: boolean;
