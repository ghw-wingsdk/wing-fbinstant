var switchGame = {
    /*
     * 切换游戏
     */   
    switchGameAsync: function(){
        var appIdVal = document.getElementById("switch_game_app_id").value;
        if(!appIdVal){
            util.showResult("校验错误", "appId不能为空");
            return;
        }

        var extraDataVal = document.getElementById("switch_game_extra_data").value;
        // extraDataVal = extraDataVal?extraDataVal:{};
        var extraDataObj = {};
        if(extraDataVal){
            if(util.isJsonString(extraDataVal)){
                extraDataObj = JSON.parse(extraDataVal);
            }else{
                util.showResult("校验错误", "请输入json类型数据");
                return;
            }
        }

        

        wing.fbinstant.switchGameAsync(
            {
                appId: appIdVal,
                extraData: extraDataObj,
                success: function(result) {
                    //处理成功结果
                    util.showResult("切换游戏", "返回成功,结果数据:"+JSON.stringify(result));
                },
                fail: function(result) {
                    //处理失败结果
                    util.showResult("切换游戏", "返回失败,结果数据:"+JSON.stringify(result));
                }
            }
        );
    }
}