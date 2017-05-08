// TypeScript file
class Word extends eui.Component
{
    private lb_text:eui.Label;
    public constructor()
    {
        super();
        //this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onclick,this);
    }
    
    private _text : string;
    public get text() : string {
        return this._text;
    }
    public set text(v : string) {
        this._text = v;
        this.lb_text.text = v;
    }
    
}