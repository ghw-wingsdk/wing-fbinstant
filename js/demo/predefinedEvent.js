var predefinedEvent = {

    clipboard: null,
    //点击购买的时候调用（用于游戏内部虚拟交易统计）
    ghwInitiatedPurchase: function () {
        var createobj = $("#ghw_initiated_purchaseData").val();
        var obj =
        {
            data: JSON.parse(createobj),
            success: function (res) {
                util.showResult(res, "点击购买成功")
            },
            fail: function (result) {
                //处理失败结果
                util.showResult("点击购买失败", "返回失败,结果数据:" + JSON.stringify(result));
            }
        };
        wing.fbinstant.logEvent(obj);
    },

    //购买完成的时候调用(用于游戏内部虚拟交易统计)
    ghwPurchase: function () {
        var createobj = $("#ghw_purchaseData").val();
        var obj =
        {
            success: function (res) {
                util.showResult(res, "购买成功")
            },
            fail: function (result) {
                //处理失败结果
                util.showResult("购买失败", "返回失败,结果数据:" + JSON.stringify(result));
            },
            data: JSON.parse(createobj),
        };
        wing.fbinstant.logEvent(obj);

    },



    // 统计玩家等级增长事件，达到等级时调用
    ghwLevelAchieved: function () {
        var createobj = $("#ghw_level_achievedData").val()
        var obj =
        {
            data: JSON.parse(createobj),
            success: function (res) {
                util.showResult(res, "统计成功")
            },
            fail: function (result) {
                //处理失败结果
                util.showResult("统计失败", "返回失败,结果数据:" + JSON.stringify(result));
            },
        };
        wing.fbinstant.logEvent(obj);

    },


    //创建游戏角色，游戏角色创建时调用
    ghwUserCreate: function () {
        var createobj = $("#ghw_user_createData").val()
        var obj =
        {
            success: function (res) {
                util.showResult(res, "创建角色成功")
            },
            fail: function (result) {
                //处理失败结果
                util.showResult("创建角色失败", "返回失败,结果数据:" + JSON.stringify(result));
            },
            data: JSON.parse(createobj)
        };
        wing.fbinstant.logEvent(obj);

    },

    //更新用户信息
    ghwUserInfoUpdate: function () {
        var createobj = $("#ghw_user_info_updateData").val()
        var obj =
        {
            success: function (result) {
                util.showResult(res, "更新用户信息成功")
            },
            fail: function (result) {
                //处理失败结果
                util.showResult("更新用户信息失败？", "返回失败,结果数据:" + JSON.stringify(result));
            },
            data: JSON.parse(createobj)
        };
        wing.fbinstant.logEvent(obj);

    },



    //玩家货币状况变更统计
    ghwGoldUpdate: function () {
        var createobj = $("#ghw_gold_updateData").val()
        var obj =
        {
            success: function (result) {
                util.showResult(res, "玩家货币状况变更统计成功")
            },
            fail: function (result) {
                //处理失败结果
                util.showResult("玩家货币状况变更统计失败？", "返回失败,结果数据:" + JSON.stringify(result));
            },
            data: JSON.parse(createobj)
        };
        wing.fbinstant.logEvent(obj);

    },


    //玩家任务信息统计
    ghwTaskUpdateData: function () {
        var createobj = $("#ghw_task_updateData").val()
        var obj =
        {
            success: function (result) {
                util.showResult(res, "玩家任务信息统计成功")
            },
            fail: function (result) {
                //处理失败结果
                util.showResult("玩家任务信息统计失败？", "返回失败,结果数据:" + JSON.stringify(result));
            },
            data: JSON.parse(createobj)
        };
        wing.fbinstant.logEvent(obj);

    },


    //导入用户事件，玩家第一次进某个服时调用
    ghwUserImport: function () {
        var createobj = $("#ghw_user_importData").val()
        var obj =
        {
            success: function (result) {
                util.showResult(res, "导入用户事件成功")
            },
            fail: function (result) {
                //处理失败结果
                util.showResult("导入用户事件失败？", "返回失败,结果数据:" + JSON.stringify(result));
            },
            data: JSON.parse(createobj)
        };
        wing.fbinstant.logEvent(obj);

    },


    //自定义事件
    ghwSelfCustomEvent: function () {
        var createobj = $("#ghw_self_customEventData").val()
        var obj =
        {
            success: function (result) {
                util.showResult(res, "自定义事件成功")
            },
            fail: function (result) {
                //处理失败结果
                util.showResult("自定义事件失败？", "返回失败,结果数据:" + JSON.stringify(result));
            },
            data: JSON.parse(createobj)
        };
        wing.fbinstant.logEvent(obj);

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