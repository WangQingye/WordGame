// TypeScript file
class GameSence extends eui.Component
{
    public constructor()
    {
        super();
        this.skinName = 'resource/eui_skins/GameSenceSkin.exml'
    }

    private static instance: MissonSence;
    public static getInstance() {
        if(this.instance == null) {
            this.instance = new MissonSence();
        }
        return this.instance;
    }
}