var payment = {
    ////////////////////支付开始//////////////////////    
    /*
     * 显示商品列表
     */
    showPayment: function(){
        
        // this.renderProducts();
        // util.showModal("payment");
        if(demo.isPayOnReady){
            this.renderProducts();
            util.showModal("payment");
        }else{
            util.showResult("获取商品列表", "支付不可用");
        }
    },

    isPayOnReady: false,

    /*
     * 渲染商品列表
     */
    renderProducts: function(){
        // var productListData = {
        //     "code": 200,
        //     "message": "Successful",
        //     "data": {
        //         "key": "productList",
        //         "productList": [{
        //             "title": "product001",
        //             "productId": "001",
        //             "description": "product 001",
        //             "imageURI": "http://www.gamehollywood.com/images/aboutus/brasil_ddtank.jpg",
        //             "price": "0.99",
        //             "priceCurrencyCode": "USD"
        //         },{
        //             "title": "product002",
        //             "productId": "002",
        //             "description": "product 002",
        //             "imageURI": "http://www.ddtankoficial.com.br/templet/webddt/images/ico.png",
        //             "price": "1.99",
        //             "priceCurrencyCode": "USD"
        //         }]
        //     }
        // }
        var that = this;
        wing.fbinstant.queryProducts(
            {
                success: function(result) {
                    //处理成功结果
                    if(result){
                        that.doRenderProducts(result);
                    }else{
                        util.showResult("获取商品列表", "获取商品列表为空");
                    }
                },
                fail: function(result) {
                    //处理失败结果
                    util.showResult("获取商品列表", "获取商品列表失败");
                }
          }
       );

        $("#payment_table >tbody").html(""); //先重置页面，否则会不断动态添加

    },

    doRenderProducts: function(productListData){
        if(productListData 
            && productListData.data 
            && productListData.data.productList
            && productListData.data.productList.length > 0){
                var prodList = productListData.data.productList;
                var thArray = $("#payment_table >thead >tr >th");
                //根据商品列表添加行，多少个商品就添加多少行
                for (var j = 0; j < prodList.length; j++) {
                    var trEl = document.createElement("tr");

                    //动态创建列，根据th的数量来动态创建列，列中的元素目前支持img，button和一般字符
                    for (var i = 0; i < thArray.length; i++) {
                        var tdEl = document.createElement("td");
                        tdEl.id = thArray[i].getAttribute("data-field")+"_"+j;
                        
                        var thDataType = thArray[i].getAttribute("data-type");
                        var elDataValue = thArray[i].getAttribute("data-field");
                        if(thDataType == "img"){
                            var imgEl = new Image();
                            console.log('=====',prodList[j][elDataValue])
                            imgEl.src = prodList[j][elDataValue];
                            imgEl.height = 30;
                            imgEl.width = 30;
                            tdEl.appendChild(imgEl);
                        }else if(thDataType == "button"){
                            var buttonEl = document.createElement("input");
                            buttonEl.type = "button";
                            buttonEl.value = "支付";
                            // 此处设置是为了点击按钮的时候能获取到改行对应的productId值
                            buttonEl.setAttribute("productId", "productId"+"_"+j);
                            var that = this;
                            that.j = j;
                            buttonEl.onclick = function(){
                                // 获取到改行对应的productId值
                                var productId = document.getElementById(this.getAttribute("productId")).innerText;
                                that.pay(productId);
                            };
                            buttonEl.setAttribute("class", "btn btn-success");
                            tdEl.appendChild(buttonEl);
                        }else{
                            tdEl.innerText = prodList[j][elDataValue];
                        }
                        
                        trEl.appendChild(tdEl);
                    }
                    $("#payment_table >tbody").append(trEl);
                }
        }
    },

    /*
     * 进行支付
     */
    pay: function(productId){
        console.log("---doing payment---"+productId);
        wing.fbinstant.pay(
            {
                productId: productId,
                payload: "---validation information---",
                    success: function(result) {
                        //处理成功结果
                        util.showResult("支付结果", "支付成功");
                    },
                    fail: function(result) {
						//处理失败结果
							util.showResult("支付结果", "支付失败");  
                    },
					cancel:function(result){
						//处理取消结果
						util.showResult("支付结果", "支付取消");
					}
                 }
            );

        // FBInstant.payments.purchaseAsync({
        //     productID: '6661110',
        //     developerPayload: 'foobar',
        //   }).then(function (purchase) {
        //     console.log(purchase);
        //     // util.showResult("支付结果");
        //     // {productID: '12345', purchaseToken: '54321', developerPayload: 'foobar', ...}
        //   }).catch(function(e) {
        //     console.log(e);
        //   });
            
    }
    ////////////////////支付结束//////////////////////
}