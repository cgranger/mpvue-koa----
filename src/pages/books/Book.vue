<template>
  <div class="book-wrap">
    <TopSwiper :tops="tops"></TopSwiper>
    <Card v-for="(book,index) in books" :key="index" :book='book'></Card>
    <p class="text-footer" v-if="!more">没有更多数据</p>
  </div>
</template>

<script>
import TopSwiper from '@/components/TopSwiper'
import Card from '@/components/Card'
import { get } from '../../utils/index.js'
export default {
  components: {
    Card,
    TopSwiper
  },
  data () {
    return {
      books: [],
      page: 0,
      more: true,
      tops: []
    }
  },
  methods: {
    async getBookList (init) {
      if (init) {
        this.page = 0
        this.more = true
      };
      wx.showNavigationBarLoading()
      const book = await get('/weapp/booklist', { page: this.page })
      if (book.list.length < 10 && this.page > 0) {
        this.more = false
      }
      if (init) {
        this.books = book.list
        wx.stopPullDownRefresh()
      } else {
        this.books = this.books.concat(book.list)
      }
      setTimeout(() => {
        wx.stopPullDownRefresh()
        wx.hideNavigationBarLoading()
      }, 500)
    },
    async getTop(){
      const tops = await get('/weapp/top')
      this.tops = tops.list;
    }
  },
  onPullDownRefresh () {
    this.getBookList(true)
    console.log('下啦');
    this.getTop()
  },
  onReachBottom () {
    if (!this.more) {
      return false
    };
    this.page = this.page + 1
    this.getBookList()
  },
  created () {
    this.getBookList(true)
    this.getTop()
  }
}
</script>

<style lang="scss">

</style>