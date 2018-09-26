<template>
  <div class="bookinfo">
    <div class="thumb">
      <img class="back" :src="info.image" mode="aspectFill">
      <img class="img" :src="info.image" mode='aspectFit'>
      <div class="info">
        <div class="title">{{info.title}}</div>
        <div class="author">{{info.author}}</div>
      </div>
    </div>
    <div class="detail">
      添加人
      <div class="right">
        {{info.rate}}分
        <Rate :value="info.rate"></Rate>
      </div>
    </div>
    <div class="detail">
      {{info.publisher}}
      <div class="right">{{info.price}}</div>
    </div>
    <div class="tags">
      <div class="badge" :key="index" v-for="(tag,index) in info.tags">{{tag}}</div>
    </div>
    <div class="summary">
      <p :key="index" v-for="(sum,index) in info.summary">{{sum}}</p>
    </div>
  </div>
</template>

<script>
import Rate from '@/components/Rate'
export default {
  components: {
    Rate
  },
  props: ['info'],
  computed: {
    userinfo() {
      console.log(this.info)
      return this.info.user_info || {}
    }
  }
}
</script>

<style lang="scss">
.bookinfo {
  font-size: 14px;
  .thumb {
    width: 750rpx;
    height: 500rpx;
    overflow: hidden;
    .back {
      filter: blur(15px);
      width: 100%;
    }
    .img {
      position: absolute;
      width: 100%;
      height: 300rpx;
      left: 0;
      top: 30rpx;
    }
    .info {
      color: white;
      position: absolute;
      width: 100%;
      left: 0;
      top: 330rpx;
      text-align: center;
      .title {
        font-size: 20px;
      }
      .author {
        font-size: 14px;
      }
    }
  }
  .detail {
    padding: 5px 10px;
  }
  .right {
    float: right;
  }
  .badge {
    display: inline-block;
    margin: 5px;
    padding: 5px;
    border-radius: 10px;
    border: 1px #EA5A49 solid;
    color: #EA5A49;
  }
  .summary {
    padding: 0 15px;
    margin-top: 10px;
    p {
      text-indent: 2em;
      font-size: 14px;
    }
  }
}
</style>

