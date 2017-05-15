// TypeScript file
class MissonSence extends eui.Component
{
    private btn_back:eui.Button;
    private gp_levels:eui.Group;
    private sl_levels:eui.Scroller;
    public constructor()
    {
        super();
        this.skinName = 'resource/eui_skins/MissonSenceSkin.exml'
        this.btn_back.addEventListener(egret.TouchEvent.TOUCH_TAP,this.backToMain,this)        
        this.createMisson();
        this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.goToGameSence,this)
    }

    private static instance: MissonSence;
    public static getInstance() {
        if(this.instance == null) {
            this.instance = new MissonSence();
        }
        return this.instance;
    }

    private backToMain():void
    {
        this.parent.addChild(StartSence.getInstance());
        this.parent.removeChild(this);
    }

    private levelGroup:eui.Group;

    private createMisson():void
    {
        var row = 15;
        var col = 10;
        var spanx = 720/col;  //行间距
        var spany = 1136/row; //列间距
        this.levelGroup = new eui.Group();        
        this.levelGroup.width = 720;
        this.levelGroup.height = spany * 400; //总高度

        for( let i = 0; i < 400; i++)
        {
            var icon = new LevelIcon();
            icon.level = i + 1;
            icon.y = spany * i /2;
            icon.x = Math.sin(icon.y / 180 * Math.PI) * 200 + this.levelGroup.width / 2;
            icon.y += spany * i /2;
            icon.y = this.levelGroup.height - icon.y - spany*2;

            this.levelGroup.addChild(icon);
        }
        this.refreshLevel();
        this.levelGroup.touchChildren = true;
        this.levelGroup.touchThrough = true;
        this.gp_levels.addChild(this.levelGroup);
        this.gp_levels.scrollV = this.levelGroup.height - 1100;
    }

    /**刷新可用关卡*/
    public refreshLevel():void
    {
        for(let i = 0; i < this.levelGroup.numChildren; i++)
        {
            let icon = <LevelIcon>this.levelGroup.getChildAt(i);
            //小于最大关卡的话按钮为灰色
            let mileStone = LevelDataManager.getInstance().mileStone;
            console.log(mileStone);
            if(icon.level <= mileStone)
            {
                icon.enabled = true;
                console.log(1);
                icon['img_levelbg'].source = "gs_select_1_png";
            }else
            {
                icon.enabled = false;
                break; //这句代码很帅，因为其实执行到第一个false的时候就不许要再执行了。
            }
        }
    }

    private goToGameSence(e:egret.TouchEvent):void
    {
        console.log(e.target);
        console.log(e.currentTarget);
        if(e.target.level)
        {
            this.parent.addChild(GameSence.getInstance());
            GameSence.getInstance().initLevel(e.target.level);
            this.parent.removeChild(this);
        }
    }
} 