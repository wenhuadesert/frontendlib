<template>
	
	<div class="login-box">
	  <div class="login-logo">
	    <a href="../../index2.html"><b>东软OA系统</b></a>
	  </div>
	  <!-- /.login-logo -->
	  <div class="login-box-body">
	    <p class="login-box-msg">请输入登录信息</p>
	
	    <form action="/oaweb1/userlogin.do" method="post">
	      <div class="form-group has-feedback">
	        <input type="text" class="form-control" placeholder="账号" name="userid">
	        <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
	      </div>
	      <div class="form-group has-feedback">
	        <input type="password" class="form-control" placeholder="密码" name="password">
	        <span class="glyphicon glyphicon-lock form-control-feedback"></span>
	      </div>
	      <div class="row">
	        <!-- /.col -->
	        <div class="col-xs-12">
	          <button type="submit" class="btn btn-primary btn-block btn-flat">登录</button>
	        </div>
	        <!-- /.col -->
	      </div>
	    </form>
	    <!-- /.social-auth-links -->
	    <a href="#">忘记密码</a><br>
	    <a href="register.html" class="text-center">注册新用户</a>
	
	  </div>
	  <!-- /.login-box-body -->
	  
	  </div>
	  <!-- /.login-box -->
</template>

<script>
	export default{
		name:"ClientLogin",
		data(){
			return{
				uerid:"",
				password:""
			}
		}
	}
</script>

<style>
</style>
