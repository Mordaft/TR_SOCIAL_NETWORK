import XM_Tooltip from '../vendor/xm_tooltip';
import XM_Popup from '../vendor/xm_popup';
import XM_ProgressBar from '../vendor/xm_progressBar';
import XM_Dropdown from '../vendor/xm_dropdown';
import XM_Hexagon from '../vendor/xm_hexagon';
import XM_Tab from '../vendor/xm_tab';
import XM_Accordion from '../vendor/xm_accordion';

const ChartJS = require('chart.js');

import { tns } from 'tiny-slider/src/tiny-slider';

const existsInDOM = function (selector) {
  return document.querySelectorAll(selector).length;
};

const plugins = {
  createTab: function (options) {
    if (existsInDOM(options.triggers) && existsInDOM(options.elements)) {
      return new XM_Tab(options);
    }
  },
  createHexagon: function (options) {
    if (existsInDOM(options.container) || typeof options.containerElement !== 'undefined') {
      return new XM_Hexagon(options);
    }
  },
  createProgressBar: function (options) {
    if (existsInDOM(options.container)) {
      return new XM_ProgressBar(options);
    }
  },
  createDropdown: function (options) {
    if (((existsInDOM(options.container) || typeof options.containerElement !== 'undefined') && options.controlToggle) || ((existsInDOM(options.trigger) || typeof options.triggerElement !== 'undefined') && (existsInDOM(options.container) || typeof options.containerElement !== 'undefined'))) {
      return new XM_Dropdown(options);
    }
  },
  createTooltip: function (options) {
    if (existsInDOM(options.container)) {
      return new XM_Tooltip(options);
    }
  },
  createSlider: function (options) {
    if (existsInDOM(options.container)) {
      return tns(options);
    }
  },
  createPopup: function (options) {
    if (existsInDOM(options.container) && existsInDOM(options.trigger)) {
      return new XM_Popup(options);
    }
  },
  createAccordion: function (options) {
    if (existsInDOM(options.triggerSelector) && existsInDOM(options.contentSelector)) {
      return new XM_Accordion(options);
    }
  },
  createChart: function (ctx, options) {
    return new ChartJS(ctx, options);
  }
};

module.exports = plugins;