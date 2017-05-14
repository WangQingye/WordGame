var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// TypeScript file
var MissonSence = (function (_super) {
    __extends(MissonSence, _super);
    function MissonSence() {
        var _this = _super.call(this) || this;
        _this.skinName = 'resource/eui_skins/MissonSenceSkin.exml';
        _this.btn_back.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.backToMain, _this);
        _this.createMisson();
        _this.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.goToGameSence, _this);
        return _this;
    }
    MissonSence.getInstance = function () {
        if (this.instance == null) {
            this.instance = new MissonSence();
        }
        return this.instance;
    };
    MissonSence.prototype.backToMain = function () {
        this.parent.addChild(StartSence.getInstance());
        this.parent.removeChild(this);
    };
    MissonSence.prototype.createMisson = function () {
        var row = 15;
        var col = 10;
        var spanx = 720 / col; //行间距
        var spany = 1136 / row; //列间距
        this.levelGroup = new eui.Group();
        this.levelGroup.width = 720;
        this.levelGroup.height = spany * 400; //总高度
        for (var i = 0; i < 400; i++) {
            var icon = new LevelIcon();
            icon.level = i + 1;
            icon.y = spany * i / 2;
            icon.x = Math.sin(icon.y / 180 * Math.PI) * 200 + this.levelGroup.width / 2;
            icon.y += spany * i / 2;
            icon.y = this.levelGroup.height - icon.y - spany * 2;
            this.levelGroup.addChild(icon);
        }
        this.refreshLevel();
        this.levelGroup.touchChildren = true;
        this.levelGroup.touchThrough = true;
        this.gp_levels.addChild(this.levelGroup);
        this.gp_levels.scrollV = this.levelGroup.height - 1100;
    };
    /**刷新可用关卡*/
    MissonSence.prototype.refreshLevel = function () {
        for (var i = 0; i < this.levelGroup.numChildren; i++) {
            var icon = this.levelGroup.getChildAt(i);
            //小于最大关卡的话按钮为灰色
            var mileStone = LevelDataManager.getInstance().mileStone;
            console.log(mileStone);
            if (icon.level <= mileStone) {
                icon.enabled = true;
                icon['img_levelbg'].source = "gs_select_1_png";
            }
            else {
                icon.enabled = false;
                break; //这句代码很帅，因为其实执行到第一个false的时候就不许要再执行了。
            }
        }
    };
    MissonSence.prototype.goToGameSence = function (e) {
        console.log(e.target);
        console.log(e.currentTarget);
        if (e.target.level) {
            this.parent.addChild(GameSence.getInstance());
            GameSence.getInstance().initLevel(e.target.level);
            this.parent.removeChild(this);
        }
    };
    return MissonSence;
}(eui.Component));
__reflect(MissonSence.prototype, "MissonSence");
//# sourceMappingURL=MissonSence.js.map