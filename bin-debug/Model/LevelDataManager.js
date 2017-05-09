var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**每一关的数据*/
var LevelDataItem = (function () {
    function LevelDataItem() {
    }
    return LevelDataItem;
}());
__reflect(LevelDataItem.prototype, "LevelDataItem");
/**数据管理器*/
var LevelDataManager = (function () {
    function LevelDataManager() {
        /**数据容器*/
        this.items = [];
        //使用RES读取和构建JSON数据，JSON数据可以直接解析到目标结构
        this.items = RES.getRes('questions_json');
    }
    LevelDataManager.getInstance = function () {
        if (this.instance == null) {
            this.instance = new LevelDataManager();
        }
        return this.instance;
    };
    /**获取单个关卡的数据*/
    LevelDataManager.prototype.getLevelDate = function (level) {
        if (level < 0)
            level = 0;
        if (level >= this.items.length)
            level = this.items.length - 1;
        return (this.items[level]);
    };
    Object.defineProperty(LevelDataManager.prototype, "mileStone", {
        /**获取当前最远关卡*/
        get: function () {
            var mileStone = egret.localStorage.getItem('CYDZZ_MILE');
            if (!mileStone)
                mileStone = '1';
            return parseInt(mileStone);
        },
        /**设置当前最远关卡*/
        set: function (level) {
            egret.localStorage.setItem('CYDZZ_MILE', level.toString());
        },
        enumerable: true,
        configurable: true
    });
    return LevelDataManager;
}());
__reflect(LevelDataManager.prototype, "LevelDataManager");
//# sourceMappingURL=LevelDataManager.js.map