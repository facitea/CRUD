<template>
  <div>
    <div>
        <WriteDown />
    </div>
    <div>
        <FeedView />
    </div>
  </div>
</template>

<script>
    import WriteDown from '@/components/WriteDown.vue'
    import FeedView from '@/components/FeedView.vue'

    export default {
    name: 'FeedBoard',
    components: {
        WriteDown, FeedView
        }
    }

    
</script>

<style scoped>

</style>