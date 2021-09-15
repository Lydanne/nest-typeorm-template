export default () => {
  return {
    port: readEnvVar('PORT', 3000),
    // more config ...
  };
};
