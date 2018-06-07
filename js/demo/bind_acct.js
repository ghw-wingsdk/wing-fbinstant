var bindAcct = {
    /**
     * 聚合账号绑定
     */   
    bindAcctAggr: function(){
        wing.fbinstant.bind.binds({
            success: function(){
                console.log("绑定成功");
                util.showResult('绑定', '成功');
            },
            fail: function(){
                console.log("失败");
                //util.showResult('绑定', '绑定失败');
            },
            complete: function(){
                console.log("绑定");
                //util.showResult('绑定', '绑定');
            }
        });
    },

    /**
     * 账号绑定
     */   
    bindAcct: function(){
        wing.fbinstant.bind.bindModal({
            success: function(){
                console.log("绑定成功");
                util.showResult('绑定', '绑定成功');
            },
            fail: function(){
                console.log("绑定失败");
                //util.showResult('绑定', '绑定失败');
            },
            complete: function(){
                console.log("绑定");
                //util.showResult('绑定', '绑定');
            }
        });
    },

    /**
     * 解绑账号
     */   
    unbindAcct: function(){
        wing.fbinstant.bind.unbindModal({
            success: function(){
                console.log("解绑成功");
                util.showResult('解绑', '解绑成功');
            },
            fail: function(){
                console.log("解绑失败");
                //util.showResult('解绑', '解绑失败');
            },
            complete: function(){
                console.log("解绑");
                //util.showResult('解绑', '解绑');
            }
        });
    },

    /**
     * 账号切换
     */   
    switchAcct: function(){
        wing.fbinstant.bind.switchModal({
            success: function(){
                console.log("切换成功");
                util.showResult('切换', '切换成功');
            },
            fail: function(){
                console.log("切换失败");
                //util.showResult('切换', '切换失败');
            },
            complete: function(){
                console.log("切换");
                //util.showResult('切换', '切换');
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
            },
            complete: function(){
                console.log("切换");
                //util.showResult('切换', '切换');
            }
        });
    }
}