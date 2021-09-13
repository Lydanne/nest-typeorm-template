export const __PROD__ = process.env.NODE_ENV === 'prod'; // 是否为生产环境
export const __DEV__ = process.env.NODE_ENV === 'dev'; // 是否为预发环境
export const __TEST__ = process.env.NODE_ENV === 'test'; // 是否为测试环境
export const __LOCAL__ = !__TEST__ && !__PROD__ && !__DEV__; // 是否为本地环境

export const env = () =>
  ({ prod: 'prod', dev: 'dev', test: 'test' }[process.env.NODE_ENV] ?? 'local');

export default () => {
  return {
    port: parseInt(process.env.PORT, 10) || 3000,
  };
};
