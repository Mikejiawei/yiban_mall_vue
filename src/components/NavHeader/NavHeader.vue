<template>
  <!-- showDetail 函数 弹出用户信息模块 -->
  <div class="header" @click="showDetail">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="48" height="48" :src="user.yb_userhead">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{user.yb_username}}</span>
          <span class="money"></span>
          <span class="yiban_money">{{user.yb_money}}</span>
        </div>
      </div>
    </div>
    <div class="bulletin-wrapper">
      <span class="bulletin-title"></span><span class="bulletin-text">"请点击头像查看详情！"</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="background">
      <img :src="user.yb_userhead" width="100%" height="100%">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    name: 'v-header',
    props: {
      user: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      showDetail() {
        // 调用creat-api 注册
        this.headerDetailComp = this.headerDetailComp || this.$createHeaderDetail({
          $props: {
            user: 'user'
          }
        })
        this.headerDetailComp.show()
      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./../../assets/stylus/mixin"
  @import "./../../assets/stylus/variable"

  .header
    position: relative
    overflow: hidden
    color: $color-white
    background: $color-background-ss
    .content-wrapper
      position: relative
      display: flex
      align-items: center
      padding: 12px 12px 16px 16px
      .avatar
        flex: 0 0 48px
        width: 48px
        margin-right: 16px
        img
          border-radius: 2px
      .content
        flex: 1
        .title
          display: flex
          align-items: center
          margin-bottom: 8px
          .brand
            width: 20px
            height: 20px
            bg-image('school')
            background-size: 20px 20px
            background-repeat: no-repeat
          .name
            margin-left: 6px
            margin-right: 16px
            font-size: $fontsize-large
            font-weight: bold
            display: block
          .money
            width: 20px
            height: 20px
            bg-image('money')
            background-size: 20px 20px
            background-repeat: no-repeat
          .yiban_money
            margin-left: 6px
            font-size: $fontsize-large
            font-weight: bold
        .description
          margin-bottom: 8px
          line-height: 12px
          font-size: $fontsize-small
        .support
          display: flex
          align-items: center
          .support-ico
            margin-right: 4px
          .text
            line-height: 12px
            font-size: $fontsize-small-s

      .support-count
        position: absolute
        right: 12px
        bottom: 14px
        display: flex
        align-items: center
        padding: 0 8px
        height: 24px
        line-height: 24px
        text-align: center
        border-radius: 14px
        background: $color-background-sss
        .count
          font-size: $fontsize-small-s
        .icon-keyboard_arrow_right
          margin-left: 2px
          line-height: 24px
          font-size: $fontsize-small-s

    .bulletin-wrapper
      position: relative
      display: flex
      align-items: center
      height: 28px
      line-height: 28px
      padding: 0 8px
      background: $color-background-sss
      .bulletin-title
        flex: 0 0 22px
        width: 22px
        height: 12px
        margin-right: 4px
        bg-image('bulletin')
        background-size: 22px 12px
        background-repeat: no-repeat
      .bulletin-text
        flex: 1
        white-space: nowrap
        overflow: hidden
        text-overflow: ellipsis
        font-size: $fontsize-small-s
      .icon-keyboard_arrow_right
        flex: 0 0 10px
        width: 10px
        font-size: $fontsize-small-s
    .background
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      z-index: -1
      filter: blur(10px)
</style>
