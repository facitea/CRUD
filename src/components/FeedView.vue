<template>
  <div class="about">
    <br>
    <span>글 목록</span>
    <br>
    <textarea v-model="message" placeholder="하고싶은말을 적어주세요" class="writedownyourmessage"></textarea>
    <input type="button" value="작성">
  </div>

</template>

<script>
export default {
  name: 'FeedView'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .writedownyourmessage {
        resize: none;
        size: 10px;
        width:100%;border:1;overflow:visible;text-overflow:ellipsis;
    }
</style>
