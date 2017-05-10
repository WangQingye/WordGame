var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// TypeScript file
var GameSence = (function (_super) {
    __extends(GameSence, _super);
    function GameSence() {
        var _this = _super.call(this) || this;
        _this.skinName = 'resource/eui_skins/GameSenceSkin.exml';
        _this.btn_back.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.back, _this);
        _this.gp_words.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.touchWord, _this);
        _this.gp_answer.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.touchWord, _this);
        return _this;
    }
    GameSence.getInstance = function () {
        if (this.instance == null) {
            this.instance = new GameSence();
        }
        return this.instance;
    };
    /**返回关卡界面*/
    GameSence.prototype.back = function () {
        this.parent.addChild(MissonSence.getInstance());
        this.parent.removeChild(this);
    };
    /**初始化关卡*/
    GameSence.prototype.initLevel = function (level) {
        this.levelIndex = level;
        var levelData = LevelDataManager.getInstance().getLevelDate(level);
        //将答案和选择混淆
        var words = levelData.answer + levelData.word;
        //因为给出的选择不够，从其他关卡拿过来，凑够20个，调整难度
        while (words.length == 10) {
            var i = Math.floor(Math.random() * 400);
            if (i != level) {
                var temp = LevelDataManager.getInstance().getLevelDate(i);
                words += temp.word + temp.answer;
            }
        }
        var arr = words.split(''); //临时存放
        var wordList = []; //存放打乱后的字符
        while (arr.length) {
            var i = Math.floor(Math.random() * arr.length);
            wordList.push(arr[i]);
            arr.splice(i, 1);
        }
        this.setWords(wordList);
        console.log(levelData);
        this.img_question.source = 'resource/assets/' + levelData.img;
    };
    /**给每个方块赋值*/
    GameSence.prototype.setWords = function (arr) {
        for (var i = 0; i < this.gp_words.numChildren; i++) {
            var word = this.gp_words.getChildAt(i);
            word.text = arr[i];
            word.visible = true;
        }
        //将答案字初始化
        for (var i = 0; i < this.gp_answer.numChildren; i++) {
            var answerWord = this.gp_answer.getChildAt(i);
            answerWord.selectWord = null;
            answerWord.text = '';
            answerWord.visible = true;
        }
    };
    /**点击字块*/
    GameSence.prototype.touchWord = function (e) {
        //点击的是答案区域
        if (e.target instanceof AnswerWord) {
            if (e.target.selectWord != null) {
                e.target.selectWord.visible = true;
                e.target.selectWord = null;
                e.target.text = '';
            }
            return;
        }
        //点击选择区域
        if (e.target instanceof Word) {
            console.log(1);
            var answerWord = null;
            for (var i = 0; i < this.gp_answer.numChildren; i++) {
                console.log(2);
                var answer = this.gp_answer.getChildAt(i);
                if (answer.selectWord == null) {
                    console.log(i);
                    answerWord = answer;
                    break;
                }
            }
            //每次填充都判断是否胜利（因为有可能已经填了后面的，改了前面的）
            if (answerWord != null) {
                console.log(3);
                answerWord.setSelectWord(e.target);
                //答案字符
                var str = '';
                for (var i = 0; i < this.gp_answer.numChildren; i++) {
                    var answer = this.gp_answer.getChildAt(i);
                    str += answer.text;
                }
                if (str == LevelDataManager.getInstance().getLevelDate(this.levelIndex).answer) {
                    console.log('done');
                }
            }
        }
    };
    return GameSence;
}(eui.Component));
__reflect(GameSence.prototype, "GameSence");
//# sourceMappingURL=GameSence.js.map