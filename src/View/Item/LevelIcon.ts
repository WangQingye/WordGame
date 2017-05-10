// TypeScript file
class LevelIcon extends eui.Button
{
    private btn_level:eui.Button;
    public constructor()
    {
        super();
        this.skinName = 'resource/eui_skins/LevelIconSkin.exml'
        this.btn_level.addEventListener(egret.TouchEvent.TOUCH_TAP,this.goToGameSence,this)
    }

    
    private _level : number;
    public get level() : number {
        return this._level;
    }
    public set level(v : number) {
        this._level = v;
        this.btn_level['labelDisplay'].text = v+'';
    }

    private goToGameSence():void
    {
        if(this.level)
        {
            //如果大于最大关卡了就重新设置最大关卡
            if(this.level > LevelDataManager.getInstance().mileStone)
            {
                LevelDataManager.getInstance().mileStone = this.level;
            }
            console.log(this.level);
            this.parent.addChild(GameSence.getInstance());
            GameSence.getInstance().initLevel(1);
            this.parent.removeChild(this);
        }
    }

}