//创建一个文章类别的对象，将所有关于用户的方法都提取封装起来
var category = {
    show: function(callBack) {
        $.get(APIURL.category_show, function(res) {
            callBack(res)
        })
    }
}