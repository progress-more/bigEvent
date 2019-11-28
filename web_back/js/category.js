//创建一个文章类别的对象，将所有关于用户的方法都提取封装起来
var category = {
    show: function(callBack) {
        $.get(APIURL.category_show, function(res) {
            callBack(res)
        })
    },
    del: function(id, callBack) {
        $.post(APIURL.category_del, { 'id': id }, function(res) {
            callBack(res);
        })
    },
    add: function(name, slug, callBack) {
        $.post(APIURL.category_add, { 'name': name, 'slug': slug }, function(res) {
            callBack(res);
        })
    },
    edit: function(id, name, slug, callBack) {
        $.post(APIURL.category_edit, {
            id: id,
            name: name,
            slug: slug
        }, function(res) {
            callBack(res);
        })
    },

}