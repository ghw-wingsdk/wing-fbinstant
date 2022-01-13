var ad = {
    preloadInterstitialAds: function(){
    //        FBInstant.getInterstitialAdAsync(
    //            '2104357116455024_2106824926208243'
    //        ).then(function(interstitial) {
    //            // Load the Ad asynchronously
    //            preloadedInterstitial = interstitial;
    //            return preloadedInterstitial.loadAsync();
    //        }).then(function() {
    //            console.log('Interstitial preloaded')
    //            preload = true
    //        }).catch(function(err){
    //            console.error('Interstitial failed to preload: ' + err.message);
    //        });
        wing.fbinstant.getInterstitialAdAsync({
            success: function () {
                demo.preload = true
            },
        })
    },
    
    preloadRewardedAds: function() {
    //        FBInstant.getRewardedVideoAsync(
    //            '2104357116455024_2106936459530423'
    //        ).then(function(rewarded) {
    //            // Load the Ad asynchronously
    //            console.log('start Rewarded video preload');
    //            preloadedRewardedVideo = rewarded;
    //            return preloadedRewardedVideo.loadAsync();
    //        }).then(function() {
    //            console.log('Rewarded video preloaded');
    //            rewar_preload = true
    //        }).catch(function(err){
    //            console.error('Rewarded video failed to preload: ' + err.message);
    //        });
        wing.fbinstant.getRewardedVideoAsync({
            success: function () {
                demo.rewar_preload = true
            },
        })
    },

    play_ads: function() {
        if (demo.preload) {
        //            preloadedInterstitial.showAsync()
        //                .then(function () {
        //                    // Perform post-ad success operation
        //                    console.log('Interstitial ad finished successfully');
        //                    preload = false
        //                    preloadInterstitialAds()
        //                })
        //                .catch(function (e) {
        //                    console.error(e.message);
        //                });

            wing.fbinstant.showInterstitialAdAsync({
                success: function () {
                    demo.preload = false;
                    preloadInterstitialAds()
                }
            });
        } else {
            util.showResult("播放广告", "广告未加载完毕无法播放！")
        }
    },
    
    play_reward_ads: function() {
        if (demo.rewar_preload) {
    //            preloadedRewardedVideo.showAsync()
    //                .then(function() {
    //                    // Perform post-ad success operation
    //                    console.log('Rewarded video watched successfully');
    //                    rewar_preload = false;
    //                    preloadRewardedAds()
    //                })
    //                .catch(function(e) {
    //                    console.error(e.message);
    //                });
            wing.fbinstant.showRewardedVideoAsync({
                success: function () {
                    demo.rewar_preload = false;
                    preloadRewardedAds();
                }
            });
        } else {
            util.showResult("播放广告", "奖励视频广告未加载完毕无法播放!")
        }
    },

    showBannerAdAsync: function () {
        var obj = {
            success: function (result) {
                util.showResult( "显示广告成功",JSON.stringify(result))
            },
            fail: function (result) {
                //处理失败结果
                util.showResult("播放广告", "banner广告未加载完毕无法播放")
            }
        };
        wing.fbinstant.showBannerAdAsync(obj);

    },

    hideBannerAdAsync: function () {
        var obj = {
            success: function (result) {
                util.showResult( "隐藏广告成功",JSON.stringify(result))
            },
            fail: function (result) {
                //处理失败结果
                util.showResult("隐藏广告", "banner广告未加载完毕无法隐藏")
            }
        };
        wing.fbinstant.hideBannerAdAsync(obj);

    }
}