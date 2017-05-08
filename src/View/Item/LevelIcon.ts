// TypeScript file
class LevelIcon extends eui.Button
{
    private btn_level:eui.Button;
    public constructor()
    {
        super();
        this.skinName = 'resource/eui_skins/LevelIconSkin.exml'
        //this.btn_level.addEventListener(egret.TouchEvent.TOUCH_TAP,this.goMainGame,this)
    }

    
    private _level : number;
    public get level() : number {
        return this._level;
    }
    public set level(v : number) {
        this._level = v;
        this.btn_level['labelDisplay'].text = v+'';
    }

}