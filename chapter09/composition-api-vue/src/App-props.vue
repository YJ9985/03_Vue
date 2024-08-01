<template>
  <div>
    <PropsChild :msg="msg" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import PropsChild from './components/PropsChild.vue';

const msg = ref('props로 전달될 메세지');
</script>
