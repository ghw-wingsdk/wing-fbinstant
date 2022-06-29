var demo = {}
/*****************************************common begin*****************************************/
$(function(){
    //初始化数据
    var config = {
        // 测试环境
        // appId: 'testLogin',
        // appKey: 'abc',

        //生产环境
        appId: '9910e8038a0e11ecb0e902c85f0429f5',
        appKey: 'oHg7c7pWGpiLt1pmZRLekda5ZN8YTWJN',

        sdkType: 'fbinstant',
        platform: 'fbinstant',
        debug: true,
        logSize: 200,
        success:function(data){
            console.log("初始化success======")
            util.showResult(wing.fbinstant.getPlayerID() + "初始化完成", JSON.stringify(data));

            wing.fbinstant.payOnReady(function(){
                console.log("支付环境可用");
                demo.isPayOnReady = true;
            });
            console.log("wing.fbinstant.payOnReady called...");

            ad.preloadRewardedAds();
            ad.preloadInterstitialAds();

        }
    };

    //模拟游戏进度条
    var progress = 0;
    var intervalProgress = setInterval(function () {
        progress += 20
        wing.fbinstant.setLoadingProgress(progress);
        console.log('进度...'+progress)
        if (progress === 100) {
            clearInterval(intervalProgress);
        }
    }, 600);

    wing.init(config);

    demo.preload = false;
    demo.preloadedInterstitial = null;
    demo.rewar_preload = false;
    demo.preloadedRewardedVideo = null;
    demo.isPayOnReady = false;

    demo.canPurchase = false;
    // wing.fbinstant.initializeAsync({data:
    //     "hellonicetomeetyou", success: function (data) {
        // util.showResult(wing.fbinstant.getPlayerID() + "初始化完成", JSON.stringify(data));

    //     console.log("wing.fbinstant.payOnReady will be called...");
    //     wing.fbinstant.payOnReady(function(){
    //         console.log("支付环境可用");
    //         demo.isPayOnReady = true;
    //     });
    //     console.log("wing.fbinstant.payOnReady called...");

    //     ad.preloadRewardedAds();
    //     ad.preloadInterstitialAds();
    // }});




}),

/**to be deleted */
// demo.purchase = function(){
//     if (!demo.canPurchase) {
//         console.log("不支持支付")
//     }
//     FBInstant.payments.getCatalogAsync().then(function (catalog) {
//         var catalogObj = catalog;
//         console.log(catalog); // [{productID: '12345', ...}, ...]
//         var obj = catalog[0];

//         FBInstant.payments.purchaseAsync({
//             productID: obj.productID,
//             developerPayload: 'test'
//         }).then(function (purchase) {
//             console.log(purchase);
//             // {productID: '12345', purchaseToken: '54321', developerPayload: 'foobar', ...}
//         }).catch(function (e) {
//             console.log("支付报错")
//             console.log(e)
//         });
//     }).catch(function (e) {
//         console.log("获取商品报错")
//         console.log(e)
//     });
// }
/**end */

/*****************************************common end*****************************************/

/*****************************************login begin*****************************************/

/*****************************************login end*****************************************/

/*****************************************pay begin*****************************************/

//获取商品成功回调

/*****************************************pay end*****************************************/

/*****************************************context info begin*****************************************/
$(function(){
    $("#context_info").load('./html/context_info.html');
})
/*****************************************context info end*****************************************/

/*****************************************player info begin*****************************************/
$(function(){
    $("#player_info").load('./html/player_info.html');
})
/*****************************************player info end*****************************************/

/*****************************************common begin*****************************************/
$(function(){
    $("#common_function").load('./html/common_function.html');
})
/*****************************************common end*****************************************/

/*****************************************pay begin*****************************************/
$(function(){
    $("#payment").load('./html/payment.html');
})
/*****************************************pay end*****************************************/

/*****************************************subscribe begin*****************************************/
$(function(){
    $("#subscribe").load('./html/subscribe.html');
})
/*****************************************subscribe end*****************************************/

/*****************************************shortcut begin*****************************************/
$(function(){
    $("#shortcut").load('./html/shortcut.html');
})
/*****************************************shortcut end*****************************************/

/*****************************************match begin*****************************************/
$(function(){
    $("#match").load('./html/match.html');
})
/*****************************************match end*****************************************/

/*****************************************leaderboard begin*****************************************/
$(function(){
    $("#leaderboard").load('./html/leaderboard.html');
})
/*****************************************leaderboard end*****************************************/

/*****************************************switch game begin*****************************************/
$(function(){
    $("#switch_game").load('./html/switch_game.html');
})
/*****************************************switch game end*****************************************/

/*****************************************device begin*****************************************/
$(function(){
    $("#device").load('./html/device.html');
})
/*****************************************device end*****************************************/

/*****************************************bind accout begin*****************************************/
$(function(){
    $("#bind_acct").load('./html/bind_acct.html');
})
/*****************************************bind account end*****************************************/

/*****************************************tournament begin*****************************************/
$(function(){
    $("#tournament").load('./html/tournament.html');
})
/*****************************************tournament end*****************************************/

/*****************************************predefinedEvent begin*****************************************/
$(function () {
    $("#predefinedEvent").load('./html/predefinedEvent.html');
})
/*****************************************predefinedEvent end*****************************************/

/*****************************************shorturl begin*****************************************/
$(function () {
    $("#shorturl_ui").load('./html/shorturl_ui.html');
})
/*****************************************shorturl end*****************************************/
