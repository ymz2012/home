$(document).ready(function(){
	//点击登录按钮
	$('#btnsubmit').click(function(e){
		e.preventDefault();
		if($('#userID').val() === "" || $('#passwd').val() === ""){
			if($('#userID').val() === ""){
                $('#userID').addClass('has-error');
            }else{
                $('#userID').removeClass('has-error');
            }
            if($('#passwd').val() === ""){
                $('#passwd').addClass('has-error');
            }else{
                $('#passwd').removeClass('has-error');
            }
		}
		function verify(){
			var userID = $('#userID').val();
			$.ajax({
				type:"post",
				url:"/admin/login",
				datatype:'json',
				data:{userId:userID},
				success:function(data){
					console.log(data);		
				}
			});
		}
		verify();
	})
})