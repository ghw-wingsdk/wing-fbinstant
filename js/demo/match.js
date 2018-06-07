var match = {
    ////////////////////匹配开始//////////////////////  
    /*
     * 检查当前玩家是否可以使用匹配玩家接口
     */
    checkCanPlayerMatchAsync: function(){
        wing.fbinstant.checkCanPlayerMatchAsync(
            {
                success: function(result) {
                    //处理成功结果
                    util.showResult("检查当前玩家是否可以使用匹配玩家接口", "返回成功,结果数据:"+JSON.stringify(result));
                },
                fail: function(result) {
                    //处理失败结果
                    util.showResult("检查当前玩家是否可以使用匹配玩家接口", "返回失败,结果数据:"+JSON.stringify(result));
                }
            }
        );
    },

    /*
     * 匹配玩家
     */
    matchPlayerAsync: function(){

        var switchBoolean = document.getElementById("switch_context_when_matched").checked;
        var matchTagVal = document.getElementById("match_tag").value;
        console.log("switchBoolean:"+switchBoolean);
        console.log("matchTagVal:"+matchTagVal);
        
        wing.fbinstant.matchPlayerAsync(
            {
                matchTag: matchTagVal,
                switchContextWhenMatched: switchBoolean,
                success: function(result) {
                    //处理成功结果
                    util.showResult("匹配玩家", "返回成功,结果数据:"+JSON.stringify(result));
                },
                fail: function(result) {
                    //处理失败结果
                    util.showResult("匹配玩家", "返回失败,结果数据:"+JSON.stringify(result));
                }
            }
        );
    }
    ////////////////////匹配开始//////////////////////
}