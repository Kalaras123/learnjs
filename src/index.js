const common = require('./common.js');
common.hello();
import esmodule from './esmodule.js';
esmodule.hello();
console.log("Hei-hei, HMR!");
import './style.scss';