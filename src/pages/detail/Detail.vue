<template>
    <section class="detail-wrap">
        {{bookid}}
    </section>
</template>

<script>
export default {
  data () {
    return {
      bookid: ''
    }
  },
  mounted () {
    this.bookid = this.$root.$mp.query.id
  }
}
</script>

<style lang="scss">

</style>
