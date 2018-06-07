var leaderboard = {
    ////////////////////排行榜开始//////////////////////  
    /*
     * 获取排行榜
     */
    getLeaderboardAsync: function(){

        var leaderboardNameVal = document.getElementById("leaderboard_name").value;
        var leaderboardScoreVal = document.getElementById("leaderboard_score").value;
        var leaderboardExtraDataVal = document.getElementById("leaderboard_extra_data").value;
        console.log("leaderboardNameVal:"+leaderboardNameVal);
        wing.fbinstant.getLeaderboardAsync(
            {
                name: leaderboardNameVal,
                success: function(result) {
                    //处理成功结果
                    
                    if(result && result.data){
                        var fbLeaderboard = result.data;
                        if(leaderboardScoreVal){
                            fbLeaderboard.setScoreAsync(parseInt(leaderboardScoreVal), leaderboardExtraDataVal).then(
                                function(entry) {
                                    console.log("---entry.getScore---:"+entry.getScore());
                                    console.log("---entry.getExtraData---:"+entry.getExtraData());
                                }
                            )
                        }

                        var fbLeaderboardResult = "Leaderboard.getName():"+fbLeaderboard.getName()
                            + "\n Leaderboard.getContextID:"+fbLeaderboard.getContextID();
                        
                            fbLeaderboard.getPlayerEntryAsync().then(function(entry){
                                if(entry){
                                    fbLeaderboardResult = fbLeaderboardResult
                                    + "\n entry.getScore:" + entry.getScore()
                                    + "\n entry.getRank:" + entry.getRank()
                                    + "\n entry.getExtraData:" + entry.getExtraData();
                                }

                                util.showResult("获取排行榜", "返回成功,结果数据:"+JSON.stringify(result)+"\n fbLeaderboardResult:"+fbLeaderboardResult);
                            });
                            // + "\n Leaderboard.getEntryCountAsync:"+fbLeaderboard.getEntryCountAsync()
                            // + "\n Leaderboard.getPlayerEntryAsync.getgetScore(当前玩家分数):"+fbLeaderboard.getPlayerEntryAsync().getScore()
                            // + "\n Leaderboard.getPlayerEntryAsync.getRank(当前玩家排行):"+fbLeaderboard.getPlayerEntryAsync().getRank()
                            // + "\n Leaderboard.getEntriesAsync:"+fbLeaderboard.getEntriesAsync()
                            // + "\n Leaderboard.getConnectedPlayerEntriesAsync:"+fbLeaderboard.getConnectedPlayerEntriesAsync()
                    }
                },
                fail: function(result) {
                    //处理失败结果
                    util.showResult("获取排行榜", "返回失败,结果数据:"+JSON.stringify(result));
                }
            }
        );
    }
}