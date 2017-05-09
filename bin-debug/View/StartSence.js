var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// TypeScript file
var StartSence = (function (_super) {
    __extends(StartSence, _super);
    function StartSence() {
        var _this = _super.call(this) || this;
        _this.skinName = 'resource/eui_skins/BeginSence.exml';
        _this.btn_start.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.startGame, _this);
        return _this;
    }
    StartSence.getInstance = function () {
        if (this.instance == null) {
            this.instance = new StartSence();
        }
        return this.instance;
    };
    StartSence.prototype.startGame = function () {
        this.parent.addChild(MissonSence.getInstance());
        this.parent.removeChild(this);
    };
    return StartSence;
}(eui.Component));
__reflect(StartSence.prototype, "StartSence");
//# sourceMappingURL=StartSence.js.map