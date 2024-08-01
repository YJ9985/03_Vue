<template>
  <div>
    <h1>오늘의 기분은?! {{ msg }}</h1>
    <img :src="imgSrc" :alt="msg" />
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { useRoute } from 'vue-router';

const currentRoute = useRoute();
const mood = ref(currentRoute.params.mood);

watch(
  () => currentRoute.params.mood,
  (newMood) => (mood.value = newMood)
);

const msg = computed(() => (mood.value === 'happy' ? '행복합니다' : '신이나요신이나'));

const imgSrc = computed(() =>
  mood.value === 'happy'
    ? 'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MjAzMzU3NzQxMzU4NTIzOTgz/happy-birthday-wishes-messages.jpg'
    : 'https://i.pinimg.com/550x/52/a9/44/52a94478ee4e05b734b0a0091d9a1387.jpg'
);
</script>
