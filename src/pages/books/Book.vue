<template>
  <div class="book-wrap">
    <Card v-for="(book,index) in books" :key="index" :book='book'></Card>
    <p class="text-footer" v-if="!more">没有更多数据</p>
  </div>
</template>

<script>
import Card from '@/components/Card'
import { get } from '../../utils/index.js'
export default {
  components: {
    Card
  },
  data () {
    return {
      books: [],
      page: 0,
      more: true
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
    }
  },
  onPullDownRefresh () {
    this.getBookList(true)
    console.log('下啦')
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
  }
}
</script>

<style lang="scss">

</style>