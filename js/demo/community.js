var community = {
    
    // 检测用户是否可以关注官方主页
    canFollowOfficialPageAsync: function () {
        
        wing.fbinstant.canFollowOfficialPageAsync(
            {
                success: function(result) {
                    util.showResult("可以关注", "返回成功,结果数据:" + JSON.stringify(result))
                },
                fail: function(result) {
                    //处理失败结果
                    util.showResult("不能关注", "返回失败,结果数据:" + JSON.stringify(result))
                }
            }
        );
    },

    // 关注官方主页
    followOfficialPageAsync: function() {

        wing.fbinstant.followOfficialPageAsync(
            {
                success: function(result) {
                    util.showResult("关注成功", "返回成功,结果数据:" + JSON.stringify(result))
                },
                fail: function(result) {
                    //处理失败结果
                    util.showResult("关注失败", "返回失败,结果数据:" + JSON.stringify(result))
                }
            }
        );
    },

    // 检测用户是否可以加入官方游戏组
    canJoinOfficialGroupAsync: function () {
        
        wing.fbinstant.canJoinOfficialGroupAsync(
            {
                success: function (result) {
                    util.showResult("可以加入", "返回成功,结果数据:" + JSON.stringify(result))
                },
                fail: function (result) {
                    //处理失败结果
                    util.showResult("不能加入", "返回失败,结果数据:" + JSON.stringify(result))
                }
            }
        );
    },

    // 加入官方游戏组
    joinOfficialGroupAsync: function () {

        wing.fbinstant.joinOfficialGroupAsync(
            {
                success: function (result) {
                    util.showResult("加入成功", "返回成功,结果数据:" + JSON.stringify(result))
                },
                fail: function (result) {
                    //处理失败结果
                    util.showResult("加入失败", "返回失败,结果数据:" + JSON.stringify(result))
                }
            }
        );
    }

}
