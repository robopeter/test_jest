<template>
  <div>
    <h2>myvalwidget:</h2>
    {{getMyValTwoX}}
    <q-btn @click="increment" label="increment" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'myvalwidget',
  data () {
    return {}
  },
  computed: {
    ...mapGetters(['getMyValTwoX'])
  },
  methods: {
    ...mapActions(['setMyVal']),
    increment: function () {
      this.setMyVal(this.getMyValTwoX + 1)
    }
  }
}
</script>

<style>
</style>
