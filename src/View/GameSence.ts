// TypeScript file
class GameSence extends eui.Component
{
    private btn_back:eui.Button;
    public constructor()
    {
        super();
        this.skinName = 'resource/eui_skins/GameSenceSkin.exml'
        this.btn_back.addEventListener(egret.TouchEvent.TOUCH_TAP,this.backToMisson,this);
        this.gp_words.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchWord,this);
        this.gp_answer.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchWord,this);
        this.btn_next.addEventListener(egret.TouchEvent.TOUCH_TAP,this.nextMisson,this);
    }

    private static instance: GameSence;
    public static getInstance() {
        if(this.instance == null) {
            this.instance = new GameSence();
        }
        return this.instance;
    }

    /**返回关卡界面*/
    private backToMisson():void
    {
        this.parent.addChild(MissonSence.getInstance());
        this.parent.removeChild(this);
    }

    /**选择区域*/
    private gp_words:eui.Group;
    /**答案区域*/
    private gp_answer:eui.Group;
    /**题目图片*/
    private img_question:eui.Image;
    /**关卡序号*/
    private levelIndex:number;
    /**关卡数据*/
    private levelData;
    /**初始化关卡*/
    public initLevel(level:number)
    {
        this.levelIndex = level;
        this.levelData = LevelDataManager.getInstance().getLevelDate(level);
        
        //将答案和选择混淆
        let words = this.levelData.answer + this.levelData.word;

        //因为给出的选择不够，从其他关卡拿过来，凑够20个，调整难度
        while(words.length == 10)
        {
            let i = Math.floor(Math.random() * 400);
            if(i != level)
            {
                let temp = LevelDataManager.getInstance().getLevelDate(i);
                words += temp.word + temp.answer;
            }
        }
        
        let arr = words.split(''); //临时存放
        let wordList = []; //存放打乱后的字符
        while (arr.length)
        {
            let i = Math.floor(Math.random() * arr.length);
            wordList.push(arr[i]);
            arr.splice(i,1);
        }
        this.setWords(wordList);
        console.log(this.levelData);
        this.img_question.source = 'resource/assets/' + this.levelData.img;
    }

    /**给每个方块赋值*/
    private setWords(arr:string[])
    {
        for(let i = 0; i < this.gp_words.numChildren; i++)
        {
            let word = <Word>this.gp_words.getChildAt(i);
            word.text = arr[i];
            word.visible = true;
        }
        //将答案字初始化
        for(let i = 0; i < this.gp_answer.numChildren; i++)
        {
            let answerWord = <AnswerWord>this.gp_answer.getChildAt(i);
            answerWord.selectWord = null;
            answerWord.text = '';
            answerWord.visible = true;
        }
    }


    /**点击字块*/
    private touchWord(e:egret.TouchEvent):void
    {
        //点击的是答案区域
        if(e.target instanceof AnswerWord)
        {
            if(e.target.selectWord != null)
            {
                e.target.selectWord.visible = true;
                e.target.selectWord = null;
                e.target.text = '';
            }
            return;
        }
        //点击选择区域
        if(e.target instanceof Word)
        {
            console.log(1)
            let answerWord:AnswerWord = null;
            for(let i = 0; i < this.gp_answer.numChildren; i++)
            {
                console.log(2)
                let answer = <AnswerWord>this.gp_answer.getChildAt(i);
                if(answer.selectWord == null) //还没有填充
                {
                    console.log(i)
                    answerWord = answer;
                    break;
                }
            }
            //每次填充都判断是否胜利（因为有可能已经填了后面的，改了前面的）
            if(answerWord != null)
            {
                console.log(3)
                answerWord.setSelectWord(e.target);
                //答案字符
                let str = '';
                for(let i = 0; i < this.gp_answer.numChildren; i++)
                {
                    let answer = <AnswerWord>this.gp_answer.getChildAt(i);
                    str += answer.text;
                }
                if (str == this.levelData.answer)
                {
                    this.showAnswer();
                }
            }
        }
    }    
    /**答案区域*/
    private gp_done:eui.Group;
    /**答案*/
    private lb_answer:eui.Label;
    /**解释*/
    private lb_explain:eui.Label;
    /**下一关*/
    private btn_next:eui.Button;

    private showAnswer():void
    {
        console.log(LevelDataManager.getInstance().getLevelDate(this.levelIndex));
        this.gp_done.visible = true;
        this.lb_answer.text = "       " + this.levelData.tip;
        this.lb_explain.text ="       " + this.levelData.content;
    }

    private nextMisson():void
    {
        this.initLevel(this.levelIndex+1);
        this.gp_done.visible = false;
    }
}