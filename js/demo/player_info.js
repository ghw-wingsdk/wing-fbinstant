var player = {
    ////////////////////玩家信息开始//////////////////////
    getSignedPlayerInfoAsync : function (subject) {
        wing.fbinstant.getSignedPlayerInfoAsync({
            data: "test",
            success: function (res) {
                console.log(res);
                util.showResult(subject, JSON.stringify(res.data))
            },
            fail: function (res) {
                util.showResult(subject, {message:res})
            }
        })
    },

    getSignedPlayerInfoAsync1 : function () {
        wing.fbinstant.getSignedPlayerInfoAsync({
            data: "test",
            success: function (res) {
                console.log(res);
                bootbox.alert({message: JSON.stringify(res.data)})
            },
            fail: function (res) {
                bootbox.alert({message:res})
            }
        })
    },

    getName: function (subject) {
        util.showResult(subject, wing.fbinstant.getName())
    },

    getPhoto: function(subject) {
        util.showResult(subject, wing.fbinstant.getPhoto())
    },
    setDataAsync: function(subject) {
        var val = $("#setDataAsyncData").val();
        wing.fbinstant.setDataAsync(
            {
                data: JSON.parse(val),
                success: function(res) {
                    util.showResult(subject, JSON.stringify(res))
                },
                fail: function (res) {
                    util.showResult(subject, JSON.stringify(res))
                }
            }
        )
    },
    getDataAsync: function(subject) {
        var val = $("#getDataAsyncData").val();
        wing.fbinstant.getDataAsync(
            {
                data: JSON.parse(val),
                success: function(res) {
                    util.showResult(subject, JSON.stringify(res))
                },
                fail: function (res) {
                    util.showResult(subject, JSON.stringify(res))
                }
            }
        )
    },
    setStatsAsync: function(subject) {
        var val = $("#setStatsAsyncData").val();
        var value2 = JSON.parse(val);
        wing.fbinstant.setStatsAsync({
            data: value2,
            complete: function (res) {
                console.log(JSON.stringify(res));
            },
            success: function(res) {
                util.showResult(subject, JSON.stringify(res))
            },
            fail: function (res) {
                util.showResult(subject, JSON.stringify(res))
            }
        })
    },
    flushDataAsync: function(subject) {
        wing.fbinstant.flushDataAsync({
            success: function(res) {
                util.showResult(subject, JSON.stringify(res))
            },
            fail: function (res) {
                util.showResult(subject, JSON.stringify(res))
            }
        })
    },
    incrementStatsAsync: function(subject) {
        var val = $("#incrementStatsAsyncData").val();
        var value2 = JSON.parse(val);
        wing.fbinstant.incrementStatsAsync({
            data: value2,
            complete: function (res) {
                console.log(JSON.stringify(res));
            },
            success: function(res) {
                util.showResult(subject, JSON.stringify(res))
            },
            fail: function (res) {
                util.showResult(subject, JSON.stringify(res))
            }
        })
    },
    getStatsAsync: function(subject) {
        var val = $("#getStatsAsyncData").val();
        wing.fbinstant.getStatsAsync({
            data: JSON.parse(val),
            complete: function (res) {
            console.log(JSON.stringify(res))
            },
            success: function(res) {
                util.showResult(subject, JSON.stringify(res))
            },
            fail: function (res) {
                util.showResult(subject, JSON.stringify(res))
            }
        })
    },
    getConnectedPlayersAsync: function(subject) {
        wing.fbinstant.getConnectedPlayersAsync(
            {
                complete: function (res) {
                    console.log(JSON.stringify(res));
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
    ////////////////////玩家信息结束//////////////////////
}