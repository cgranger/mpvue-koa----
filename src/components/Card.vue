<template>
  <a :href="detailUrl">
    <div class="card-wrap">
      <div class="card-thumb">
        <img :src="book.image" mode="aspectFit" class="card-image">
      </div>
      <div class="card-detail">
        <div class="row text-priamry">
          <div class="right ">
            {{book.rate}}
            <Rate :value="book.rate"></Rate>
          </div>
          <div class="left">
            {{book.title}}
          </div>
        </div>
        <div class="row">
          <div class="right">
            浏览量：
          </div>
          <div class="left">
            {{book.author}}
          </div>
        </div>
        <div class="row">
          <div class="right">
            添加人
          </div>
          <div class="left">
            {{book.publisher}}
          </div>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
import Rate from './Rate'
export default {
  components: {
    Rate
  },
  props: ['book'],
  computed: {
    detailUrl () {
      return '/pages/detail/main?id=' + this.book.id
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scope>
.card-wrap {
  padding: 5px;
  overflow: hidden;
  margin: 5px 0 5px 0;
  font-size: 14px;
  .card-thumb {
    width: 90px;
    height: 90px;
    float: left;
    margin: 0 auto;
    overflow: hidden;
    .card-image {
      max-width: 100%;
      max-height: 100%;
    }
  }
  .card-detail {
    margin-left: 100px;
    .row {
      line-height: 20px;
      margin-bottom: 3px;
    }
    .right {
      float: right;
    }
    .left {

      margin-right: 80px;
    }
  }
}
</style>

