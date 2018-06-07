var subscribe = {
    ////////////////////订阅开始////////////////////// 
    /*
     * 返回玩家能否订阅游戏消息助手
     */   
    canSubscribeBotAsync: function(){
        // This function should be called before FBInstant.player.subscribeBotAsync()
        // FBInstant.player.canSubscribeBotAsync().then(
        //     function(isAvailable){
        //         util.showResult("返回玩家能否订阅游戏消息助手", "返回结果："+isAvailable);
        //     }
        //     // can_subscribe => console.log(can_subscribe)
        // );
        console.log("wing.fbinstant.canSubscribeBotAsync function will be called...");
        wing.fbinstant.canSubscribeBotAsync (
            {
                success: function(result) {
                    //处理成功结果
                    util.showResult("返回玩家能否订阅游戏消息助手", "返回成功,结果数据:"+JSON.stringify(result));
                },
                fail: function(result) {
                    //处理失败结果
                    util.showResult("返回玩家能否订阅游戏消息助手", "返回失败,结果数据:"+JSON.stringify(result));
                }
            }
        );
        console.log("wing.fbinstant.canSubscribeBotAsync function called...");
    },

    /*
     * 玩家订阅游戏消息助手
     */
    subscribeBotAsync: function(){
        // FBInstant.player.subscribeBotAsync().then(
        //     // Player is subscribed to the bot
        //     function(){
        //         util.showResult("玩家订阅游戏消息助手", "返回成功")
        //     }
        // ).catch(function(e) {
        //     // Handle subscription failure
        //     util.showResult("玩家订阅游戏消息助手", "返回失败");
        // });
        console.log("wing.fbinstant.subscribeBotAsync function will be called...");
        wing.fbinstant.subscribeBotAsync(
            {
                success: function(result) {
                    //处理成功结果
                    util.showResult("玩家订阅游戏消息助手", "返回成功,结果数据:"+JSON.stringify(result));
                },
                fail: function(result) {
                    //处理失败结果
                    util.showResult("玩家订阅游戏消息助手", "返回失败,结果数据:"+JSON.stringify(result));
                }
            }
        );
        console.log("wing.fbinstant.subscribeBotAsync function called...");
            
    }
    ////////////////////订阅结束//////////////////////
}