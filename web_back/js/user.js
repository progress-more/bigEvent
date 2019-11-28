//创建一个用户对象，将所有关于用户的方法都提取封装起来 
var user = {
    login: function(myName, myPassword, callBack) {
        $.post(APIURL.user_login, {
            user_name: myName,
            password: myPassword
        }, function(res) {
            // 由于把用户作为对象后 在对象的方法里再做操作太过麻烦 所以在这只发请求 回来的数据在调用中处理
            console.log(res);
            callBack(res);
        })
    },
    getInfo: function(callBack) {
        $.get(APIURL.user_getInfo, function(res) {
            console.log(res);
            callBack(res);
        })
    },
    logOut: function(callBack) {
        $.post(APIURL.user_logOut, function(res) {
            console.log(res);
            callBack(res);
        })
    }
}