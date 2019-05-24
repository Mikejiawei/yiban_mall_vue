<template>
<div class="container">
	<div class="row">
		<div class="col-xs-offset-1 col-xs-10">
			<form class="form" id="form">
				<h2>确认订单</h2>
					<div class="form-group">
						<label class="control-label" for="userName">姓名</label>
						<input type="text" class="form-control" id="user" name="user" placeholder="输入名字">
					</div>
					<div class="form-group">
						<label class="control-label" for="contact">联系方式</label>
						<input type="text" class="form-control" id="contact" name="contact" placeholder="输入手机号码">
					</div>
					<div class="form-group">
						<label class="control-label" for="good">商品名称</label>
						<input type="text" class="form-control" id="good" name="good" readonly = "readonly"  v-bind:value = "name">
					</div>
					<div class="form-group">
						<label class="control-label" for="price">商品价格</label>
						<input type="text" class="form-control" id="price" name="price" readonly = "readonly"  v-bind:value = "price">
					</div>
					<cube-button :primary="true">提交</cube-button>
			</form>
		</div>
	</div>
</div>
	


</template>
<script>
import './../assets/bootstrap/css/bootstrap.css'
import "./../assets/bootstrap/js/jquery.min.js"
import './../assets/bootstrap/js/bootstrap.min.js'
export default {
    data(){
        return{
            username:"",
            name: this.$route.query.name,
            price:this.$route.query.price
        }
    }
}
</script>
<style scoped>
html{
    position: relative;
    min-height: 100%;
}

.form{
	padding: 30px;
	margin-top: 20%;
    background-color: blueviolet;
    color: #ffffff;
    -webkit-box-shadow: 18px 22px 30px 1px rgba(0,0,0,0.75);
    -moz-box-shadow: 18px 22px 30px 1px rgba(0,0,0,0.75);
    box-shadow: 18px 22px 30px 1px rgba(0,0,0,0.75);
    border-radius: 10px;
}


.form h2{
	text-align: center;
	padding-bottom: 20px;
	color: black;
	font-weight: bold
}
.label{
	display: inline-block;
	margin-bottom: 5px;
}


</style>

