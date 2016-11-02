(function ($) {
    $.network = function (requestConfig, global) {
        var config = {
            debug: true,
            isJson: false,
            develoment_url: ["", ""],
            product_url: ["", ""]
        };
        $.extend(config, global);
        var query = function (options, successCb, errorCb,iscache) {
            "function" != typeof errorCb && (iscache = errorCb, errorCb = null);
            var develoment_url = config.develoment_url[0] + options.url + config.develoment_url[1];
            var product_url = config.product_url[0] + options.url + config.product_url[1];
            if(!iscache){
                $.extend(options.data,{'no_cache':1e6 * Math.random()});
                
            }
            var ajaxUrl=config.debug ? develoment_url : product_url;
            if(config.local_flag){
                ajaxUrl=config.debug ? develoment_url +"?token=40-137fd05b88a23021e6d4570a8a91a37d" : product_url+"?token=40-137fd05b88a23021e6d4570a8a91a37d";
                console.log(ajaxUrl);

            }
            $.ajax({
                cache:false,
                url: ajaxUrl,
                type: config.isJson ? "GET" : options.type || 'GET',
                data: options.data || {},
                contentType: options.contentType || 'application/x-www-form-urlencoded',
                dataType: options.dataType || '',
                timeout: options.timeout || 0,
                headers: options.headers || {},
                async: options.async || true,
                global: options.global || true,
                context: options.context || window,
                beforeSend: options.beforeSend || function (xhr, settings) {
                },
                success: options.success || function (data, status, xhr) {
                    successCb && successCb(data);
                },
                error: options.error || function (xhr, errorType, error) {
                    errorCb && errorCb();
                },
                complete: options.complete || function (xhr, status) {
                }
            });
        };
        var api = {};
        for (var key in requestConfig) {
            api.__defineGetter__(key, (function (index) {
                return function () {
                    return function (d, cb, errorCb,iscache) {
                        var options = requestConfig[index];
                        options.data = options.data || {};
                        if(typeof d=="object"){
                            $.extend(options.data,d);
                        }else{
                            options.data=d
                        }
                        query(options, cb, errorCb,iscache);
                    }
                }
            })(key));
        }
        return api;
    };
})(Zepto);