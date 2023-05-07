const setEnv = () => {
  const fs = require('fs');
  const writeFile = fs.writeFile;
  const targetPath = './src/environments/environment.ts';
  const appVersion = require('./package.json').version;
  require('dotenv').config();

  const envConfigFile = `export const environment = {
  production: true,
  apiUrl: '${process.env['API_URL']}',
  appVersion: '${appVersion}',
};
`;
  console.log(
    'The file `environment.ts` will be written with the following content: \n'
  );
  writeFile(targetPath, envConfigFile, (err: any) => {
    if (err) {
      console.error(err);
      throw err;
    } else {
      console.log(
        `Angular environment.ts file generated correctly at ${targetPath} \n`
      );
    }
  });
};

setEnv();
