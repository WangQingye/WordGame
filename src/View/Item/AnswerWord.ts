// 专门用于答案的字，因为有一些特殊的逻辑，所以在继承Word的基础上添加功能

class AnswerWord extends Word
{
    /**记录来自于哪个字*/
    public selectWord:Word = null;
    public constructor()
    {
        super();
    }

    /**点击答案字，即取消选项，所以之前跑过来的字就应该还原*/
    protected onclick_tap()
    {
        if(this.selectWord != null)
        {
            this.selectWord.visible = true;
            this.selectWord = null;
            this.text = '';
        }
    }

    /**设置selectWord*/
    public setSelectWord(word:Word)
    {
        word.visible = false;
        this.text = word.text;
        this.selectWord = word;
    }
}