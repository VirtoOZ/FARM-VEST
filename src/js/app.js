// Включить/выключить FLS (Full Logging System) (в работе)
window['FLS'] = true;

// Подключение основного файла стилей
import "../scss/style.scss";

import * as flsFunctions from "./files/functions.js";

//<Бургер>=================================
flsFunctions.menuInit();
/* Форматирование чисел */

//<спойлеры>=================================
flsFunctions.spollers();

//<Параллакс мышь>=================================
import './libs/parallax-mouse.js'

//<формы>=================================
import * as flsForms from "./files/forms/forms.js";

//<Отправка формы>=================================
flsForms.formSubmit();

//<Параллакс>=================================
import './libs/parallax.js'

//<Скролл>=================================
import * as flsScroll from "./files/scroll/scroll.js";

//<Плавная навигация>=================================
flsScroll.pageNavigation();

//<Хеддер при прокрутке>=================================
flsScroll.headerScroll();

//<Остальной код>=================================
import "./files/script.js";
//<>=================================