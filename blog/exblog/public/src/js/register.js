$(document).ready(function(){
	//点击提交按钮
	$('#btnsubmit').click(function(e){
		e.preventDefault();
		if($('#userID').val() === "" || $('#passwd').val() === "" || $('#repeat').val() === "" || $('#nick').val() === "" || $('#email').val() === ""){
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
            if($('#repeat').val() === ""){
                $('#repeat').addClass('has-error');
            }else{
                $('#repeat').removeClass('has-error');
            }
            if($('#nick').val() === ""){
                $('#nick').addClass('has-error');
            }else{
                $('#nick').removeClass('has-error');
            }
            if($('#email').val() === ""){
                $('#email').addClass('has-error');
            }else{
                $('#email').removeClass('has-error');
            }
		}else if($('#passwd').val() !== $('#repeat').val()){
			alert('两次密码输入不一样');
		}else {
			var jsonAdmins = {
				userId:$('#userID').val(),
				passwd:$('#passwd').val(),
				repeat:$('#repeat').val(),
				nick:$('#nick').val(),
				email:$('#email').val(),
				fr:$('#fr').val()
			}
	        $.ajax({
	            url:'/admin/doRegister',
	            type:'post',
	            data:jsonAdmins,
	            datatype:'json',
	            success:function(data){
	                console.log(data);
	                window.location.href = '/login.html';
	            }
	        });
		}
	})
})