import Tooltip from './ui-components/_tooltip';
import Dropdown from './ui-components/_dropdown';
import Tabs from './ui-components/_tabs.js';

const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init();

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const instance = new Dropdown(dropdown);
  instance.init();
})

const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();