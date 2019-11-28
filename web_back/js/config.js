// 将全局的基地址提取出来
var baseURL = 'http://localhost:8000/';
// 将接口地址作为一个对象 把所有的接口集中起来
var APIURL = {
    user_login: baseURL + 'admin/login',
    user_getInfo: baseURL + 'admin/getuser',
    user_logOut: baseURL + 'admin/logout',

    category_show: baseURL + 'admin/category_search',
    category_add: baseURL + 'admin/category_add',
    category_edit: baseURL + 'admin/category_edit',
    category_del: baseURL + 'admin/category_delete',

    article_show: baseURL + 'admin/search',
    article_del: baseURL + 'admin/article_delete',
    article_add: baseURL + 'admin/article_publish',
    article_edit: baseURL + 'admin/article_edit',
}