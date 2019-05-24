<template>
    <main>
        <div class="container">
            <div class="row">
                <div class="col-xs-offset-1 col-xs-10">
                    <div class="list-wrapper">
                        <ul class="list-group">
                            <li class="list-group-item panel panel-info">
                                <div class="panel-heading">
                                    <img src='/static/2.jpg' alt="goods">
                                </div>
                                <div class="panel-body">
                                    笔记本 | 299 | 2019-05-01-14.55                                 
                                </div>
                                <span class="badge">已完成</span>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>
    </main>
</template>
<script>
import { checkOrder } from "@/api"
import './../assets/bootstrap/css/bootstrap.css'
import "./../assets/bootstrap/js/jquery.min.js"
import './../assets/bootstrap/js/bootstrap.min.js'

export default {
    data(){
        return{
            userID:this.$route.query.userID
        }
    },
    mounted: function(){
        this._checkOrder({userID:this.userID})
    },
    methods:{
        _checkOrder(data={}){
        checkOrder(data).then((res)=>{
        })
    }
    }
}
</script>
<style scoped>
.list-wrapper{
    padding: 10px;
    margin-top: 5%;
    background-color:lightgray;
    -webkit-box-shadow: 18px 22px 30px 1px rgba(0,0,0,0.75);
    -moz-box-shadow: 18px 22px 30px 1px rgba(0,0,0,0.75);
    box-shadow: 12px 22px 30px 1px rgba(0,0,0,0.75);
    border-radius: 10px;
}

.list-group{
    position: relative;
    margin-top: 5%;
}
.panel-body{
    padding-bottom: 5px;
    font-size: 14px;
}
img{
    height: 48px;
    width: 60px;
}

</style>
