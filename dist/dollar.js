(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Dollar = /** @class */ (function () {
        function Dollar() {
            this.amount = 0;
        }
        Dollar.prototype.getAmount = function () {
            return this.amount;
        };
        Dollar.prototype.getAmountWithCurrency = function () {
            return this.getAmount() + ' USD';
        };
        return Dollar;
    }());
    exports.Dollar = Dollar;
});
