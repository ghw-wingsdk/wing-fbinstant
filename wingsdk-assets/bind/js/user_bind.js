/**
 * Created by zhihu on 2018/5/4.
 */
var openMessageFlag = false,bindTokenMain,bindTokenSuccessMain,selectAccountMain,unbindMain,unbindConfirmMain,unbindSuccessMain,changeConfirmMain,changeSuccessMain,userFlag,leadMain;
var currImgIndex=0,defaultImg;
$(function(){
    bindTokenMain=$("#bind_token_main");
    bindTokenSuccessMain=$("#bind_token_success_main");
    selectAccountMain=$("#select_account_main");
    unbindMain=$("#unbind_main");
    unbindConfirmMain=$("#unbind_confirm_main");
    unbindSuccessMain=$("#unbind_success_main");
    changeConfirmMain=$("#change_confirm_main");
    changeSuccessMain=$("#change_success_main");
    leadMain=$("#lead-page");
    loadData()
    $(".pop_close,#change_confirm_close").click(function (){
        modalPostMessage('')
    });


    $('#input_bind_token').bind('input propertychange', function() {
        if($("#input_bind_token").val()){
            $("#clear_btn").show();
            $("#bind_token").attr("class","pop_record_bind_btn_e");
        }else {
            $("#clear_btn").hide();
            $("#bind_token").attr("class","pop_record_bind_btn_d");
        }
        $("#error_div").attr("style","opacity: 0;");
    });

    $("#clear_btn").click(function (){
        $("#clear_btn").hide();
        $("#error_div").attr("style","opacity: 0;");
        $("#input_bind_token").val("");
        $("#bind_token").attr("class","pop_record_bind_btn_d");
    });

    $("#bind_token").click(function (){
        var bindToken = $("#input_bind_token").val();
        if(bindToken){
            modalPostMessage('bind',bindToken);
            getMessage();
        }else {
            //showError("token null");
        }
    });

    $("#bind_success_confirm").click(function (){
        modalPostMessage('bindConfirm',"");
    });

    $("#select_account").click(function (){
        var ckUserIdItem = document.getElementsByName("account"),ckItem;
        for(var i=0;i<ckUserIdItem.length;i++) {
            if (ckUserIdItem[i].checked) {
                ckItem =ckUserIdItem[i].value;
            }
        }
        if(!ckItem){
            return;
        }
        modalPostMessage('account',ckItem+':'+$("#showagain").is(':checked'))
    });
    $("#unbind").click(function (){
        modalPostMessage('unbind',1)
        getMessage();
    });
    $("#change").click(function (){
        modalPostMessage('change',1)
        getMessage();
    });

    if(ClipboardJS.isSupported()){
        var clipboard = new ClipboardJS('#cp_token_btn');

        clipboard.on('success', function(e) {
            e.clearSelection();
            if(e.text){
                $("#cp_token_msg").attr("style","opacity: 1;");
                copyKey();
            }
        });

        clipboard.on('error', function(e) {
            console.error('not supported')
            console.error('Action:', e.action);
            console.error('Trigger:', e.trigger);
        });
    }else {
        $("#cp_token_btn").click(function (){
            if(window.clipboardData){
                window.clipboardData.clearData();
                window.clipboardData.setData("Text", $("#get_bind_token").val());
                $("#cp_token_msg").attr("style","opacity: 1;");
                copyKey();
            }else{
                alert('Please copy it manually！')
            }
        });
    }

    $("#lead_btn").click(function (){
        showLeadPage();
    });
    $("#lead-page img").click(function (){
        var img = $("#lead-page img")[0];
        currImgIndex++;
        if(currImgIndex>5){
            currImgIndex=0
            leadMain.hide();
            bindTokenMain.show();
            img.src = defaultImg;
            return;
        }
        img.src = img.src.substring(0,img.src.lastIndexOf(currImgIndex))+(img.src.substring(img.src.lastIndexOf(currImgIndex),img.src.length).replace(currImgIndex,currImgIndex+1))
    });
})

function showLeadPage(){
    bindTokenMain.hide();
    leadMain.show();
    var img = $("#lead-page img")[0];
    defaultImg=img.src;
}

function showError(msg) {
    $("#error_msg").html(msg);
    $("#error_div").attr("style","opacity: 1;");
}

function showUnbindConfirm() {
    unbindMain.hide();
    unbindConfirmMain.show();
}
function showUnbindReturn() {
    unbindConfirmMain.hide();
    unbindMain.show();
}

function reloadSdk() {
    modalPostMessage('reload',1);
}

function changeAccount() {
    unbindMain.hide();
    if(0==userFlag){
        $("#change_new").show();
    }
    if(1==userFlag){
        $("#change_old").show();
    }
    changeConfirmMain.show();
}

function modalPostMessage(action,value) {
    var a = window.parent;//中转，避免facebook小游戏上传报请勿使用私有api的错误
    a.postMessage('{"action":"'+action+'","value":"'+value+'"}', "*"); //*允许跨域
}

