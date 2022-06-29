var shortUrlUI = {
    /**
     * 短链模块能够调用短链接口
     */   
     canGetBindAccountUrlUI: function(){
        if(wing.fbinstant.canGetBindAccountUrl()) {
            util.showResult("短链模块", "能够调用短链接口")
        } else {
            util.showResult("短链模块", "未开启，不能调用短链接口")
        }
    },

    /**
     * 获取短链
     */   
    getBindAccountUrlUI: function () {
         
        var obj = {
            success: function(result){
                util.showResult('短链获取成功', JSON.stringify(result));
            },
            fail: function(result){
                util.showResult("短链获取失败", JSON.stringify(result))
            }
        }
        wing.fbinstant.getBindAccountUrlUI(obj);
    }

}