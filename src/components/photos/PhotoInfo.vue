<template>
  <div class="photoinfo_container">
      <h3>{{photoinfo.title}}</h3>
      <p class="subtitle">
          <span>发表时间：{{photoinfo.add_time | dateFormat}}</span>
          <span>点击：{{photoinfo.click}}次</span>
      </p>

      <hr>

      <!-- 缩略图 -->
      <div class="thumbs">
          <img class="preview-img" v-for="(item, index) in list" :src="item.src" height="100" @click="$preview.open(index, list)" :key="index">
      </div>
      
      <!-- 图片内容 -->
      <div class="content" v-html="photoinfo.content"></div>

      <!-- 评论子组件 -->
      <cmt-box :id="id"></cmt-box>
  </div>
</template>

<script>
import comment from '../subcomponents/comment.vue'
export default {
  data(){
      return{
          id: this.$route.params.id,
          photoinfo : {},
          list: []
      }
  },
  created(){
      this.getPhotoInfo()
      this.getThumbs()
  },
  methods:{
      getPhotoInfo(){
        //   api/getimageInfo/:imgid
          this.$http.get('api/getimageInfo/'+this.id).then(result=>{
              if(result.body.status===0){
                  this.photoinfo = result.body.message[0]
              }
          })
      },
      getThumbs(){
        //   api/getthumimages/:imgid
        this.$http.get('api/getthumimages/'+this.id).then(result=>{
            if(result.body.status===0){
                result.body.message.forEach(item=>{
                    item.w = 600
                    item.h = 400
                })

                this.list = result.body.message
            }
        })
      }
  },
  components:{
      'cmt-box':comment
  }
}
</script>

<style lang="scss" scoped>
    .photoinfo_container{
        padding: 5px;
        h3{
            color: #226aff;
            font-size: 15px;
            text-align: center;
            padding: 15px 0;
        }
        .subtitle{
            display: flex;
            justify-content: space-between;
            font-size: 13px;
        }
        .content{
            font-size: 13px;
            line-height: 200%;
            color: #666;
        }
        .thumbs{
            img{
                margin:10px;
                box-shadow: 0 0 8px #999;
            }
        }
    }
</style>