function getMessage() {
    //增加监听
    if(!openMessageFlag){
        window.addEventListener('message', function closeUserModal (event) {
            openMessageFlag = true;
            if(event.data){
                var resultData = event.data;
                if('bind' == resultData.action){
                    if(resultData.code==200){
                        bindTokenMain.hide();
                        bindTokenSuccessMain.show();
                    }else {
                        //showError(resultData.msg)
                        if(resultData.code==4018|| resultData.code==4050|| resultData.code==4033){
                            showError(resultData.msg);
                        }
                    }
                }else if('unbind'==resultData.action){
                    if(resultData.code==200){
                        unbindConfirmMain.hide();
                        unbindSuccessMain.show();
                    }else {
                        modalPostMessage('')
                    }
                }else if('change'==resultData.action){
                    if(resultData.code==200){
                        changeConfirmMain.hide();
                        changeSuccessMain.show();
                    }else {
                        modalPostMessage('')
                    }
                }
            }
        }, false);
    }

}

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

function loadData () {
    var pcdate = getQueryString("pcdate"),action=getQueryString("action");
    if(pcdate){
        pcdate = decodeURIComponent(window.atob(pcdate))
        var data;
        try{
            data = JSON.parse(pcdate);
        }catch (e){
            modalPostMessage('');
            return;
        }
        if(data.code==200){
            switch (action){
                case 'token':
                    $("#get_bind_token").val(data.bindToken);
                    if(cookie.read('open_bind_modal')){
                        bindTokenMain.show();
                    }else {
                        showLeadPage();
                        cookie.write('open_bind_modal', true, 365);
                    }
                    break;
                case 'bind':
                    bindTokenMain.show();
                    $("#bind_success").show();
                    break;
                case 'account':
                    var accountList = getAccountList(data);
                    $("#select_account_msg1").html(accountList.account1)
                    $("#select_account_msg2").html(accountList.account2)
                    if(1==data.userFlag){
                        $("#radio1").attr("checked",true);
                    }else {
                        $("#radio2").attr("checked",true);
                    }

                    selectAccountMain.show();
                    break;
                case 'unbind':
                    var accountList = getAccountList(data);
                    $("#unbind_account_msg1").html(accountList.account1)
                    $("#unbind_account_msg2").html(accountList.account2)
                    $("#change_new").html(accountList.account1)
                    $("#change_old").html(accountList.account2)
                    userFlag = data.userFlag;
                    if(userFlag==0){
                        $("#unbind_account_msg2").parent().find("input:radio").attr("checked",true);
                    }else {
                        $("#unbind_account_msg1").parent().find("input:radio").attr("checked",true);
                    }
                    unbindMain.show();
                    break;
                case 'change':
                    var accountList = getAccountList(data);
                    $("#change_new").html(accountList.account1)
                    $("#change_old").html(accountList.account2)
                    if(0==data.userFlag){
                        $("#change_new").show();
                    }else {
                        $("#change_old").show();
                    }
                    changeConfirmMain.show();
                    break;
            }
        }  else {
            if("bind" == action){
                if(data.code==4018|| data.code==4050|| data.code==4033){
                    bindTokenMain.show();
                    showError(data.msg);
                }
            }
        }
    }
}

function getAccountList(data) {
    var msg1,msg2;
    if("fbinstant"==data.userPlatform){
        msg2 = "Instant Game Account";
    }else {
        msg2 = "Chips Games Account";
    }
    if("fbinstant"==data.bindUserPlatform){
        msg1 = "Instant Game Account";
    }else {
        msg1 = "Chips Games Account";
    }
    if("true"==data.isBindUser){
        msg2 +="(New)";
    }else {
        msg1 +="(New)";
    }
    return {
        account1:msg1,
        account2:msg2
    }
}

function copyKey() {
    var copySucc = document.getElementById("cp_token_msg")
    var a = 1;
    var timer = setInterval(function () {
        a -= 0.03;
        if (a <= 0) {
            a = 0;
            clearInterval(timer);
        }
        copySucc.style.opacity = a;
    }, 50)
}

 var cookie = {
    write:function(name, value, days, domain, path) {
        var date = new Date();
        days = days || 30; // 默认30天
        path = path || '/';
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = '; expires=' + date.toGMTString();
        var cookieValue = name + '=' + value + expires + '; path=' + path;
        if (domain) {
            cookieValue += '; domain=' + domain;
        }
        document.cookie = cookieValue;
    },
    read:function(name) {
        var allCookie = '' + document.cookie;
        var index = allCookie.indexOf(name);
        if (name === undefined || name === '' || index === -1) return '';
        var ind1 = allCookie.indexOf(';', index);
        if (ind1 == -1) ind1 = allCookie.length;
        return unescape(allCookie.substring(index + name.length + 1, ind1));
    },
    remove:function(name) {
        if (this.read(name)) {
            this.write(name, '', -1, null, '/');
        }
    }
}