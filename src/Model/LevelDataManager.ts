
/**每一关的数据*/
class LevelDataItem
{
    public answer:string;
    public img:string;
    public word:string;
    public tip:string;
    public content:string;
}

/**数据管理器*/
class LevelDataManager{
    /**单例*/
    private static instance: LevelDataManager;
    public static getInstance() {
        if(this.instance == null) {
            this.instance = new LevelDataManager();
        }
        return this.instance;
    }

    /**数据容器*/
    private items:LevelDataItem[] = [];

    public constructor()
    {
        //使用RES读取和构建JSON数据，JSON数据可以直接解析到目标结构
        this.items = RES.getRes('questions_json');
    }

    /**获取单个关卡的数据*/
    public getLevelDate(level:number): LevelDataItem
    {
        if (level < 0) level = 0;
        if (level >= this.items.length) level = this.items.length - 1;
        return (this.items[level]);
    }

    /**获取当前最远关卡*/
    public get mileStone():number
    {
        var mileStone = egret.localStorage.getItem('CYDZZ_MILE');
        if(!mileStone) mileStone = '1';
        return parseInt(mileStone);
    }

    /**设置当前最远关卡*/
    public set mileStone(level:number)
    {
        egret.localStorage.setItem('CYDZZ_MILE',level.toString());        
    }
}