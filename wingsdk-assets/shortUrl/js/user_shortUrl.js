(function() {

    loadData()

    let popClose = document.getElementById("pop_close")
    popClose.onclick = function() {
        modalPostMessage('')
    }

    if(ClipboardJS.isSupported()) {
        let clipboard = new ClipboardJS("#btn_copy");
        let copyMsg = document.getElementById("cp_copy_msg")

        clipboard.on('success', function(e) {
            e.clearSelection();
            if(e.text) {
                copyMsg.setAttribute("style","opacity: 1;");
                copyKey();
            }
        });
    }
})()


function modalPostMessage(action,value) {
    let a = window.parent;//中转，避免facebook小游戏上传报请勿使用私有api的错误
    a.postMessage('{"action":"'+action+'","value":"'+value+'"}', "*"); //*允许跨域
}

function getQueryString(name) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    let r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

function loadData() {
    let shortUrlData = getQueryString("shortUrlData");
    let shortUrl = document.getElementById("short_url")
    let shortUrlContext = document.getElementById("short_url_context")

    if(shortUrlData) {
        shortUrlData = decodeURIComponent(window.atob(shortUrlData))   // 解码
        let data = JSON.parse(shortUrlData);
        shortUrl.innerHTML = data.cgUrl;
        shortUrlContext.innerHTML = data.bindCGMsg;
    }
}

function copyKey() {
    let copySucc = document.getElementById("cp_copy_msg")
    let btnCopy = document.getElementById("btn_copy")

    let a = 1;
    let timer = setInterval(function () {
        a -= 0.03;
        if (a <= 0) {
            a = 0;
            clearInterval(timer);
        }
        if (a > 0) {
            btnCopy.setAttribute("style","pointer-events:none")   // 添加不能点击样式
        } else if (copySucc.style.opacity='0') {
            btnCopy.removeAttribute("style","pointer-events:none")  // 移除不能点击样式
        }
        copySucc.style.opacity = a;
    }, 50)
}