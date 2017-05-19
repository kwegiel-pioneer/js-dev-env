//ES5
//var chalk = require('chalk');

//ES6 - use babel to transpile
import chalk from 'chalk';

//disable eslint no-console for just this line
console.log(chalk.green('Starting app in dev mode...')); // eslint-disable-line no-console
