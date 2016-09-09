var env = $("meta[name=env]").attr("content") || "product";

var debug = false,local_flag = false;
var hym_domain;
var api_url;
var local_domain = "https://local.whale.haoyunma.com";
var hymDomain=document.domain;

var envs={
    "${env}":function(){
        debug = true;
        local_flag = true;
        hym_domain = api_url =  "http://h5new.test.haoyunma.com";
    },
    "dev":function(){
        debug = false;
        local_flag = false;
        hym_domain = api_url = "http://localhost:8080";
    },
    "test":function(){
        debug = true;
        local_flag = false;
        hym_domain = api_url = "http://"+hymDomain;
    },
    "product":function(){
        debug = false;
        local_flag = false;
        hym_domain = api_url = "https://"+hymDomain;
    }
};
(envs[env])();
var imgHost = 'https://meiyue-dayima-com.alikunlun.com/';

var api = $.network({
    'getActiveAddress': {url: '/userAddressInfo/getAddressInfoAllByUId', type: 'POST', dataType: 'json'},
    'saveActiveAddress': {url: '/userAddressInfo/refAddressInfo', type: 'POST', dataType: 'json'},
    'area': {url: '/userAddressInfo/getChinaAreaByupId', type: 'POST', dataType: 'json'}

}, {
    local_flag:local_flag,
    debug: debug,
    isJson: false,
    develoment_url: [api_url, ""],				//开发模式
    product_url: [api_url, ""]			            //生产模式
});