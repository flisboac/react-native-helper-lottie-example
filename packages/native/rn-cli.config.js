const { metroConfigHelper } = require('react-native-monorepo-helper');
const path = require('path');

const projectRoot = __dirname;
const monorepoRoot = path.resolve(projectRoot, "../../");

const defaultConfig = {
    projectRoot,
    watchFolders: [
        monorepoRoot,
    ],
};

const helperConfig = metroConfigHelper(projectRoot)
    // .defaultConfig(defaultConfig)
    .generate();

console.log(helperConfig);
module.exports = helperConfig;
