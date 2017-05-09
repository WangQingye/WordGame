// 专门用于答案的字，因为有一些特殊的逻辑，所以在继承Word的基础上添加功能
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AnswerWord = (function (_super) {
    __extends(AnswerWord, _super);
    function AnswerWord() {
        var _this = _super.call(this) || this;
        /**记录来自于哪个字*/
        _this.selectWord = null;
        return _this;
    }
    /**点击答案字，即取消选项，所以之前跑过来的字就应该还原*/
    AnswerWord.prototype.onclick_tap = function () {
        if (this.selectWord != null) {
            this.selectWord.visible = true;
            this.selectWord = null;
            this.text = '';
        }
    };
    /**设置selectWord*/
    AnswerWord.prototype.setSelectWord = function (word) {
        word.visible = false;
        this.text = word.text;
        this.selectWord = word;
    };
    return AnswerWord;
}(Word));
__reflect(AnswerWord.prototype, "AnswerWord");
//# sourceMappingURL=AnswerWord.js.map