var bindAcct = {
    /**
     * 聚合账号绑定
     */   
    bindAcctAggr: function(){
        wing.fbinstant.bind.binds({
            success: function(result){
                console.log("绑定成功");
                util.showResult('绑定', '成功');
            },
            fail: function(result){
                console.log("失败");
                //util.showResult('绑定', '绑定失败');
            }
        });
    },

    /**
     * 账号绑定
     */   
    bindAcct: function(){
        wing.fbinstant.bind.bindModal({
            success: function(result){
                console.log("绑定成功:"+JSON.stringify(result));
                util.showResult('绑定成功', JSON.stringify(result));
            },
            fail: function(result){
                console.log("绑定失败:"+JSON.stringify(result));
                //util.showResult('绑定', '绑定失败');
            }
        });
    },

    /**
     * 解绑账号
     */   
    unbindAcct: function(){
        wing.fbinstant.bind.unbindModal({
            success: function(result){
                console.log("解绑成功:"+JSON.stringify(result));
                util.showResult('解绑成功', JSON.stringify(result));
            },
            fail: function(result){
                console.log("解绑失败:"+JSON.stringify(result));
                //util.showResult('解绑', '解绑失败');
            }
        });
    },

    /**
     * 账号切换
     */   
    switchAcct: function(){
        wing.fbinstant.bind.switchModal({
            success: function(result){
                console.log("切换成功:"+JSON.stringify(result));
                util.showResult('切换成功:', JSON.stringify(result));
            },
            fail: function(result){
                console.log("切换失败");
                //util.showResult('切换', '切换失败');
            }
        });
    },

    /**
     * 账号选择
     */   
    chooseAcct: function(){
        wing.fbinstant.bind.selectAccountModal({
            success: function(){
                console.log("切换成功");
                util.showResult('切换', '切换成功');
            },
            fail: function(){
                console.log("切换失败");
                //util.showResult('切换', '切换失败');
            }
        });
    }
}