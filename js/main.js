cookieExpire = new Date();
cookieExpire.setMonth(cookieExpire.getMonth() + 10);

class Require{
    constructor(){
        this.myurl = "";
    }
    baseUrl(a){
        this.myurl += a;
    }
    path(a){
        var html = '<script type="text/javascript" ';
        html += 'src="'+(this.myurl)+a+'.js?version=1" ></';
        html += 'script>'
        document.write(html)
    }
    link(a){
        var html = '<script type="text/javascript" ';
        html += 'src="'+a+'" ></';
        html += 'script>'
        document.write(html)
    }
}
var start = new Require();
start.baseUrl("js/");
// panggil javascript
start.path("jquery/jquery-3.4.1.min");

var firebase = new Require();
firebase.baseUrl("firebase/");
// panggil javascript
firebase.path("firebase");


// font awesome
var second = new Require();
second.baseUrl("fontawesome/");
second.path("js/all");

// second
var second = new Require();
second.baseUrl("sammy/");
second.path("lib/sammy");

// plugin
var plugin = new Require();
plugin.baseUrl("plugin/");
plugin.path("div");
plugin.path("input");
plugin.path("link");
plugin.path("list");
plugin.path("table");

// pages
var third = new Require();
third.baseUrl("pages/");
third.path("app");
third.path("home");