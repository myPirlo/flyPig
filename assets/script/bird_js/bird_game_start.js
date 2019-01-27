cc.Class({
    extends: cc.Component,

    properties: {
        maskLayer: {
            default: null,
            type: cc.Node
        },
        menuGroup:cc.Node,
        openData:cc.Node
    },

    startGame() {
        this.maskLayer.active = true;
        this.maskLayer.opacity = 0;
        this.maskLayer.color = cc.Color.BLACK;
        this.maskLayer.runAction(
            cc.sequence(
                cc.fadeIn(0.2),
                cc.callFunc(() => {
                    // 重新加载场景
                    cc.director.loadScene('bird_game');
                }, this)
            )
        );
    },
    showMenu(){
        this.menuGroup.active=false
        this.openData.active=true
    },
    hideMenu(){
        this.menuGroup.active=true
        this.openData.active=false
    },
    share(){
        wx.shareAppMessage({
            title: '不得了啦,这猪飞上天啦！！！',
            imageUrl:'http://webfdh.com/way-hero/pig.jpg'
        })
    },
    // 返回游戏列表
    backGameList() {
        this.maskLayer.active = true;
        this.maskLayer.opacity = 0;
        this.maskLayer.color = cc.Color.BLACK;
        this.maskLayer.runAction(
            cc.sequence(
                cc.fadeIn(0.2),
                cc.callFunc(() => {
                    // 加载列表
                    cc.director.loadScene('startscene');
                }, this)
            )
        );
    }
});
