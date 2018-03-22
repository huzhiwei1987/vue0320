<template>
  <div class="goods_list">
      <!-- <router-link class="goods_item" v-for="item in goodsList" :key="item.id" :to="'/home/goodsinfo/'+item.id" tag="div">
          <img :src="item.img_url" alt="">
          <h3 class="title">{{item.title}}</h3>
          <div class="info">
              <p class="price">
                  <span class="now">￥{{item.sell_price}}</span>
                  <span class="old">￥{{item.market_price}}</span>
              </p>
              <p class="sell">
                  <span>热卖中</span>
                  <span>剩{{item.stock_quantity}}件</span>
              </p>
          </div>
      </router-link> -->

      <div class="goods_item" v-for="item in goodsList" :key="item.id" @click="goDetail(item.id)">
          <img :src="item.img_url" alt="">
          <h3 class="title">{{item.title}}</h3>
          <div class="info">
              <p class="price">
                  <span class="now">￥{{item.sell_price}}</span>
                  <span class="old">￥{{item.market_price}}</span>
              </p>
              <p class="sell">
                  <span>热卖中</span>
                  <span>剩{{item.stock_quantity}}件</span>
              </p>
          </div>
      </div>

      <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
export default {
  data(){
      return {
          pageIndex: 1,
          goodsList: []
      }
  },
  created(){
      this.getGoodsList()
  },
  methods:{
      getGoodsList(){
          this.$http.get('api/getgoods?pageindex='+this.pageIndex).then(result=>{
              if(result.body.status===0){
                //   this.goodsList = result.body.message
                this.goodsList = this.goodsList.concat(result.body.message)
              }
          })
      },
      getMore(){
          this.pageIndex++
          this.getGoodsList()
      },
      goDetail(id){
        //   this.$router.push('/home/goodsinfo/'+id)
        // this.$router.push({path:'/home/goodsinfo/'+id})

        this.$router.push({name:'goodsinfo',params:{id}})
      }
  }
}
</script>

<style lang="scss" scoped>
    .goods_list{
        display: flex;
        flex-wrap: wrap;
        padding: 7px;
        justify-content: space-between;
        .goods_item{
            width: 49%;
            border:1px solid #ccc;
            box-shadow: 0 0 8 #ccc;
            margin: 0 0 7px 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 280px;
            img{
                width: 100%;
            }
            .title{
                font-size: 14px;
                line-height: 150%;
                padding: 0 5px;
            }
            .info{
                background-color: #eee;
                p{
                    margin: 0;
                    padding: 5px;
                }
                .price{
                    .now{
                        color: red;
                        font-weight: bold;
                        font-size: 16px;
                    }
                    .old{
                        text-decoration: line-through;
                        font-size: 12px;
                        padding: 0 0 0 5px;
                    }
                }
                .sell{
                    display: flex;
                    font-size: 13px;
                    justify-content: space-between;
                }
            }
        }
    }
</style>


