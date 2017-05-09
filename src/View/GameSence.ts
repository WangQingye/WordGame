// TypeScript file
class GameSence extends eui.Component
{
    private btn_back:eui.Button;
    public constructor()
    {
        super();
        this.skinName = 'resource/eui_skins/GameSenceSkin.exml'
    }

    private static instance: GameSence;
    public static getInstance() {
        if(this.instance == null) {
            this.instance = new GameSence();
        }
        return this.instance;
    }

    private 

    /**选择区域*/
    private gp_words:eui.Group;
    /**答案区域*/
    private gp_answer:eui.Group;
    /**题目图片*/
    private img_question:eui.Image;
    /**关卡序号*/
    private levelIndex:number;

    public initLevel(level:number)
    {
        this.levelIndex = level;
        let levelData = LevelDataManager.getInstance().getLevelDate(level);
        
        //将答案和选择混淆
        let words = levelData.answer + levelData.word;

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
        this.img_question.source = 'resource/assets/' + levelData.imgSource;
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
}