(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./dollar"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var dollar_1 = require("./dollar");
    describe('dollar', function () {
        it('should return amount', function () {
            var dollar = new dollar_1.Dollar();
            expect(dollar.getAmount()).toBe(0);
            dollar.amount = 10;
            expect(dollar.getAmount()).toBe(10);
        });
        it('should return amount with currency', function () {
            var dollar = new dollar_1.Dollar();
            expect(dollar.getAmountWithCurrency()).toBe('0 USD');
            dollar.amount = 10;
            expect(dollar.getAmountWithCurrency()).toBe("10 USD");
        });
    });
});
