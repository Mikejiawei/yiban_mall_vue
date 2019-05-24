<template>
<div>
<div class="shopcart">
    <div class="content">
    <div class="content-left">
        <div class="logo-wrapper">
            <router-link :to="{path:'/MyList',query:{}}">
                <div class="logo">
                <i class="cubeic-mall"></i>
                </div>
            </router-link>
        </div>
    </div>
    <div class="content-right" >
        <div class="order">
            <p>My Order</p>
        </div>
    </div>
    </div>
</div>
</div>
</template>
<script>
import { checkOrder } from "@/api"
export default {
    data(){
        return{

        }
    },
    methods:{
        _checkOrder(data={}){
        checkOrder(data).then((res)=>{
        console.log(res)
        })
    }
    }
    
}
</script>
<style lang="stylus" scoped>
@import "./../assets/stylus/mixin"
@import "./../assets/stylus/variable"

  .shopcart
    position: relative
    width: 100%
    height: 30px
    margin-bottom 0
    .content
      display: flex
      background: $color-background
      font-size: 0
      color: $color-light-grey
      .content-left
        width: 100px
        .logo-wrapper
          display: inline-block
          vertical-align: top
          position: relative
          top: -10px
          margin: 0 12px
          padding: 6px
          width: 56px
          height: 56px
          box-sizing: border-box
          border-radius: 50%
          background: $color-background
          .logo
            width: 100%
            height: 100%
            border-radius: 50%
            text-align: center
            background: $color-dark-grey
            .cubeic-mall
                line-height: 44px
                font-size: $fontsize-large-xxx
                color: $color-light-grey
     .content-right
        flex: 0 0 105px
        width: 105px
        .order
            padding-right: 10%
            height: 48px
            line-height: 48px
            text-align: center
            font-weight: 700
            font-size: $fontsize-large
            
</style>

