<template>
    <div class="scroll-wrapper">
        <cube-scroll-nav
            :side="true"
            :data="data"
            :current="current"
            @change="changeHandler"
            @sticky-change="stickyChangeHandler">
            <cube-scroll-nav-panel
            v-for="item in data"
            :key="item.name"
            :label="item.name"
            :title="item.name">
            <ul>
                <li v-for="good in item.goods" :key="good">
                <div>
                    <img v-lazy ="'/static/' + good.imgUrl">
                    <p>{{good.name}}</p>
                    <p>{{good.price}}</p>
                </div>
                </li>
            </ul>
            </cube-scroll-nav-panel>
        </cube-scroll-nav>
    </div>   
</template>

<script>
import { getGoods } from '@/api'

export default {
    name: 'Goods',
    created(){
        this._getGoods()
    },
    data(){
    return{
        // 返回的是对象
        data: [],
        current: ""
    }
},

methods: {
    _getGoods(){
        getGoods().then((goods)=>{
          this.data = goods.result
          this.current = this.data[0].name
          //console.log(this.goodsList)
        })
      },
    changeHandler(label) {
        console.log('changed to:', label)
        },
    stickyChangeHandler(current) {
        console.log('sticky-change', current)
        }
    }
}
</script>

