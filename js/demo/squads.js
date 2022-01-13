var squads = {

    clipboard: null,
    //创建比赛
    squadsCreateAsync: function () {
        var createobj = {
            "name": 'Level X Tournament',
            "image": 'data:image/jpeg;base64,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',
            "squadTerm": 'squadTerm',
        }
        var obj =
        {
            success: function (res) {
                util.showResult(res, "创建队伍成功")
            },
            fail: function (result) {
                //处理失败结果
                util.showResult("创建队伍成功失败", "返回失败,结果数据:" + JSON.stringify(result));
            },
            data: createobj
        };
        wing.fbinstant.squadsCreateAsync(obj);

    },


/*
    //分享比赛
    tournamentShareAsync: function () {
        var createobj = {
            score: 104,
            data: { type: 'hard', extinfo: '其他用户进入比赛，可读取此数据' },
        }
        var obj =
        {
            success: function (res) {
                util.showResult(res, "分享成功")
            },
            fail: function (result) {
                //处理失败结果
                util.showResult("分享失败", "返回失败,结果数据:" + JSON.stringify(result));
            },
            data: createobj
        };
        wing.fbinstant.tournamentShareAsync(obj);

    },


    //加入比赛
    tournamentJoinAsync: function () {
        var createobj = '1122334455'
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
                util.showResult("获取比赛列表成功", JSON.stringify(result))
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
                util.showResult("可通过tournament.getID()、tournament.getContextID()、、tournament.getEndTime()、tournament.getTitle()、tournament.getPayload()获取具体信息", JSON.stringify(result))
            },
            fail: function (result) {

                //处理失败结果
                util.showResult("获取比赛信息失？", "返回失败,结果数据:" + JSON.stringify(result));
            }
        };
        wing.fbinstant.getTournamentAsync(obj);

    },

*/

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