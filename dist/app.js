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
    var App = /** @class */ (function () {
        function App() {
            var dollar = new dollar_1.Dollar();
            dollar.amount = 100;
            document.getElementById('app').innerHTML = dollar.getAmountWithCurrency() + " amount";
        }
        return App;
    }());
    exports.App = App;
});
