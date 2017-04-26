(function() {
	$(function() {
		new adminDetail();
	});

	function adminDetail() {
		this.init();
	};

	adminDetail.prototype.init = function() {
		this.readDom();
		this.eventBind();
	};

	adminDetail.prototype.readDom = function() {
		var _this = this;
		//方法部分 ejs渲染
		var readFun = {
			ejsGet: function(option) {
				var ohtml = new EJS({
					'element': option.ejsid
				}).render(option.data);
				(option.tagid).html(ohtml);
			},
			readGoodsDetail: function(data) {
				this.ejsGet({
					data: data,
					ejsid: "ejs_panel-body",
					tagid: $("#panel-body")
				});
			},
			refreshNews: function() {
				$.ajax({
					type: 'get',
					url: '/adminBlog/getnews',
					datatype: 'json',
					success: function(data) {
						console.log(data);
					}
				});
			}
		};
		readFun.refreshNews();
	}
	adminDetail.prototype.eventBind = function() {
		var _this = this;
		var bindFun = {
			btnsubmitClick: function(e) {
				e.preventDefault();
				//输入判断
				if($('#newstitle').val() === "" || $('#newstime').val() === "" || $('#newscontent').val() === "") {
					if($('#newstitle').val() === "") {
						$('#newstitle').parent().addClass('has-error');
					} else {
						$('#newstitle').parent().removeClass('has-error');
					}
					if($('#newstime').val() === "") {
						$('#newstime').parent().addClass('has-error');
					} else {
						$('#newstime').parent().removeClass('has-error');
					}
					if($('#newscontent').val() === "") {
						$('#newscontent').parent().addClass('has-error');
					} else {
						$('#newscontent').parent().removeClass('has-error');
					}
				} else {
					var jsonNews = {
						newstitle: $('#newstitle').val(),
						newstype: $('#newstype').val(),
						newscontent: $('#newscontent').val(),
						newstime: $('#newstime').val()
					}
					//提交添加
					$.ajax({
						url: '/adminBlog/insert',
						type: 'post',
						data: jsonNews,
						datatype: 'json',
						success: function(data) {
							console.log(data);
							//refreshNews();
							//window.location.reload();
						}

					});
				}
			}
		}
	}
})();