//创建一个文章的对象，将所有关于用户的方法都提取封装起来
var article = {
    show: function(curPage, type, state, callBack) {
        $.get(APIURL.article_show, {
                page: curPage,
                state: state,
                type: type
            },
            function(res) {
                callBack(res);
            })
    },
    getDetail: function(id, callBack) {
        $.get(APIURL.article_show, {
                id: id
            },
            function(res) {
                callBack(res)
            })
    },
    del: function(id, callBack) {
        $.get(APIURL.article_del, {
                id: id
            },
            function(res) {
                callBack(res);
            })
    },
    add: function(fd, callBack) {
        $.ajax({
            url: APIURL.article_add,
            type: 'post',
            data: fd,
            // 用form表单传递数据时 请求需用复杂方法 且将默认的process-data 和 content-type 都取消掉
            processData: false,
            contentType: false,
            success: function(res) {
                callBack(res);
            }
        })
    },
    edit: function(fd, callBack) {
        $.ajax({
            url: APIURL.article_edit,
            type: 'post',
            data: fd,
            // 用form表单传递数据时 请求需用复杂方法 且将默认的process-data 和 content-type 都取消掉
            processData: false,
            contentType: false,
            success: function(res) {
                callBack(res);
            }
        })
    }

}