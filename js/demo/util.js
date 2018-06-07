var util = {
    /*****************************************common begin*****************************************/
    showResult: function(subject, msg){
        bootbox.alert({
            buttons: {  
            ok: {  
                    label: '关闭',  
                    className: 'btn-info'  
                }  
            },  
            message: "<p>"+subject+":"+msg+"</p>",
            callback: function() {
                //下面代码需要加，否则关闭弹出框之后无法滚动上一个窗口
                //参考：https://stackoverflow.com/questions/41891012/bootbox-modal-is-not-scrollable-after-a-second-modal-is-opened
                $('.bootbox.modal').on('hidden.bs.modal', function () {
                if($(".modal").hasClass('in')){
                        $('body').addClass('modal-open');
                    }
                })  
            }, 
            title: "测试结果"
        });
        //bootbox.alert("result:"+msg);
    },

    hideModal: function(modalId){
        $('#'+modalId).modal('hide');
    },
    
    showModal: function(modalId){
        $('#'+modalId).modal('show');
    },

    isJsonString: function(str) {  
        try {  
            if (typeof JSON.parse(str) == "object") {  
                return true;  
            }  
        } catch(e) {  
            return false;
        }  
        return false;  
    },

    getCookie: function(name,defaultValue) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
          return unescape(arr[2]);
        else
          return defaultValue;
    }

/*****************************************common end*****************************************/
}




