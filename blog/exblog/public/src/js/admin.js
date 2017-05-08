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
		 _this.readFun = {
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

						console.log({
							data: data
						});
						//将数据库返回的时间数据中的T去掉
						for(var i = 0; i < data.length; i++) {
							data[i].newstime = data[i].newstime.split('T')[0];
						}
						_this.readFun.readGoodsDetail({
							data: data
						});
					}
				});
			}
		};
		
		_this.readFun.refreshNews();
	}
	adminDetail.prototype.eventBind = function() {
		var deleteId = null;
		var _this = this;
		var bindFun = {
			//提交完成编辑按钮
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
							window.location.reload();
						}
					});
				}
			},
			//编辑修改单个文章按钮
			editKnowClick: function() {
				var updateId = null;
				updateId = $(this).parent().prevAll().eq(3).html();
				console.log(updateId);
				$('#updateModal').modal('show');
				$.ajax({
					url: '/adminBlog/curnews',
					type: 'get',
					datatype: 'json',
					data: {
						item_id: updateId
					},
					success: function(data) {
						console.log(data);
						$('#unewstitle').val(data[0].newstitle);
						$('#unewstype').val(data[0].newstype);
						$('#unewscontent').val(data[0].newscontent);
						var utime = data[0].newstime.split('T')[0];
						$('#unewstime').val(utime);
					}
				})
			},
			//删除单个新闻按钮拿到item_id
			deleteKnowClick: function() {
				$('#deleteModal').modal('show');
				deleteId = $(this).parent().prevAll().eq(3).html();
				_this.deleteId = deleteId;
			},
			//点击确认删除这篇博文
			confirmDeleteClick: function() {
				if(deleteId) {
					$.ajax({
						url: '/adminBlog/delete',
						type: 'post',
						data: {
							item_id: _this.deleteId
						},
						success: function() {
							console.log('删除成功');
							$('#deleteModal').modal('hide');
							_this.readFun.refreshNews();
						}
					})
				}
			}
		}

		$('#btnsubmit').on('click', bindFun.btnsubmitClick);//点击新建
		$('#panelDefault').on('click', '.btnEdit', bindFun.editKnowClick);//点击编辑
		$('#panelDefault').on('click', '.btnDel', bindFun.deleteKnowClick);//点击删除
		$('#confirmDelete').on('click', bindFun.confirmDeleteClick);//点击删除后点击确认
	}
})();