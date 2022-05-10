var shorturl = {

    canGetBindAccountUrl: function(){
        if(wing.fbinstant.canGetBindAccountUrl()){
            util.showResult("短链模块", "能够调用短链接口")
        }else{
            util.showResult("短链模块", "未开启，不能调用短链接口")
        }
    },
    
    getBindAccountUrl: function () {
        var obj = {
            success: function (result) {
                util.showResult( "短链获取成功",JSON.stringify(result))
            },
            fail: function (result) {
                //处理失败结果
                util.showResult("短链获取失败", JSON.stringify(result))
            }
        };
        wing.fbinstant.getBindAccountUrl(obj);

    },

    test:function(){

        if(wing.fbinstant.canGetBindAccountUrl()){
            var obj = {
                success: function (result) {
                    console.log("短链获取成功"+JSON.stringify(result))
                },
                fail: function (result) {
                    console.log("短链获取失败"+JSON.stringify(result))
                }
            };
            wing.fbinstant.getBindAccountUrl(obj);
        }else{
            console.log("未开启，不能调用短链接口")
        }
    }


}
