<template>
<div class="form">
    <h1>Contact Form
			<span>Please fill all the texts in the fields.</span>
		</h1>
		<label>
			<span>Your Name :</span>
			<input id="name" type="text" name="name" placeholder="Your Full Name" />
		</label>
		<label>
			<span>商品名 :</span>
			<input id="goodName" type="text" name="goodName" readonly="readonly" v-bind:value = "name" />
		</label>
        <label>
			<span>价格 :</span>
			<input id="price" type="text" name="price" readonly="readonly" v-bind:value = "price" />
		</label>

		
		<label>
			<span>Subject :</span><select name="selection">
				<option value="Job Inquiry">Job Inquiry</option>
				<option value="General Question">General Question</option>
			</select>
		</label>
		
</div>


</template>
<script>
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



</style>

