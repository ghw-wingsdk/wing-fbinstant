var tournament = {

    clipboard: null,
    //创建比赛
    tournamentCreateAsync: function () {
        var createobj = $("#tournamentCreateAsyncData").val();
        console.log(typeof(createobj))
        var obj =
        {
            data: JSON.parse(createobj),
            success: function (res) {
                util.showResult(res, "创建成功")
            },
            fail: function (result) {
                //处理失败结果
                util.showResult("创建比赛失败", "返回失败,结果数据:" + JSON.stringify(result));
            },
        };
        wing.fbinstant.tournamentCreateAsync(obj);

    },

    /*
    FBInstant.tournament.shareAsync({
        score: 1300,
        data: { myReplayData: '...' }
        }).then(function () {
        // continue with the game.
        }).catch(function (error) {
        console.log('Message was not posted: ' + error.message);
        });
        */


    
    //提交分数
    tournamentPostScoreAsync: function () {
        var createobj = $("#tournamentPostScoreAsyncData").val();
        // var createobj = 100;
        var obj =
        {
            success: function (res) {
                util.showResult(res, "提交分数成功")
            },
            fail: function (result) {
                //处理失败结果
                util.showResult("提交分数失败", "返回失败,结果数据:" + JSON.stringify(result));
            },
            data: parseInt(createobj),
        };
        wing.fbinstant.tournamentPostScoreAsync(obj);
        console.log(obj)
    },



    //分享比赛
    tournamentShareAsync: function () {
        var createobj = $("#tournamentShareAsyncData").val()
        console.log(typeof(createobj))
        var obj =
        {
            data: JSON.parse(createobj),
            success: function (res) {
                util.showResult(res, "分享成功")
            },
            fail: function (result) {
                //处理失败结果
                util.showResult("分享失败", "返回失败,结果数据:" + JSON.stringify(result));
            },
        };
        wing.fbinstant.tournamentShareAsync(obj);

    },


    //加入比赛
    tournamentJoinAsync: function () {
        var createobj = $("#tournamentJoinAsyncData").val()
        var obj =
        {
            success: function (res) {
                util.showResult(res, "加入比赛成功")
            },
            fail: function (result) {
                //处理失败结果
                util.showResult("加入比赛失败", "返回失败,结果数据:" + JSON.stringify(result));
            },
            data: createobj
        };
        wing.fbinstant.tournamentJoinAsync(obj);

    },

    //比赛列表
    getTournamentsAsync: function () {
        var obj =
        {
            success: function (result) {
                util.showResult( "获取比赛列表成功",JSON.stringify(result))
            },
            fail: function (result) {
                //处理失败结果
                util.showResult("获取比赛列表失败？", "返回失败,结果数据:" + JSON.stringify(result));
            }
        };
        wing.fbinstant.getTournamentsAsync(obj);

    },



    //比赛信息
    getTournamentAsync: function () {
        var obj =
        {
            success: function (result) {
                console.log("lpwlpw===========")
                console.log(result.getPayload())
                util.showResult( "可通过tournament.getID()、tournament.getContextID()、、tournament.getEndTime()、tournament.getTitle()、tournament.getPayload()获取具体信息",JSON.stringify(result))
            },
            fail: function (result) {

                //处理失败结果
                util.showResult("获取比赛信息失败？", "返回失败,结果数据:" + JSON.stringify(result));
            }
        };
        wing.fbinstant.getTournamentAsync(obj);

    },






    showTooltip: function (message) {
        // $('#client_id_copy').tooltip('hide')
        //     .attr('data-original-title', message)
        //     .tooltip('show');
        $('#client_id_copy')
            // .tooltip('hide')
            // .attr('title', message)
            .tooltip('show');
        this.hideTooltip();
    },

    hideTooltip: function () {
        setTimeout(function () {
            $('#client_id_copy').tooltip('hide');
        }, 2000);
    }

}