var comment = {
    add: function(name, content, article_id, callBack) {

        $.post(APIURL.comment_add, {
                name,
                content,
                article_id
            },
            function(res) {

                callBack(res);
            })
    },
    get: function(id, callBack) {
        $.get(APIURL.comment_get, {
                article_id: id,
            },
            function(res) {
                callBack(res);
            })
    }
}