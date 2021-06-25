module.exports = function (api) {
  const isProd = api.env('production');
  if (isProd) {
    console.log(
      '\n///////////////////////////////////////////////////////////////////\n' +
        "NODE_ENV is '" +
        api.env() +
        "'. babel.config.js is loaded in prod mode.\n" +
        '///////////////////////////////////////////////////////////////////\n',
    );
  } else {
    console.log(
      '\n///////////////////////////////////////////////////////////////////\n' +
        "NODE_ENV is '" +
        api.env() +
        "'. babel.config.js is loaded in dev mode.\n" +
        '///////////////////////////////////////////////////////////////////\n',
    );
  }

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: { chrome: 80 },
      },
    ],
    ['@babel/preset-react', { runtime: 'automatic' }],
    '@babel/preset-typescript',
  ];
  const plugins = [
    [
      'babel-plugin-styled-components',
      {
        ssr: true,
        minify: isProd,
        pure: isProd,
        transpileTemplateLiterals: true,
        fileName: !isProd,
        displayName: !isProd,
      },
    ],
  ];

  return {
    presets,
    plugins,
  };
};
