<template>
  <div class="fancy-photo-box">
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div class="photo">
      <slot name="photo"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FancyPhotoBox',
};
</script>

<style scoped>
.fancy-photo-box {
  width: 300px;
  height: 300px;
  border-radius: 30px;
  border: 10px solid gray;
  background-color: orange;
  margin: 30px 0px;
  text-align: center;
}
</style>
