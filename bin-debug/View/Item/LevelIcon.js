var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// TypeScript file
var LevelIcon = (function (_super) {
    __extends(LevelIcon, _super);
    function LevelIcon() {
        var _this = _super.call(this) || this;
        _this.skinName = 'resource/eui_skins/LevelIconSkin.exml';
        return _this;
        //this.btn_level.addEventListener(egret.TouchEvent.TOUCH_TAP,this.goMainGame,this)
    }
    Object.defineProperty(LevelIcon.prototype, "level", {
        get: function () {
            return this._level;
        },
        set: function (v) {
            this._level = v;
            this.btn_level['labelDisplay'].text = v + '';
        },
        enumerable: true,
        configurable: true
    });
    return LevelIcon;
}(eui.Button));
__reflect(LevelIcon.prototype, "LevelIcon");
//# sourceMappingURL=LevelIcon.js.map