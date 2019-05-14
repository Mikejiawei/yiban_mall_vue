<template>
    <div class="scroll-wrapper">
        <!-- <cube-scroll-nav
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
        </cube-scroll-nav> -->
        <p>{{goodsList[0].name}}</p>
    </div>   
</template>

<script>

    export default {
        name: 'Goods',
        props: {
        goodsList: {
            type: Array,
            default() {
            return []
            }
        }
        },
       created(){
           this.data = this.goodsList
       },
        data(){
        return{
            // 返回的是对象
            data: []
            //current: this.goodsList[0].name
            //code:this.$route.query.code,
            //mdShow:false,
            //mdShowCart: false

        }
    },
        methods: {
            changeHandler(label) {
                console.log('changed to:', label)
            },
            stickyChangeHandler(current) {
                console.log('sticky-change', current)
            }
        }
    }
</script>

