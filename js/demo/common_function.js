var common = {
    ////////////////////公共功能开始//////////////////////
    startGameAsync: function(subjcet) {
        wing.fbinstant.startGameAsync({
            success: function() {
                util.showResult(subject, "开始游戏")
            }
        })
    },
    getLocale: function(subject) {
        util.showResult(subject, JSON.stringify(wing.fbinstant.getLocale()));
    },
    getPlatform: function(subject) {
        util.showResult(subject, JSON.stringify(wing.fbinstant.getPlatform()));
    },
    getSDKVersion: function(subject) {
        util.showResult(subject, JSON.stringify(wing.fbinstant.getSDKVersion()));
    },
    setLoadingProgress: function(subject) {
        wing.fbinstant.setLoadingProgress(100);
    },
    getSupportedAPIs: function(subject) {
        util.showResult(subject, JSON.stringify(wing.fbinstant.getSupportedAPIs()));
    },
    getEntryPointData: function(subject) {
        util.showResult(subject, JSON.stringify(wing.fbinstant.getEntryPointData()));
    },
    getEntryPointAsync: function(subject) {
        wing.fbinstant.getEntryPointAsync(
            {
                complete: function (res) {
                    //util.showResult(subject, JSON.stringify(res));
                },
                success: function(res) {
                    util.showResult(subject, JSON.stringify(res));
                },
                fail: function (res) {
                    util.showResult(subject, JSON.stringify(res));
                }
            }
        )
    },
    setSessionData: function(subject) {
        var sessiondata = $("#sessiondata").val()
        var parsedObj = null;
        if (sessiondata) {
            parsedObj = JSON.parse(sessiondata);
        }
        wing.fbinstant.setSessionData(parsedObj);
        util.showResult(subject, "保存完成");
    },
    updateAsync: function(subject) {
        var val = $("#updateAsyncData").val();
        var value2 = JSON.parse(val);
        wing.fbinstant.updateAsync({
            data : value2,
            complete: function (res) {
                //util.showResult(subject, JSON.stringify(res));
            },
            success: function(res) {
                util.showResult(subject, JSON.stringify(res));
            },
            fail: function (res) {
                util.showResult(subject, JSON.stringify(res));
            }
        })
    },
    quit: function(subject) {
        bootbox.confirm({  
            buttons: {  
                confirm: {  
                    label: '确认',  
                    className: 'btn-info'  
                },  
                cancel: {  
                    label: '取消',  
                    className: 'btn-default'  
                }  
            },  
            message: '是否需要退出游戏？',  
            callback: function(result) {  
                if(result) {  
                    console.log('点击了确认按钮');
                    wing.fbinstant.quit();  
                } else {  
                    console.log('点击了取消按钮'); 
                }  
            }, 
        });
    },

    logEvent: function (subject) {
        var val = $("#eventdata").val()
        console.log(val)

        wing.fbinstant.logEvent(JSON.parse(val));
        util.showResult(subject, "已执行");
    },

    onPause: function (subject) {
        var obj =
        {
            success: function (res) {
                util.showResult(subject, "执行成功")
            }
        };
        wing.fbinstant.onPause(obj);
    },

    shareAsync: function (subject) {
        var data = $("#shareAsyncData").val().trim()
        var parsedData = JSON.parse(data)
        console.log(parsedData)
        var obj =
        {
            success: function (res) {
                util.showResult(subject, "执行成功")
            },
            data: parsedData
        };
        wing.fbinstant.shareAsync(obj)
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
    setGameUserId: function(subject) {
        var gameUserId = $("#gameUserId").val();
        wing.fbinstant.setGameUserId(gameUserId);
        util.showResult(subject, "已执行")
    },
    setServerId: function(subject) {
        var serverId = $("#serverId").val();
        wing.fbinstant.setServerId(serverId);
        util.showResult(subject, "已执行")
    },
    setLevel: function(subject) {
        var level = $("#level").val();
        wing.fbinstant.setLevel(level);
        util.showResult(subject, "已执行")
    }
    ////////////////////公共功能结束//////////////////////
}