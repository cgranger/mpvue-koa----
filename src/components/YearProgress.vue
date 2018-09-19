<template>
  <div class="yearprogress-wrap">
    <progress :percent='percent' activeColor="#EA5A49"></progress>
    <p>{{year}}已经过去了{{days}}天，{{percent}}%</p>
  </div>
</template>

<script>
export default {
  computed: {
    // 获取那一年
    year () {
      return new Date().getFullYear()
    },
    // 获取以过去多少天
    days () {
      let start = new Date()
      start.setMonth(0)
      start.setDate(1)
      // start就是今年第一天
      // 今天的时间戳 减去今年第一天的时间戳
      let offset = new Date().getTime() - start.getTime()
      return parseInt(offset / 1000 / 60 / 60 / 24) + 1
    },
    // 获取多少天所占比重
    percent () {
      return (this.days * 100 / this.getDayOfYear()).toFixed(1)
    }
  },
  methods: {
    // 获取每年总共多少天
    getDayOfYear () {
      return this.isLeapYear() ? 366 : 365
    },
    // 获取每年是否是瑞年或者平年
    isLeapYear () {
      const year = new Date().getFullYear()
      if (year % 400 === 0) {
        return true
      } else if (year % 4 === 0 && year % 100 !== 0) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style lang="scss">
.yearprogress-wrap {
  text-align: center;
  margin-top:10px;
  margin-bottom:40px;
  width:100%;
  progress{
    margin-bottom:10px;
  }
}
</style>
