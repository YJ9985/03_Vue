<script setup>
// import ParentsFancyPhotoBox from './components/ParentsFancyPhotoBox.vue';
import ParentScopedSlot from './components/ParentScopedSlot.vue';
</script>

<template>
  <div>
    <ParentsFancyPhotoBox />
  </div>
</template>
<script>
export default {
  name: 'App',
  components: {
    // ParentsFancyPhotoBox,
    ParentScopedSlot,
  },
};
</script>

<style scoped></style>
