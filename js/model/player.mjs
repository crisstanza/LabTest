var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Player_instances, _a, _Player_PLAYER, _Player_FLIP, _Player_table, _Player_i, _Player_j, _Player_showPlayer, _Player_removePlayer, _Player_isFlip, _Player_flipPlayer, _Player_canMoveToUp, _Player_canMoveToRight, _Player_canMoveToDown, _Player_canMoveToLeft, _Player_hasTopWall, _Player_hasRightWall, _Player_hasBottomWall, _Player_hasLeftWall, _Player_hasBelowTopWall, _Player_hasPreviousRightWall, _Player_hasAboveBottomWall, _Player_hasNextLeftWall, _Player_isInFirstRow, _Player_isInLastRow, _Player_isInFirstColumn, _Player_isInLastColumn, _Player_refreshPlayer;
import { MainController } from "../control/main-controller.mjs";
export class Player {
    constructor(table, i, j) {
        _Player_instances.add(this);
        _Player_table.set(this, void 0);
        _Player_i.set(this, void 0);
        _Player_j.set(this, void 0);
        __classPrivateFieldSet(this, _Player_table, table, "f");
        __classPrivateFieldSet(this, _Player_i, i, "f");
        __classPrivateFieldSet(this, _Player_j, j, "f");
        __classPrivateFieldGet(this, _Player_instances, "m", _Player_showPlayer).call(this);
    }
    moveUp() {
        if (__classPrivateFieldGet(this, _Player_instances, "m", _Player_canMoveToUp).call(this)) {
            __classPrivateFieldGet(this, _Player_instances, "m", _Player_refreshPlayer).call(this, () => { var _b, _c; return __classPrivateFieldSet(this, _Player_i, (_c = __classPrivateFieldGet(this, _Player_i, "f"), _b = _c--, _c), "f"), _b; });
        }
    }
    moveRight() {
        if (__classPrivateFieldGet(this, _Player_instances, "m", _Player_canMoveToRight).call(this)) {
            __classPrivateFieldGet(this, _Player_instances, "m", _Player_refreshPlayer).call(this, () => { var _b, _c; return __classPrivateFieldSet(this, _Player_j, (_c = __classPrivateFieldGet(this, _Player_j, "f"), _b = _c++, _c), "f"), _b; });
        }
    }
    moveLeft() {
        if (__classPrivateFieldGet(this, _Player_instances, "m", _Player_canMoveToLeft).call(this)) {
            __classPrivateFieldGet(this, _Player_instances, "m", _Player_refreshPlayer).call(this, () => { var _b, _c; return __classPrivateFieldSet(this, _Player_j, (_c = __classPrivateFieldGet(this, _Player_j, "f"), _b = _c--, _c), "f"), _b; });
        }
    }
    moveDown() {
        if (__classPrivateFieldGet(this, _Player_instances, "m", _Player_canMoveToDown).call(this)) {
            __classPrivateFieldGet(this, _Player_instances, "m", _Player_refreshPlayer).call(this, () => { var _b, _c; return __classPrivateFieldSet(this, _Player_i, (_c = __classPrivateFieldGet(this, _Player_i, "f"), _b = _c++, _c), "f"), _b; });
        }
    }
}
_a = Player, _Player_table = new WeakMap(), _Player_i = new WeakMap(), _Player_j = new WeakMap(), _Player_instances = new WeakSet(), _Player_showPlayer = function _Player_showPlayer() {
    __classPrivateFieldGet(this, _Player_table, "f").rows[__classPrivateFieldGet(this, _Player_i, "f")].cells[__classPrivateFieldGet(this, _Player_j, "f")].classList.add(__classPrivateFieldGet(_a, _a, "f", _Player_PLAYER));
}, _Player_removePlayer = function _Player_removePlayer(isFlip) {
    __classPrivateFieldGet(this, _Player_table, "f").rows[__classPrivateFieldGet(this, _Player_i, "f")].cells[__classPrivateFieldGet(this, _Player_j, "f")].classList.remove(__classPrivateFieldGet(_a, _a, "f", _Player_PLAYER));
    if (isFlip) {
        __classPrivateFieldGet(this, _Player_table, "f").rows[__classPrivateFieldGet(this, _Player_i, "f")].cells[__classPrivateFieldGet(this, _Player_j, "f")].classList.remove(__classPrivateFieldGet(_a, _a, "f", _Player_FLIP));
    }
}, _Player_isFlip = function _Player_isFlip() {
    return __classPrivateFieldGet(this, _Player_table, "f").rows[__classPrivateFieldGet(this, _Player_i, "f")].cells[__classPrivateFieldGet(this, _Player_j, "f")].classList.contains(__classPrivateFieldGet(_a, _a, "f", _Player_FLIP));
}, _Player_flipPlayer = function _Player_flipPlayer() {
    __classPrivateFieldGet(this, _Player_table, "f").rows[__classPrivateFieldGet(this, _Player_i, "f")].cells[__classPrivateFieldGet(this, _Player_j, "f")].classList.add(__classPrivateFieldGet(_a, _a, "f", _Player_FLIP));
}, _Player_canMoveToUp = function _Player_canMoveToUp() {
    if (!__classPrivateFieldGet(this, _Player_instances, "m", _Player_isInFirstRow).call(this)) {
        if (!__classPrivateFieldGet(this, _Player_instances, "m", _Player_hasTopWall).call(this)) {
            if (!__classPrivateFieldGet(this, _Player_instances, "m", _Player_hasAboveBottomWall).call(this)) {
                return true;
            }
        }
    }
    return false;
}, _Player_canMoveToRight = function _Player_canMoveToRight() {
    if (!__classPrivateFieldGet(this, _Player_instances, "m", _Player_isInLastColumn).call(this)) {
        if (!__classPrivateFieldGet(this, _Player_instances, "m", _Player_hasRightWall).call(this)) {
            if (!__classPrivateFieldGet(this, _Player_instances, "m", _Player_hasNextLeftWall).call(this)) {
                return true;
            }
        }
    }
    return false;
}, _Player_canMoveToDown = function _Player_canMoveToDown() {
    if (!__classPrivateFieldGet(this, _Player_instances, "m", _Player_isInLastRow).call(this)) {
        if (!__classPrivateFieldGet(this, _Player_instances, "m", _Player_hasBottomWall).call(this)) {
            if (!__classPrivateFieldGet(this, _Player_instances, "m", _Player_hasBelowTopWall).call(this)) {
                return true;
            }
        }
    }
    return false;
}, _Player_canMoveToLeft = function _Player_canMoveToLeft() {
    if (!__classPrivateFieldGet(this, _Player_instances, "m", _Player_isInFirstColumn).call(this)) {
        if (!__classPrivateFieldGet(this, _Player_instances, "m", _Player_hasLeftWall).call(this)) {
            if (!__classPrivateFieldGet(this, _Player_instances, "m", _Player_hasPreviousRightWall).call(this)) {
                return true;
            }
        }
    }
    return false;
}, _Player_hasTopWall = function _Player_hasTopWall() {
    return __classPrivateFieldGet(this, _Player_table, "f").rows[__classPrivateFieldGet(this, _Player_i, "f")].cells[__classPrivateFieldGet(this, _Player_j, "f")].classList.contains(MainController.TOP);
}, _Player_hasRightWall = function _Player_hasRightWall() {
    return __classPrivateFieldGet(this, _Player_table, "f").rows[__classPrivateFieldGet(this, _Player_i, "f")].cells[__classPrivateFieldGet(this, _Player_j, "f")].classList.contains(MainController.RIGHT);
}, _Player_hasBottomWall = function _Player_hasBottomWall() {
    return __classPrivateFieldGet(this, _Player_table, "f").rows[__classPrivateFieldGet(this, _Player_i, "f")].cells[__classPrivateFieldGet(this, _Player_j, "f")].classList.contains(MainController.BOTTOM);
}, _Player_hasLeftWall = function _Player_hasLeftWall() {
    return __classPrivateFieldGet(this, _Player_table, "f").rows[__classPrivateFieldGet(this, _Player_i, "f")].cells[__classPrivateFieldGet(this, _Player_j, "f")].classList.contains(MainController.LEFT);
}, _Player_hasBelowTopWall = function _Player_hasBelowTopWall() {
    return __classPrivateFieldGet(this, _Player_table, "f").rows[__classPrivateFieldGet(this, _Player_i, "f") + 1].cells[__classPrivateFieldGet(this, _Player_j, "f")].classList.contains(MainController.TOP);
}, _Player_hasPreviousRightWall = function _Player_hasPreviousRightWall() {
    return __classPrivateFieldGet(this, _Player_table, "f").rows[__classPrivateFieldGet(this, _Player_i, "f")].cells[__classPrivateFieldGet(this, _Player_j, "f") - 1].classList.contains(MainController.RIGHT);
}, _Player_hasAboveBottomWall = function _Player_hasAboveBottomWall() {
    return __classPrivateFieldGet(this, _Player_table, "f").rows[__classPrivateFieldGet(this, _Player_i, "f") - 1].cells[__classPrivateFieldGet(this, _Player_j, "f")].classList.contains(MainController.BOTTOM);
}, _Player_hasNextLeftWall = function _Player_hasNextLeftWall() {
    return __classPrivateFieldGet(this, _Player_table, "f").rows[__classPrivateFieldGet(this, _Player_i, "f")].cells[__classPrivateFieldGet(this, _Player_j, "f") + 1].classList.contains(MainController.LEFT);
}, _Player_isInFirstRow = function _Player_isInFirstRow() {
    return __classPrivateFieldGet(this, _Player_i, "f") == 0;
}, _Player_isInLastRow = function _Player_isInLastRow() {
    return __classPrivateFieldGet(this, _Player_i, "f") == __classPrivateFieldGet(this, _Player_table, "f").rows.length - 1;
}, _Player_isInFirstColumn = function _Player_isInFirstColumn() {
    return __classPrivateFieldGet(this, _Player_j, "f") == 0;
}, _Player_isInLastColumn = function _Player_isInLastColumn() {
    return __classPrivateFieldGet(this, _Player_j, "f") == __classPrivateFieldGet(this, _Player_table, "f").rows[__classPrivateFieldGet(this, _Player_i, "f")].cells.length - 1;
}, _Player_refreshPlayer = function _Player_refreshPlayer(movement) {
    const isFlip = __classPrivateFieldGet(this, _Player_instances, "m", _Player_isFlip).call(this);
    __classPrivateFieldGet(this, _Player_instances, "m", _Player_removePlayer).call(this, isFlip);
    movement();
    const wasFlip = isFlip;
    if (!wasFlip) {
        __classPrivateFieldGet(this, _Player_instances, "m", _Player_flipPlayer).call(this);
    }
    __classPrivateFieldGet(this, _Player_instances, "m", _Player_showPlayer).call(this);
};
_Player_PLAYER = { value: "player" };
_Player_FLIP = { value: "flip" };
