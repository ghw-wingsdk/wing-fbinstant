var shortcut = {
    ////////////////////截屏开始//////////////////////  
    /*
     * 判断玩家是否可以截屏
     */
    canCreateShortcutAsync: function(){
        console.log("wing.fbinstant.canCreateShortcutAsync function will be called...");
        wing.fbinstant.canCreateShortcutAsync(
            {
                success: function(result) {
                    //处理成功结果
                    util.showResult("判断玩家是否可以截屏", "返回成功,结果数据:"+JSON.stringify(result));
                },
                fail: function(result) {
                    //处理失败结果
                    util.showResult("判断玩家是否可以截屏", "返回失败,结果数据:"+JSON.stringify(result));
                }
            }
        );
        console.log("wing.fbinstant.canCreateShortcutAsync function called...");
        // FBInstant.canCreateShortcutAsync().then(function(canCreateShortcut) {
        // if (canCreateShortcut) {
        //     util.showResult("判断玩家是否可以截屏", "返回成功");
        //     FBInstant.createShortcutAsync().then(function() {
        //         // Shortcut created
        //     }).catch(function() {
        //         // Shortcut not created
        //     });
        // }
        //});
    },

    /*
     * 提示玩家创建截屏
     */
    createShortcutAsync: function(){
        console.log("wing.fbinstant.createShortcutAsync function will be called...");
        wing.fbinstant.createShortcutAsync(
            {
                success: function(result) {
                    //处理成功结果
                    util.showResult("提示玩家创建截屏", "返回成功,结果数据:"+JSON.stringify(result));
                },
                fail: function(result) {
                    //处理失败结果
                    util.showResult("提示玩家创建截屏", "返回失败,结果数据:"+JSON.stringify(result));
                }
            }
        );
        console.log("wing.fbinstant.createShortcutAsync function called...");
        
    }
    ////////////////////截屏开始//////////////////////
}