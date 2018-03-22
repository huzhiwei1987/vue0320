<template>
  <div>
      <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class="['mui-control-item', item.id===0?'mui-active':'']" v-for="item in cates" :key="item.id" @tap="getPhotoListByCateId(item.id)">
                        {{item.title}}
                    </a>
                </div>
            </div>
        </div>
        <ul class="photo-list">
            <li v-for="item in list" :key="item.id">
                <router-link :to="'/home/photoinfo/'+item.id">
                    <img v-lazy="item.img_url">
                    <div class="info">
                        <h3 class="info_title">{{item.title}}</h3>
                        <p class="info_body">{{item.zhaiyao}}</p>
                    </div>
                </router-link>
            </li>
        </ul>
  </div>
</template>

<script>
import mui from '../../lib/mui/js/mui.min.js'

export default {
  data(){
      return{
          cates: [],
          list: []
      }
  },
  created(){
      this.getImgCategory()
      this.getPhotoListByCateId(0)
  },
  mounted(){
      mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  methods:{
    //   api/getimgcategory
      getImgCategory(){
          this.$http.get('api/getimgcategory').then(result=>{
              if(result.body.status===0){
                  result.body.message.unshift({title:'全部',id:0})
                  this.cates = result.body.message
              }
          })
      },
    //   api/getimages/:cateid
      getPhotoListByCateId(cateId){
          this.$http.get('api/getimages/'+cateId).then(result=>{
              if(result.body.status===0){
                  this.list = result.body.message
              }
          })
      }
  }
}
</script>

<style lang="scss" scoped>
    *{
        touch-action: pan-y
    }
    .photo-list{
        padding: 10px;
        margin: 0;
        padding-bottom: 0;
        li{
            img{
                width: 100%;
                display: block;
            }
            list-style: none;
            background-color: #ccc;
            text-align: center;
            box-shadow: 0 0 6px #999;
            margin-bottom: 10px;
            position: relative;
            img[lazy=loading] {
            width: 40px;
            height: 300px;
            margin: auto;
            }
            .info{
                position: absolute;
                left: 0;
                bottom: 0;
                background:rgba(0,0,0,.4);
                color: #fff;
                text-align: left;
                padding: 5px;
                max-height: 100px;
                .info_title{
                    font-size: 14px;
                    line-height: 150%;
                }
                .info_body{
                    color: #fff;
                    font-size: 13px;
                }
            }
        }
    }
    
</style>

