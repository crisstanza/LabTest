var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _MainController_instances, _MainController_ROWS, _MainController_COLUMNS, _MainController_TOP, _MainController_RIGHT, _MainController_BOTTOM, _MainController_LEFT, _MainController_firstRow, _MainController_lastRow, _MainController_firstColumn, _MainController_lastColumn, _MainController_rand, _MainController_randBetween;
export class MainController {
    constructor() {
        _MainController_instances.add(this);
        _MainController_ROWS.set(this, 16);
        _MainController_COLUMNS.set(this, 32);
        _MainController_TOP.set(this, "top");
        _MainController_RIGHT.set(this, "right");
        _MainController_BOTTOM.set(this, "bottom");
        _MainController_LEFT.set(this, "left");
    }
    start() {
        const table = document.createElement("table");
        for (let i = 0; i < __classPrivateFieldGet(this, _MainController_ROWS, "f"); i++) {
            const row = table.insertRow(i);
            for (let j = 0; j < __classPrivateFieldGet(this, _MainController_COLUMNS, "f"); j++) {
                const cell = row.insertCell(j);
                if (__classPrivateFieldGet(this, _MainController_instances, "m", _MainController_firstRow).call(this, i)) {
                    cell.classList.add(__classPrivateFieldGet(this, _MainController_TOP, "f"));
                }
                else if (__classPrivateFieldGet(this, _MainController_instances, "m", _MainController_lastRow).call(this, i)) {
                    cell.classList.add(__classPrivateFieldGet(this, _MainController_BOTTOM, "f"));
                }
                if (!__classPrivateFieldGet(this, _MainController_instances, "m", _MainController_firstRow).call(this, i) && __classPrivateFieldGet(this, _MainController_instances, "m", _MainController_firstColumn).call(this, j)) {
                    cell.classList.add(__classPrivateFieldGet(this, _MainController_LEFT, "f"));
                }
                else if (!__classPrivateFieldGet(this, _MainController_instances, "m", _MainController_lastRow).call(this, i) && __classPrivateFieldGet(this, _MainController_instances, "m", _MainController_lastColumn).call(this, j)) {
                    cell.classList.add(__classPrivateFieldGet(this, _MainController_RIGHT, "f"));
                }
                if (__classPrivateFieldGet(this, _MainController_instances, "m", _MainController_rand).call(this)) {
                    cell.classList.add(__classPrivateFieldGet(this, _MainController_TOP, "f"));
                }
                if (__classPrivateFieldGet(this, _MainController_instances, "m", _MainController_rand).call(this)) {
                    cell.classList.add(__classPrivateFieldGet(this, _MainController_BOTTOM, "f"));
                }
                if (__classPrivateFieldGet(this, _MainController_instances, "m", _MainController_rand).call(this) && !(__classPrivateFieldGet(this, _MainController_instances, "m", _MainController_firstRow).call(this, i) && __classPrivateFieldGet(this, _MainController_instances, "m", _MainController_firstColumn).call(this, j))) {
                    cell.classList.add(__classPrivateFieldGet(this, _MainController_LEFT, "f"));
                }
                if (__classPrivateFieldGet(this, _MainController_instances, "m", _MainController_rand).call(this) && !(__classPrivateFieldGet(this, _MainController_instances, "m", _MainController_lastRow).call(this, i) && __classPrivateFieldGet(this, _MainController_instances, "m", _MainController_lastColumn).call(this, j))) {
                    cell.classList.add(__classPrivateFieldGet(this, _MainController_RIGHT, "f"));
                }
                if (cell.classList.length == 4) {
                    if (__classPrivateFieldGet(this, _MainController_instances, "m", _MainController_rand).call(this)) {
                        cell.classList.remove(__classPrivateFieldGet(this, _MainController_BOTTOM, "f"));
                    }
                    if (__classPrivateFieldGet(this, _MainController_instances, "m", _MainController_rand).call(this)) {
                        cell.classList.remove(__classPrivateFieldGet(this, _MainController_TOP, "f"));
                    }
                }
            }
        }
        const lab = document.getElementById("lab");
        if (lab) {
            lab.innerText = "";
            lab.appendChild(table);
        }
    }
}
_MainController_ROWS = new WeakMap(), _MainController_COLUMNS = new WeakMap(), _MainController_TOP = new WeakMap(), _MainController_RIGHT = new WeakMap(), _MainController_BOTTOM = new WeakMap(), _MainController_LEFT = new WeakMap(), _MainController_instances = new WeakSet(), _MainController_firstRow = function _MainController_firstRow(i) {
    return i == 0;
}, _MainController_lastRow = function _MainController_lastRow(i) {
    return i == __classPrivateFieldGet(this, _MainController_ROWS, "f") - 1;
}, _MainController_firstColumn = function _MainController_firstColumn(j) {
    return j == 0;
}, _MainController_lastColumn = function _MainController_lastColumn(j) {
    return j == __classPrivateFieldGet(this, _MainController_COLUMNS, "f") - 1;
}, _MainController_rand = function _MainController_rand() {
    return __classPrivateFieldGet(this, _MainController_instances, "m", _MainController_randBetween).call(this, 1, 4) == 1;
}, _MainController_randBetween = function _MainController_randBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
