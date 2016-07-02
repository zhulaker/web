function check_info(){
	var username = document.getElementById('input_id').value;
	var password = document.getElementById('input_password').value;
	if(username.match(/^([u4e00-u9fa5]|[ufe30-uffa0]|[a-za-z0-9_]){6,20}$/) && password.match(/^([u4e00-u9fa5]|[ufe30-uffa0]|[a-za-z0-9_]){8,20}$/)){
		return true;
	}else{
		alert('Invalid username or password');
		return false;
	}
}