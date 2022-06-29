var device = {

    clipboard: null,
    getDeviceInfo: function(){

        //显示对话框
        $('#device').modal('show');

        //避免注册多个事件
        var that = this;
        $('#device').on('hidden.bs.modal', function () {
            if(that.clipboard){
                that.clipboard.destroy();
            }
        })

        //激活按钮的提示功能
        $('#client_id_copy').tooltip({
            trigger: 'click',
            placement: 'bottom'
        });

        // new ClipboardJS('#client_id_copy');
        var that = this;
        that.clipboard = new ClipboardJS('#client_id_copy', {
            text: function(trigger) {
                // return trigger.getAttribute('aria-label');
                that.showTooltip();
                // that.hideTooltip();
            }
        });

        var clientId = localStorage.getItem("ghw_wing_client_id");
        if(!clientId){
            clientId = util.getCookie("ghw_wing_client_id");
        }

        $("#client_id").text(clientId);
    },

    showTooltip: function(message) {
        // $('#client_id_copy').tooltip('hide')
        //     .attr('data-original-title', message)
        //     .tooltip('show');
        $('#client_id_copy')
            // .tooltip('hide')
            // .attr('title', message)
            .tooltip('show');
        this.hideTooltip();
    },
      
    hideTooltip: function() {
        setTimeout(function() {
          $('#client_id_copy').tooltip('hide');
        }, 2000);
    }

}