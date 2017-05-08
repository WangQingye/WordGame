// TypeScript file
class StartSence extends eui.Component
{

    private btn_start:eui.Button;

    public constructor()
    {
        super();
        this.skinName = 'resource/eui_skins/BeginSence.exml';
        this.btn_start.addEventListener(egret.TouchEvent.TOUCH_TAP,this.startGame,this)
    }
    
    private static instance: StartSence;
    public static getInstance() {
        if(this.instance == null) {
            this.instance = new StartSence();
        }
        return this.instance;
    }
    
    private startGame()
    {
        this.parent.addChild(MissonSence.getInstance());
        this.parent.removeChild(this);
    }
}