<template>
<main>
	<div class="back-home">
            <router-link to="/"><img class="back" src="/static/home.png"></router-link>
    </div>
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
		<modal v-bind:mdShow="mdShow">
				<p slot="message">
					<span>提交成功!</span>
				</p>
				<div slot="btnGroup">
					<!-- 此处有重大bug！！！ -->
					<router-link to="/"></router-link>
					<button type="button" class="btn btn-success">继续购物</button>
				</div>
		</modal> 
	</div>
</main>
	


</template>
<script>
import './../assets/bootstrap/css/bootstrap.css'
import "./../assets/bootstrap/js/jquery.min.js"
import './../assets/bootstrap/js/bootstrap.min.js'
import Modal from "@/components/Modal.vue"

export default {
    data(){
        return{
            username:"",
            name: this.$route.query.name,
			price:this.$route.query.price,
			mdShow:true
        }
	},
	components:{
		Modal:Modal
	},
	methods:{
		
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
.back-home{
    margin: 10px 5px;
    position: absolute;
    height: 40px;
    width: 40px;
    margin-right: 70%;
    border-radius: 50%;
    border:1px solid lightgrey;
    background-color: lightgray; 
    -webkit-box-shadow: 12px 10px 32px 1px rgba(0,0,0,0.75);
}
.back{
    position: relative;
    height: 32px; 
    width: 32px;
    display: inline-block;
    border-radius: 50%;
}

</style>

