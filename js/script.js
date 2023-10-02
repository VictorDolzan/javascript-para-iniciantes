import SmoothScroll from './modules/scroll-suave.js';
import Accordion from './modules/init-accordion.js';
import TabNav from './modules/init-tab-nav.js';
import Modal from './modules/modal.js';
import Tooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import fetchAnimais from "./modules/fetch-animais.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";
import animaScroll from './modules/scroll-animacao.js';

const scrollSuave = new SmoothScroll('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const tooltip = new Tooltip('[data-toolTip]');
tooltip.init();

initDropdownMenu();
initMenuMobile();
initFuncionamento();
await fetchAnimais("../animaisapi.json", '.numeros-grid');
initFetchBitcoin();
animaScroll();
