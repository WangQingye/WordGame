var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// TypeScript file
var Word = (function (_super) {
    __extends(Word, _super);
    function Word() {
        return _super.call(this) || this;
        //this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onclick,this);
    }
    Object.defineProperty(Word.prototype, "text", {
        get: function () {
            return this._text;
        },
        set: function (v) {
            this._text = v;
            this.lb_text.text = v;
        },
        enumerable: true,
        configurable: true
    });
    return Word;
}(eui.Component));
__reflect(Word.prototype, "Word");
//# sourceMappingURL=Word.js.map