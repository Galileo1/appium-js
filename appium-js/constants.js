'use strict';

// Constants:
const COMPONENTS = 'components';
const FEATURES = 'features';
const MOCK_DATA = 'mock-data';
const STEP_DEFINITIONS = 'step-definitions';

// Utilities:
import { join } from 'path';

export default {
    COMPONENTS,
    FEATURES,
    MOCK_DATA,
    STEP_DEFINITIONS,

    DIRECTORIES: [COMPONENTS, FEATURES, MOCK_DATA, STEP_DEFINITIONS],
    EXTENSIONS: {
        [COMPONENTS]: '.component.js',
        [FEATURES]: '.feature',
        [MOCK_DATA]: '.mock.json',
        [STEP_DEFINITIONS]: '.step.js'
    },

    SUPPORT_DIR: 'support',
    REPORT_DIR: 'report',

    WORLD_SOURCE_FILE_PATH: join('base-file-sources', 'world.js'),
    WORLD_FILE_NAME: 'world.js',

    HOOKS_SOURCE_FILE_PATH: join('base-file-sources', 'hooks.js'),
    HOOKS_FILE_NAME: 'hooks.js',

    PROTRACTOR_CONF_SOURCE_FILE_PATH: join('base-file-sources', 'protractor.conf.js'),
    PROTRACTOR_CONF_FILE_NAME: 'protractor.conf.js',

    GET_INSTALLED_DEPENDENCIES_COMMAND: 'npm ls --depth 0',

    INSTALL_DEPENDENCIES_COMMAND: 'npm install --save-dev --save-exact ',

    SELENIUM_UPDATE_COMMAND: `node ${join('node_modules', 'protractor', 'bin', 'webdriver-manager')} update`,

    APPIUM_START_COMMAND: `${join('node_modules', 'appium', 'build', 'lib', 'main')}`,
    APPIUM_DOCTOR_COMMAND: `${join('node_modules', 'appium-doctor')}`,
    APPIUM_ADDRESS: `--address '127.0.0.0'`,
    APPIUM_PORT: `--port 4723`,
    APPIUM_START_COMMAND2: `node ${join('node_modules', 'appium', 'build', 'lib', 'main')} --address '127.0.0.1' --port 4723`,

    FEATURE_NEWLINE: /\n/g,

    ASSERTER_TIMEOUT: 10000,
    ASSETER_POLL_FREQ: 100,
    IMPLICT_TIMEOUT: 10000,

    DEFAULT_PORT: 4000
};
