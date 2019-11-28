// 将全局的基地址提取出来
var baseURL = 'http://localhost:8000/';
// 将接口地址作为一个对象 把所有的接口集中起来
var APIURL = {
    category_show: baseURL + 'admin/category_search',

    article_show: baseURL + 'admin/search',

    comment_add: baseURL + 'post_comment',
    comment_get: baseURL + 'get_comments',

}