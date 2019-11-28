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
    getFiveFocus: function(callBack) {
        $.get(APIURL.article_show, {
                perpage: 5,
                state: '已发布'
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
}