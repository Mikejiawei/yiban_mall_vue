<template>
    <div>
      <!-- <div class="md-modal modal-msg md-modal-transition" v-bind:class="{'md-show':mdShow}">
        <div class="md-modal-inner">
          <div class="md-top">
            <button class="md-close" @click="closeModal">Close</button>
          </div>
          <div class="md-content">
            <div class="confirm-tips">
              <slot name="message"></slot>
            </div>
            <div class="btn-wrap">
              <slot name="btnGroup"></slot>
            </div>
          </div>
        </div>
      </div>
      <div class="md-overlay" v-if="mdShow" @click="closeModal"></div> -->
      <div class="container">
        <div class="row">
          <div class="col-xs-10">
            <div class="modal" v-bind:class="{'md-show':mdShow}">
              <div class="top col-xs-offset-10">
                <button class="close" @click="closeModal"><span class="glyphicon glyphicon-remove"></span></button>
              </div>
              <div class="content">
                <div class="confirm-tips">
                  <slot name="message"></slot>
                </div>
                <div class="btn-wrap">
                  <slot name="btnGroup"></slot>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import './../assets/bootstrap/css/bootstrap.css'
import "./../assets/bootstrap/js/jquery.min.js"
import './../assets/bootstrap/js/bootstrap.min.js'
    export default{
        props:["mdShow"],
        data(){
            return{
                msg:'hello vue',
                mdShow:true
            }
        },
        methods:{
          closeModal(){
            this.mdShow=false;
          }
        }
    }
</script>

<style>
.md-show{
  margin-top: 50%;
  margin-left: 10%;
  margin-right: 10%;
  visibility: visible;
  display: flex;
  color:orange;
  height:100px;
  padding: 10px;
  background:lightblue;
  -webkit-box-shadow: 18px 22px 30px 1px rgba(0,0,0,0.75);
  -moz-box-shadow: 18px 22px 30px 1px rgba(0,0,0,0.75);
  box-shadow: 18px 22px 30px 1px rgba(0,0,0,0.75);
  border-radius: 10px;
}
.container{
  
  height:100px;
}
.top{
  position: relative;
  margin-top: 0px;
}
.content{
  position: absolute;
  margin-top: 28px;
  margin-left: 20%;
}

</style>
