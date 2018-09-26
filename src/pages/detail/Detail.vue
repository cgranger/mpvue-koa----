<template>
  <section class="detail-wrap">
    <BookInfo :info="info"></BookInfo>
  </section>
</template>

<script>
import { get } from '../../utils/index'
import BookInfo from '@/components/BookInfo'
export default {
  components: {
    BookInfo
  },
  data() {
    return {
      bookid: '',
      info: {}
    }
  },
  methods: {
    async getDetail() {
      const info = await get('/weapp/bookdetail', { id: this.bookid });
      this.info = info;
      console.log(this.info,999)
      wx.setNavigationBarTitle({
        title: info.title
      })
    }
  },
  mounted() {
    this.bookid = this.$root.$mp.query.id
    this.getDetail()
  }
}
</script>

<style lang="scss">

</style>
