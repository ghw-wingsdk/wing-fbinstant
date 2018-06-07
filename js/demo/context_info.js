var context = {
    ////////////////////环境信息开始//////////////////////
    getContextID: function(subject) {
        util.showResult(subject, JSON.stringify(wing.fbinstant.getContextID()));
    },
    getContextType: function(subject) {
        util.showResult(subject, JSON.stringify(wing.fbinstant.getContextType()));
    },
    isSizeBetween: function(subject) {
        util.showResult(
            subject,
            JSON.stringify(wing.fbinstant.isSizeBetween({
                data: {
                    minSize: 1,
                    maxSize: 5
                }})
            )
        )
    },
    switchAsync: function(subject) {
        var val = $("#switchAsyncData").val();
        wing.fbinstant.switchAsync(
            {
                data: val,
                complete: function (res) {
                    util.showResult(subject, "执行完成")
                },
                success: function(res) {
                    util.showResult(subject, "执行成功")
                },
                fail: function (res) {
                    util.showResult(subject, "执行失败")
                }
            }
        )
    },
    chooseAsync: function (subject) {
        var val = $("#chooseAsyncData").val();
        var value2 = JSON.parse(val);
        var obj = {
            data: value2,
            success: function () {
                util.updateAsync("选择玩家后在messenger中通知玩家");//通知facebook更新messenger
                console.log(subject, "执行成功");
            }
        };
        wing.fbinstant.chooseAsync(obj)
    },
    createAsync: function(subject) {
        var val = $("#createAsyncData").val();
        wing.fbinstant.createAsync(
            {
                data: val,
                complete: function (res) {
                    util.showResult(subject, "执行完成" + res)
                },
                success: function(res) {
                    util.showResult(subject, "执行成功")
                },
                fail: function (res) {
                    util.showResult(subject, "执行失败" + JSON.stringify(res))
                }
            }
        )
    },
    getPlayersAsync: function(subject) {
        wing.fbinstant.getPlayersAsync(
            {
                complete: function (res) {
                    //util.showResult(subject, JSON.stringify(res))
                },
                success: function(res) {
                    util.showResult(subject, JSON.stringify(res))
                },
                fail: function (res) {
                    util.showResult(subject, JSON.stringify(res))
                }
            }
        )
    },
    ////////////////////环境信息结束//////////////////////
}