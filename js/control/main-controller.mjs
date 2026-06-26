var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _MainController_instances, _a, _MainController_ROWS, _MainController_COLUMNS, _MainController_BORDERS, _MainController_randomUtils, _MainController_utils, _MainController_player, _MainController_addListenners, _MainController_eventKeyDown, _MainController_isFirstCell, _MainController_isLastCell, _MainController_isFirstRow, _MainController_isLastRow, _MainController_isFirstColumn, _MainController_isLastColumn, _MainController_rand;
import { CssClasses, EventKeys } from "../constants/constants.mjs";
import { Player } from "../model/player.mjs";
import { RandomUtils } from "../utils/random-utils.mjs";
import { Utils } from "../utils/utils.mjs";
export class MainController {
    constructor() {
        _MainController_instances.add(this);
        _MainController_randomUtils.set(this, new RandomUtils());
        _MainController_utils.set(this, new Utils());
        _MainController_player.set(this, null);
    }
    start() {
        const table = document.createElement("table");
        for (let i = 0; i < __classPrivateFieldGet(_a, _a, "f", _MainController_ROWS); i++) {
            const row = table.insertRow(i);
            for (let j = 0; j < __classPrivateFieldGet(_a, _a, "f", _MainController_COLUMNS); j++) {
                const cell = row.insertCell(j);
                if (__classPrivateFieldGet(this, _MainController_instances, "m", _MainController_isFirstRow).call(this, i)) {
                    cell.classList.add(CssClasses.TOP);
                }
                else if (__classPrivateFieldGet(this, _MainController_instances, "m", _MainController_isLastRow).call(this, i)) {
                    cell.classList.add(CssClasses.BOTTOM);
                }
                if (!__classPrivateFieldGet(this, _MainController_instances, "m", _MainController_isFirstRow).call(this, i) && __classPrivateFieldGet(this, _MainController_instances, "m", _MainController_isFirstColumn).call(this, j)) {
                    cell.classList.add(CssClasses.LEFT);
                }
                else if (!__classPrivateFieldGet(this, _MainController_instances, "m", _MainController_isLastRow).call(this, i) && __classPrivateFieldGet(this, _MainController_instances, "m", _MainController_isLastColumn).call(this, j)) {
                    cell.classList.add(CssClasses.RIGHT);
                }
                if (__classPrivateFieldGet(this, _MainController_instances, "m", _MainController_rand).call(this)) {
                    cell.classList.add(CssClasses.TOP);
                }
                if (__classPrivateFieldGet(this, _MainController_instances, "m", _MainController_rand).call(this)) {
                    cell.classList.add(CssClasses.BOTTOM);
                }
                if (__classPrivateFieldGet(this, _MainController_instances, "m", _MainController_rand).call(this) && !(__classPrivateFieldGet(this, _MainController_instances, "m", _MainController_isFirstRow).call(this, i) && __classPrivateFieldGet(this, _MainController_instances, "m", _MainController_isFirstColumn).call(this, j))) {
                    cell.classList.add(CssClasses.LEFT);
                }
                if (__classPrivateFieldGet(this, _MainController_instances, "m", _MainController_rand).call(this) && !(__classPrivateFieldGet(this, _MainController_instances, "m", _MainController_isLastRow).call(this, i) && __classPrivateFieldGet(this, _MainController_instances, "m", _MainController_isLastColumn).call(this, j))) {
                    cell.classList.add(CssClasses.RIGHT);
                }
                if (__classPrivateFieldGet(this, _MainController_utils, "f").containsAll(cell.classList, __classPrivateFieldGet(_a, _a, "f", _MainController_BORDERS))) {
                    if (__classPrivateFieldGet(this, _MainController_instances, "m", _MainController_rand).call(this)) {
                        cell.classList.remove(CssClasses.TOP);
                    }
                    if (__classPrivateFieldGet(this, _MainController_instances, "m", _MainController_rand).call(this)) {
                        cell.classList.remove(CssClasses.RIGHT);
                    }
                    if (__classPrivateFieldGet(this, _MainController_instances, "m", _MainController_rand).call(this)) {
                        cell.classList.remove(CssClasses.BOTTOM);
                    }
                    if (__classPrivateFieldGet(this, _MainController_instances, "m", _MainController_rand).call(this)) {
                        cell.classList.remove(CssClasses.LEFT);
                    }
                }
            }
        }
        table.rows[0].cells[0].classList.add(CssClasses.NO_LEFT);
        table.rows[__classPrivateFieldGet(_a, _a, "f", _MainController_ROWS) - 1].cells[__classPrivateFieldGet(_a, _a, "f", _MainController_COLUMNS) - 1].classList.add(CssClasses.NO_RIGHT);
        const lab = document.getElementById("lab");
        if (lab) {
            lab.innerText = "";
            lab.appendChild(table);
        }
        __classPrivateFieldSet(this, _MainController_player, new Player(table, 0, 0), "f");
        __classPrivateFieldGet(this, _MainController_instances, "m", _MainController_addListenners).call(this);
    }
}
_a = MainController, _MainController_randomUtils = new WeakMap(), _MainController_utils = new WeakMap(), _MainController_player = new WeakMap(), _MainController_instances = new WeakSet(), _MainController_addListenners = function _MainController_addListenners() {
    window.addEventListener("keydown", (event) => __classPrivateFieldGet(this, _MainController_instances, "m", _MainController_eventKeyDown).call(this, event));
}, _MainController_eventKeyDown = function _MainController_eventKeyDown(event) {
    if (__classPrivateFieldGet(this, _MainController_player, "f")) {
        switch (event.key) {
            case EventKeys.ArrowUp:
                event.preventDefault();
                __classPrivateFieldGet(this, _MainController_player, "f").moveUp();
                break;
            case EventKeys.ArrowRight:
                event.preventDefault();
                __classPrivateFieldGet(this, _MainController_player, "f").moveRight();
                break;
            case EventKeys.ArrowDown:
                event.preventDefault();
                __classPrivateFieldGet(this, _MainController_player, "f").moveDown();
                break;
            case EventKeys.ArrowLeft:
                event.preventDefault();
                __classPrivateFieldGet(this, _MainController_player, "f").moveLeft();
                break;
            default:
                return;
        }
    }
}, _MainController_isFirstCell = function _MainController_isFirstCell(i, j) {
    return __classPrivateFieldGet(this, _MainController_instances, "m", _MainController_isFirstRow).call(this, i) && __classPrivateFieldGet(this, _MainController_instances, "m", _MainController_isFirstColumn).call(this, j);
}, _MainController_isLastCell = function _MainController_isLastCell(i, j) {
    return __classPrivateFieldGet(this, _MainController_instances, "m", _MainController_isLastRow).call(this, i) && __classPrivateFieldGet(this, _MainController_instances, "m", _MainController_isLastColumn).call(this, j);
}, _MainController_isFirstRow = function _MainController_isFirstRow(i) {
    return i == 0;
}, _MainController_isLastRow = function _MainController_isLastRow(i) {
    return i == __classPrivateFieldGet(_a, _a, "f", _MainController_ROWS) - 1;
}, _MainController_isFirstColumn = function _MainController_isFirstColumn(j) {
    return j == 0;
}, _MainController_isLastColumn = function _MainController_isLastColumn(j) {
    return j == __classPrivateFieldGet(_a, _a, "f", _MainController_COLUMNS) - 1;
}, _MainController_rand = function _MainController_rand() {
    return __classPrivateFieldGet(this, _MainController_randomUtils, "f").randBetween(1, 4) == 1;
};
_MainController_ROWS = { value: 16 };
_MainController_COLUMNS = { value: 24 };
_MainController_BORDERS = { value: [CssClasses.TOP, CssClasses.RIGHT, CssClasses.BOTTOM, CssClasses.LEFT] };
