<template>
    <div>
<nav-header></nav-header>

<nav-bread>
    <span>Goods</span>
</nav-bread>



<div class="accessory-result-page accessory-page">
  <div class="container">
    <div class="filter-nav">
      <span class="sortby">Sort by:</span>
      <a href="javascript:void(0)" class="default cur">Default</a>
      <a href="javascript:void(0)" class="price">Price <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
      <a href="javascript:void(0)" class="filterby stopPop">Filter by</a>
    </div>
    <div class="accessory-result">
      <!-- filter -->
      <div class="filter stopPop" id="filter">
        <dl class="filter-price">
          <dt>Price:</dt>
          <dd><a href="javascript:void(0)">All</a></dd>
          <dd>
            <a href="javascript:void(0)">0 - 100</a>
          </dd>
        </dl>
      </div>

      <!-- search result accessories list -->
      <div class="accessory-list-wrap">
        <div class="accessory-list col-4">
          <ul>
            <li v-for="item in goodsList" :key='item' >
              <div class="pic">
                <a href="#"><img v-lazy ="'/static/' + item.productImg" ></a>
              </div>
              <div class="main">
                <div class="name">{{item.productName}}</div>
                <div class="price">{{item.productPrice}}</div>
                <div class="btn-area">
                  <a href="javascript:;" class="btn btn-cart" @click="addList(item.productId)">加入购物车</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- <modal v-bind:mdShow="mdShow" v-on:close="closeModal">
    <p slot="message">
        请先登录,否则无法加入到购物车中!
    </p>
    <div slot="btnGroup">
        <a class="btn btn--m" href="javascript:;" @click="mdShow = false">关闭</a>
    </div>
</modal>
<modal v-bind:mdShow="mdShowCart" v-on:close="closeModal">
        <p slot="message">
          <svg class="icon-status-ok">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-status-ok"></use>
          </svg>
          <span>加入购物车成功!</span>
        </p>
        <div slot="btnGroup">
          <a class="btn btn--m" href="javascript:;" @click="mdShowCart = false">继续购物</a>
          <router-link class="btn btn--m btn--red" href="javascript:;" to="/cart">查看购物车</router-link>
        </div>
</modal> -->

<nav-footer></nav-footer>
    </div>    
</template>
<script>
import './../assets/css/base.css'
import './../assets/css/product.css'
import './../assets/css/login.css'
import NavHeader from '@/components/NavHeader.vue'
import NavFooter from "@/components/NavFooter.vue"
import NavBread from '@/components/NavBread.vue'
import Modal from "@/components/Modal.vue"
import axios from 'axios'

export default {
    data(){
        return{
            goodsList:[],
            code:this.$route.query.code,
            mdShow:false,
            mdShowCart: false

        }
    },
    components:{
        NavHeader: NavHeader,
        NavFooter: NavFooter,
        NavBread: NavBread,
        Modal:Modal
    },
    // 生命周期初始化
    mounted: function(){
      this.getGoodsList()
        // this.getGoodsList();
        // this.checkLogin();

    },
    
    methods:{
      checkLogin(){
        if(this.code){
          axios.get("/goods/login",{
                    params:{
                      code:this.code 
                    }
                  }).then((result)=>{
                    var res = result.data;
                    this.goodsList = res.result.list;
                    this.$store.commit("updateUserInfo",res.result.userName);
          })
        }
      },

      // 模拟接口 getGoodsList()
      getGoodsList(){
        axios.get("/api/goods").then((result)=>{
          var res = result.data;
          this.goodsList = res.result
        })
      },

      // getGoodsList(){       
      //     axios.get("/goods/list").then((result)=>{
      //       // 用 result.data 的方法获取 商品列表
      //       var res = result.data;
      //       this.goodsList = res.result.list;

      //     })          
      // },

      // 跳转支付的路由
        addList(productId){
          axios.post('/goods/addList',{
            productId: productId
          }).then((res)=>{
            result = res.data;
            
          })
        },

      closeModal(){
              this.mdShow = false;
              this.mdShowCart = false;
            }
    },
    

    computed:{
    nickName(){
      return this.$store.state.nickName;
    }
  }
}
</script>

