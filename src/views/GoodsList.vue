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
            <li v-for="(good,index) in goodsList" :key='index' >
              <div class="pic">
                <a href="#"><img v-lazy ="'/static/' + good.imgUrl" ></a>
              </div>
              <div class="main">
                <div class="name">{{good.name}}</div>
                <div class="price">{{good.price}}</div>
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
// import './../assets/css/base.css'
// import './../assets/css/product.css'
// import './../assets/css/login.css'
import NavHeader from '@/components/NavHeader/NavHeader.vue'
import NavFooter from "@/components/NavFooter.vue"
import NavBread from '@/components/NavBread.vue'
import Modal from "@/components/Modal.vue"
import axios from 'axios'
import { getGoods } from '@/api'
import { checkOrder } from "@/api";

export default {
    // 返回必须是 data函数
    data(){
        return{
            // 返回的是对象
            goodsList:[],
            code:this.$route.query.code,
            mdShow:false,
            mdShowCart: false

        }
    },
    components:{
        // 引入子组件
        NavHeader: NavHeader,
        NavFooter: NavFooter,
        NavBread: NavBread,
        Modal:Modal
    },
    // 生命周期初始化
    mounted: function(){
      this._getGoods();
      this._checkOrder()
      //this._getPurchase()
      // this.getGoodsList();
      // this.checkLogin();

    },
    
    // 函数 调用接口
    methods:{
      
      // 接口 获取goods
      _getGoods(){
        getGoods().then((goods)=>{
          this.goodsList = goods.result
          //console.log(this.goodsList)
        })
      },
      _checkOrder(){
        axios({
          url:"api/checkOrder",
          method:"post",
          headers:{'Content-Type': 'application/x-www-form-urlencoded'},
          data:{
            name:"123"
          }
        }).then(res=>{
          console.log(res.data)
        }).catch(e=>{})
      },

      // getGoodsList(){       
      //     axios.get("/goods/list").then((result)=>{
      //       // 用 result.data 的方法获取 商品列表
      //       var res = result.data;
      //       this.goodsList = res.result.list;

      //     })          
      // },

      // git learn
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

